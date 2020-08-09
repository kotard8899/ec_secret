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
      <h5 class="text-danger mt-3 pt-5 pb-3 ml-minus">買了此商品的人，也買了...</h5>
      <div class="row">
        <div class="col-md-3 px-2 pb-4" v-for="item in randomFour" :key="item.id">
          <a href="#" class="image-wrap" @click.prevent="toDetail(item.id)">
            <div class="rectangle-image bg-cover"
            :style="{backgroundImage: `url(${item.imageUrl})`}"></div>
          </a>
          <a href="#" class="detail-name" @click.prevent="toDetail(item.id)">
            {{ item.title }}
          </a>
          <div class="pt-1">
            <span class="detail-price">特價 {{ item.price }}</span>
            <del class="detail-origin-price">原價 {{ item.origin_price }}</del>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 ls-2 lh-30">
          <h5 class="text-danger ml-minus py-4">購物說明</h5>
          <p class="text-white">若您具有法人身份為常態性且大量購買者，或有特殊作業需求，建議您可洽詢「企業採購」。</p>
          <p class="text-about pt-2">退換貨說明</p>
          <p class="text-white">
            會員所購買的商品均享有到貨十天的猶豫期（含例假日）。退回之商品必須於猶豫期內寄回。
            <br>
            辦理退換貨時，商品必須是全新狀態與完整包裝(請注意保持商品本體、
            配件、贈品、保證書、 原廠包裝及所有附隨文件或資料的完整性，切勿缺漏任何配件或損毀原廠外盒)。 退回商品無法回復原狀者，恐將影響退貨權益或需負擔部分費用。
            <br>
            訂購本商品前請務必詳閱商品退換貨原則。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Detail',
  data() {
    return {
      productId: '',
    };
  },
  inject: ['reload'],
  methods: {
    ...mapActions(['getProducts']),
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
    toDetail(id) {
      this.reload();
      this.$router.push(`/detail/${id}`);
    },
  },
  computed: {
    ...mapGetters(['isLoading', 'products', 'product', 'loadingId', 'carts', 'runGif']),
    randomFour() {
      const num = Math.floor(Math.random() * 17);
      return Object.values(this.products).slice(num, num + 4);
    },
  },
  created() {
    this.productId = this.$route.params.productId;
    this.getProduct(this.productId);
    this.getProducts();
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
