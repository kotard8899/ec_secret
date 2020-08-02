<template>
  <div class="bg-dark pt-5">
    <Loading :active.sync="isLoading"></Loading>
    <div class="container">
      <div class="row">
        <div class="col-md-8 text-white">
          <h2 v-if="carts.carts.length === 0">您還沒買東西 滾</h2>
          <div class="pb-4 pt-2" v-for="item in carts.carts" :key="item.id">
            <div class="row justify-content-around pb-3 align-items-center">
              <div class="col-6 col-md-4 col-lg-3">
                <button class="bg-cover carts-img border-0" :style="{backgroundImage:
                `url(${item.product.imageUrl})`}" @click.prevent="toDetail(item.product.id)">
                </button>
              </div>
              <div class="col-6 col-md-8 col-lg-9">
                <div class="row">
                  <div class="col-md-6 col-lg-4 d-flex align-items-center">
                    <h4>{{ item.product.price | currency }}</h4>
                  </div>
                  <div class="col-md-6 col-lg-4 cal-btns">
                    <button class="btn" @click.prevent="
                    changeQty(item.id, item.product.id, item.qty, false)">
                      <span class="material-icons">
                      remove
                      </span>
                    </button>
                    <input type="text" v-model="item.qty">
                    <button class="btn" @click.prevent="
                    changeQty(item.id, item.product.id, item.qty, true)">
                      <span class="material-icons">
                      add
                      </span>
                    </button>
                  </div>
                  <div class="col-lg-4 d-flex align-items-center">
                    <button class="material-icons h3 del-btn mb-0"
                    @click.prevent="removeCart(item.id)">
                    delete_outline
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="h5 ls-2">{{ item.product.title }}</div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="bg-light p-3 sticky-top" style="top:15px;">
            <div class="h5 pb-4 ls-2" :class="{'text-danger':carts.final_total !== carts.total}">
              總金額：{{ carts.final_total | currency }}
            </div>
            <div class="input-group mb-3 input-group-sm coupon-group">
              <input type="text" class="form-control rounded-0"
              placeholder="請輸入優惠碼" v-model="couponCode">
              <div class="input-group-append">
                <button class="btn btn-outline-secondary rounded-0" type="button"
                @click.prevent="addCouponCode">
                  套用優惠碼
                </button>
              </div>
            </div>
            <div v-if="message === 'success'" class="text-success">成功套用優惠券</div>
            <div v-else-if="message !== 'success' && message "
            class="text-info">{{ message }}</div>
            <div class="text-right pt-4">
              <router-link class="btn btn-outline-danger btn-lg rounded-0 px-5 py-2 ls-2 w-100"
              to="/checkout">
                結帳
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Carts',
  data() {
    return {
      couponCode: '',
      message: '',
    };
  },
  methods: {
    ...mapActions(['getCarts']),
    toDetail(id) {
      this.$router.push(`/detail/${id}`);
    },
    removeCart(id) {
      this.$store.dispatch('removeCart', id);
    },
    addCouponCode() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      const coupon = {
        code: vm.couponCode,
      };
      vm.$store.dispatch('updateLoading', true);
      vm.$http.post(api, { data: coupon }).then((response) => {
        if (response.data.success) {
          vm.$store.dispatch('updateLoading', false);
          vm.message = 'success';
          vm.getCarts();
        } else {
          vm.message = response.data.message;
          vm.$store.dispatch('updateLoading', false);
        }
      });
    },
    changeQty(id, productId, qty, calc) {
      this.$store.commit('LOADING', true);
      let num;
      if (calc === true) {
        num = qty + 1;
      } else {
        num = qty - 1;
      }
      if (num === 0) {
        this.$store.dispatch('removeCart', id);
      } else {
        this.$store.dispatch('cartChangeQty', { id, productId, num });
      }
    },
  },
  computed: {
    ...mapGetters(['isLoading', 'loadingId', 'carts']),
  },
  created() {
    this.getCarts();
    this.message = '';
  },
};
</script>
