<template>
  <div class="bg-primary pt-5">
    <Loading :active.sync="isLoading"></Loading>
    <div class="container">
      <div class="row">
        <div class="col-md-8 pb-4">
          <div class="progress-step text-center row mb-4">
            <div class="col-4 step-1 on-step">
              <div class="progress-dot"></div>
              <div class="progress-text">1. 訂單資料</div>
            </div>
            <div class="col-4 step-2">
              <div class="progress-dot"></div>
              <div class="progress-text">2. 確認付款</div>
            </div>
            <div class="col-4 step-3">
              <div class="progress-dot"></div>
              <div class="progress-text">3. 完成交易</div>
            </div>
          </div>
          <ValidationObserver ref="form">
            <form class="checkout-form" @submit.prevent="createOrder">
              <div class="form-row">
                <div class="form-group col-md-6">
                <label for="username">姓名</label>
                <validation-provider rules="required" v-slot="{ failed, errors }">
                  <input type="text" class="form-control" name="姓名" id="username"
                    v-model="form.user.name" :class="{'is-invalid': failed}" >
                  <span class="text-info">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div class="form-group col-md-6">
                <label for="usertel">電話</label>
                <validation-provider rules="required" v-slot="{ failed, errors }">
                  <input type="tel" class="form-control" id="usertel" name="電話"
                  v-model="form.user.tel" :class="{'is-invalid': failed}">
                  <span class="text-info">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              </div>
              <div class="form-group">
                <label for="useremail">Email</label>
                <validation-provider rules="required|email" v-slot="{ failed, errors }">
                  <input type="email" class="form-control" name="email" id="useremail"
                    v-model="form.user.email" :class="{'is-invalid':failed}">
                  <span class="text-info">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div class="form-group">
                <label for="useraddress">地址</label>
                <validation-provider rules="required" v-slot="{ failed, errors }">
                  <input type="text" class="form-control" name="住址"
                  id="useraddress" v-model="form.user.address"
                  :class="{'is-invalid': failed}">
                  <span class="text-info">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div class="form-group">
                <label for="comment">備註<span class="text-danger">（選填）</span></label>
                <textarea name="" id="comment" class="form-control" cols="30"
                rows="10" v-model="form.message"></textarea>
              </div>
              <div class="d-flex">
              <button class="btn btn-back rounded-0 mr-auto d-flex"
              @click="$router.go(-1)">
                <span class="material-icons">
                keyboard_arrow_left
                </span>
                回到購物車
              </button>
              <button class="btn btn-accent rounded-0 py-3 px-5"
              @click="createOrder">
                送出訂單
              </button>
            </div>
            </form>
          </ValidationObserver>
        </div>
        <div class="col-md-4 text-white">
          <h4 class="pb-3">購物清單</h4>
          <div class="pb-2" v-for="item in carts.carts" :key="item.id">
            <div class="row justify-content-around pb-3">
              <div class="col-3">
                <div class="bg-cover checkout-img" :style="{backgroundImage:
                `url(${item.product.imageUrl})`}"></div>
              </div>
              <div class="col-6">
                <div class="h6 ls-2">{{ item.product.title }}</div>
                <div class="h6 ls-2"> X {{ item.qty }}</div>
              </div>
              <div class="col-3">
                <span>{{ item.product.price | currency }}</span>
              </div>
            </div>
          </div>
          <div class="bl"></div>
          <div class="d-flex pt-4">
            <h4>總計：</h4>
            <h4 class="ml-auto">{{ carts.final_total | currency }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, extend, ValidationObserver } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import { mapGetters, mapActions } from 'vuex';

extend('required', {
  ...required,
  message: '{_field_}欄位不得為空',
});
extend('email', {
  ...email,
  message: '信箱格式不正確',
});

export default {
  name: 'Checkout',
  data() {
    return {
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
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  methods: {
    ...mapActions(['getCarts']),
    createOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      vm.$refs.form.validate().then((success) => {
        if (success) {
          vm.$store.dispatch('updateLoading', true);
          vm.$http.post(api, { data: vm.form }).then((response) => {
            if (response.data.success) {
              vm.$router.push(`/payment/${response.data.orderId}`);
            }
            vm.$store.dispatch('updateLoading', false);
          });
        }
      });
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
