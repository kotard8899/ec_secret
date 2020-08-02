<template>
  <div>
    <Loading :active.sync="isLoading"></Loading>
    <div class="text-right mt-4">
      <button class="btn btn-sm btn-cart" data-toggle="dropdown" data-flip="false">
        <i class="fa fa-shopping-cart text-dark fa-2x" aria-hidden="true"></i>
        <span class="badge badge-pill badge-danger">{{ carts.carts.length }}</span>
      </button>
      <div class="dropdown-menu dropdown-menu-right p-3" style="min-width: 300px"
          data-offset="400">
          <h6>已選擇商品</h6>
          <table class="table table-sm">
            <tbody>
              <tr v-for="item in carts.carts" :key="item.id">
                <td class="align-middle text-center">
                  <a href="#" class="text-muted" @click.prevent="removeCart(item.id)">
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                  </a>
                </td>
                <td class="align-middle">{{ item.product.title }}</td>
                <td class="align-middle">{{ item.qty }}{{item.product.unit}}</td>
                <td class="align-middle text-right">{{item.total}}</td>
              </tr>
            </tbody>
          </table>
          <button class="btn btn-primary btn-block">
            <i class="fa fa-cart-plus" aria-hidden="true"></i> 結帳去
          </button>
        </div>
    </div>
    <div class="row my-4">
      <div class="col-md-4 mb-4" v-for="item in products" :key="item.id">
        <div class="card border-0 shadow-sm">
          <div style="height: 150px; background-size: cover; background-position: center"
          :style="{background: `url(${item.imageUrl})`}">
          </div>
          <div class="card-body">
            <span class="badge badge-secondary float-right ml-2">{{ item.category }}</span>
            <h5 class="card-title">
              <a href="#" class="text-dark">{{ item.title }}</a>
            </h5>
            <p class="card-text">{{ item.content }}</p>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h5" v-if="item.price===item.origin_price">
                {{ item.origin_price }} 元</div>
              <del class="h6" v-if="item.price!==item.origin_price">
                原價 {{ item.origin_price }} 元</del>
              <div class="h5" v-if="item.price!==item.origin_price">
                現在只要 {{ item.price }} 元</div>
            </div>
          </div>
          <div class="card-footer d-flex">
            <button type="button" class="btn btn-outline-secondary btn-sm"
            @click="getProduct(item)">
              <i class="fas fa-spinner fa-spin" v-if="loadingId === item.id"></i>
              查看更多
            </button>
            <button type="button" class="btn btn-outline-danger btn-sm ml-auto"
            @click="addToCart(item.id)">
              <i class="fas fa-spinner fa-spin" v-if="loadingId === item.id"></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row my-3 justify-content-center">
      <div class="col-md-6">
        <table class="table">
          <thead>
            <th></th>
            <th>品名</th>
            <th>數量</th>
            <th>單價</th>
          </thead>
          <tbody>
            <tr v-for="item in carts.carts" :key="item.id">
              <td class="align-middle">
                <button type="button" class="btn btn-outline-danger btn-sm"
                @click="removeCart(item.id)">
                  <i class="far fa-trash-alt"></i>
                </button>
              </td>
              <td class="align-middle">
                {{ item.product.title }}
                <div class="text-success" v-if="item.coupon">
                  已套用優惠券
                </div>
              </td>
              <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
              <td class="align-middle text-right">{{ item.final_total | currency }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-right">總計</td>
              <td class="text-right">{{ carts.total | currency }}</td>
            </tr>
            <tr v-if="carts.final_total !== carts.total">
              <td colspan="3" class="text-right text-success">折扣價</td>
              <td class="text-right text-success">{{ carts.final_total | currency }}</td>
            </tr>
          </tfoot>
        </table>
        <div class="input-group mb-3 input-group-sm">
          <input type="text" class="form-control"
          placeholder="請輸入優惠碼"
          v-model="couponCode">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" @click="addCouponCode"
            >
              套用優惠碼
            </button>
          </div>
        </div>
        <div v-if="message" class="text-danger">{{ message }}</div>
        <ValidationObserver ref="form">
          <form class="mt-5" @submit.prevent="createOrder">
            <div class="form-group">
              <label for="useremail">Email</label>
              <validation-provider rules="required|email" v-slot="{ failed, errors }">
                <input type="email" class="form-control" name="email" id="useremail"
                  v-model="form.user.email" placeholder="請輸入 Email"
                  :class="{'is-invalid':failed}">
                <span class="text-danger">{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <div class="form-group">
              <label for="username">收件人姓名</label>
              <validation-provider rules="required" v-slot="{ failed, errors }">
                <input type="text" class="form-control" name="姓名" id="username"
                  v-model="form.user.name" placeholder="請輸入姓名"
                  :class="{'is-invalid': failed}" >
                <span class="text-danger">{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <div class="form-group">
              <label for="usertel">收件人電話</label>
              <validation-provider rules="required" v-slot="{ failed, errors }">
                <input type="tel" class="form-control" id="usertel" name="電話"
                v-model="form.user.tel" placeholder="請輸入電話"
                :class="{'is-invalid': failed}">
                <span class="text-danger">{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <div class="form-group">
              <label for="useraddress">收件人地址</label>
              <validation-provider rules="required" v-slot="{ failed, errors }">
                <input type="text" class="form-control" name="住址"
                id="useraddress" v-model="form.user.address"
                placeholder="請輸入地址"
                :class="{'is-invalid': failed}">
                <span class="text-danger">{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <div class="form-group">
              <label for="comment">留言</label>
              <textarea name="" id="comment" class="form-control" cols="30"
              rows="10" v-model="form.message"></textarea>
            </div>
            <div class="text-right">
              <button class="btn btn-danger">送出訂單</button>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ product.title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="product.imageUrl" class="img-fluid">
            <blockquote class="blockquote mt-3">
              <p class="mb-0">{{ product.content }}</p>
              <footer class="blockquote-footer text-right">{{ product.description }}</footer>
            </blockquote>
            <div class="d-flex justify-content-between align-items baseline">
              <div class="h4" v-if="product.price === product.origin_price">
                {{ product.origin_price }} 元</div>
              <div class="h6" v-if="product.price !== product.origin_price">
                原價 {{ product.origin_price }} 元</div>
              <div class="h4" v-if="product.price !== product.origin_price">
                現在只要 {{ product.price }} 元</div>
            </div>
            <select name="" class="form-control mt-3" v-model="product_num">
              <option value="" selected>--請選擇數量--</option>
              <option :value="num" v-for="num in 10" :key="num">
                選購 {{ num }} {{ product.unit }}
              </option>
            </select>
          </div>
          <div class="modal-footer">
            <div class="text-muted text-nowrap mr-3">
              小記 <strong>{{ product_num * product.price }}</strong> 元
            </div>
            <button type="button" class="btn btn-primary"
            @click="addToCart(product.id, product_num)">
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { ValidationProvider, extend, ValidationObserver } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: '{_field_}欄位不得為空',
});
extend('email', {
  ...email,
  message: '信箱格式不正確',
});

export default {
  name: 'CustomerOrder',
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      product_num: 1,
      couponCode: '',
      message: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  methods: {
    ...mapActions(['getProducts', 'getCarts']),
    getProduct(item) {
      this.$store.dispatch('getProduct', item);
      this.product_num = 1;
    },
    addToCart(id, qty = 1) {
      this.$store.dispatch('addToCart', { id, qty });
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
          vm.message = '';
          vm.getCarts();
        } else {
          vm.message = response.data.message;
          vm.$store.dispatch('updateLoading', false);
        }
      });
    },
    createOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      vm.$refs.form.validate().then((success) => {
        if (success) {
          vm.$store.dispatch('updateLoading', true);
          vm.$http.post(api, { data: vm.form }).then((response) => {
            if (response.data.success) {
              vm.$router.push(`/customer_checkout/${response.data.orderId}`);
            }
            vm.$store.dispatch('updateLoading', false);
          });
        }
      });
    },
  },
  created() {
    this.getProducts();
    this.getCarts();
  },
  computed: {
    ...mapGetters(['isLoading', 'products', 'product', 'loadingId', 'carts']),
  },
};
</script>
