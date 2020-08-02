<template>
  <div class="bg-dark pt-5">
    <Loading :active.sync="isLoading"></Loading>
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <div class="cus-list-group">
            <a href="#" @click="$router.go(-1)">
              <span class="material-icons mi-big">
              keyboard_return
              </span>
            </a>
          </div>
        </div>
        <div class="col-md-5 bg-cover detail-img"
        :style="{backgroundImage: `url(${product.imageUrl})`}"></div>
        <div class="col-md-5 text-white pl-4">
          <div class="h1">{{ product.title }}</div>
          <div class="h2">品種：{{ product.category }}</div>
          <div class="h5">{{ product.description }}</div>
          <div class="d-flex justify-content-between align-items-baseline py-3">
            <del>原價 ＄{{ product.origin_price}}</del>
            <span class="h3 text-danger">優惠價 ＄{{ product.price }}</span>
          </div>
          <div class="hr-white mb-4"></div>
          <div class="h4 mb-3">您可獲得的資訊有：</div>
          <p class="h5 py-1 mb-0">地址</p>
          <p class="h5 py-1 mb-0">電話</p>
          <p class="h5 py-1 mb-0">LINE</p>
          <p class="h5 py-1 mb-0">起床時間</p>
          <p class="h5 py-1 mb-0">興趣</p>
          <p class="h5 py-1 mb-0">常去餐廳</p>
          <p class="h5 py-1 mb-0">愛吃的食物</p>
          <div class="text-right pt-4">
            <button class="btn btn-outline-light btn-lg rounded-0 btn-detail ls-2"
            @click.prevent="addToCart(product.id)">
              <span v-if="runGif !== product.id">立即購買</span>
              <img src="@/assets/images/checkmark-ok2.gif" v-if="runGif === product.id"
                  width="20" class="pb-1">
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Detail',
  data() {
    return {
      productId: '',
    };
  },
  methods: {
    getProduct(id) {
      this.$store.dispatch('getProductToPage', id);
      this.product_num = 1;
    },
    addToCart(id, qty = 1) {
      const target = this.carts.carts.filter((item) => item.product_id === id);
      if (target.length > 0) {
        const sameCartItem = target[0];
        const originQty = sameCartItem.qty;
        const originCartId = sameCartItem.id;
        const originProductId = sameCartItem.product.id;
        const newQty = originQty + qty;
        this.$store.dispatch('updateProductQty', { originCartId, originProductId, newQty });
      } else {
        this.$store.dispatch('addToCart', { id, qty });
      }
    },
  },
  computed: {
    ...mapGetters(['isLoading', 'products', 'product', 'loadingId', 'carts', 'runGif']),
  },
  created() {
    this.productId = this.$route.params.productId;
    this.getProduct(this.productId);
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
