<template>
  <div class="bg-primary pt-5">
    <Loading :active.sync="isLoading"></Loading>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 pb-4">
          <div class="progress-step text-center row mb-4">
            <div class="col-4 step-1 off-step">
              <div class="progress-dot"></div>
              <div class="progress-text">1. 訂單資料</div>
            </div>
            <div class="col-4 step-2 on-step"
            :class="{'off-step': order.is_paid}">
              <div class="progress-dot"></div>
              <div class="progress-text">2. 確認付款</div>
            </div>
            <div class="col-4 step-3"
            :class="{'on-step': order.is_paid}">
              <div class="progress-dot"></div>
              <div class="progress-text">3. 完成交易</div>
            </div>
          </div>
          <h4 class="text-white pb-2">
            <i class="fas fa-paw"></i>
            訂單資訊</h4>
          <form class="pay-form" @submit.prevent="payOrder">
            <table class="table">
              <thead>
                <th colspan="2">商品</th>
                <th>數量</th>
                <th class="text-center">單價</th>
              </thead>
              <tbody>
                <tr v-for="item in order.products" :key="item.id">
                  <td>
                    <div class="bg-cover checkout-img" :style="{backgroundImage:
                    `url(${item.product.imageUrl})`}"></div>
                  </td>
                  <td class="align-middle">{{ item.product.title }}</td>
                  <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                  <td class="align-middle text-right">{{ item.final_total | currency }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="3" class="text-right h5">總計</td>
                  <td class="text-right h5">{{ order.total | currency }}</td>
                </tr>
              </tfoot>
            </table>
            <h4 class="text-white pb-2 pt-3">
              <i class="fas fa-cat"></i>
              用戶資訊</h4>
            <table class="table">
              <tbody>
                <tr>
                  <th>Email</th>
                  <td>{{ order.user.email }}</td>
                </tr>
                <tr>
                  <th>姓名</th>
                  <td>{{ order.user.name }}</td>
                </tr>
                <tr>
                  <th>收件人電話</th>
                  <td>{{ order.user.tel }}</td>
                </tr>
                <tr>
                  <th>收件人地址</th>
                  <td>{{ order.user.address }}</td>
                </tr>
                <tr>
                  <th>付款狀態</th>
                  <td>
                    <span v-if="!order.is_paid">尚未付款</span>
                    <span v-else class="text-accent">付款完成</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="row align-items-center" v-if="order.is_paid === false">
              <div class="col-sm-6 order-1 order-sm-0 mt-4 m-sm-0">
                <button class="btn btn-back rounded-0 m-auto m-sm-0 d-flex ls-2"
                @click="$router.go(-1)">
                  <span class="material-icons">
                  keyboard_arrow_left
                  </span>
                  回到訂單資料
                </button>
              </div>
              <div class="col-sm-6 text-right">
                <button class="w-100 btn btn-accent rounded-0 py-3 px-5 ls-2">確認付款</button>
              </div>
            </div>
          </form>
          <div class="text-right" v-if="order.is_paid !== false">
            <router-link to="/" class="d-block d-sm-inline-block
            btn btn-accent rounded-0 py-3 px-5 ls-2">
              回到首頁
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-white border-0 py-4 rounded-0">
            <h5 class="modal-title text-beauty ls-2">您已付款成功！</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-footer border-0 bg-white rounded-0">
            <router-link to="/goods" class="w-100 btn btn-accent rounded-0 py-3 px-5 ls-2"
            data-dismiss="modal">
              繼續購物
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import $ from 'jquery';

export default {
  name: 'Payment',
  data() {
    return {
      orderId: '',
      order: {
        user: {},
      },
    };
  },
  methods: {
    ...mapActions(['getCarts']),
    getOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_CUSTOMPATH}/order/${vm.orderId}`;
      vm.$store.dispatch('updateLoading', true);
      vm.$http.get(api).then((response) => {
        if (response.data.success) {
          vm.$store.dispatch('updateLoading', false);
          vm.order = response.data.order;
        }
      });
    },
    payOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_CUSTOMPATH}/pay/${vm.orderId}`;
      vm.$store.dispatch('updateLoading', true);
      vm.$http.post(api).then((response) => {
        if (response.data.success) {
          vm.getOrder();
          $('#myModal').modal('show');
          this.getCarts();
        }
        vm.$store.dispatch('updateLoading', false);
      });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  computed: {
    ...mapGetters(['isLoading, carts']),
  },
};
</script>
