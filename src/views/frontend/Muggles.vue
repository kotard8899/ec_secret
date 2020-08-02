<template>
  <div class="bg-dark">
    <Loading :active.sync="isLoading"></Loading>
    <div class="bg-cover cellection-bg d-flex align-items-center justify-content-center mb-5" style="background-image:url(https://images.unsplash.com/photo-1495745512803-dd531415ff55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80);">
    <h2 class="display-4 text-white font-weight-normal ls-2">無聊的人</h2>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-md-4 mb-4 px-2" v-for="item in filterData" :key="item.id">
          <a href="#" class="card border-0 br-2 goods-card" @click.prevent="toDetail(item.id)">
            <div class="bg-cover card-img-cus"
            :style="{backgroundImage: `url(${item.imageUrl})`}">
              <div class="four-sides card-blur"></div>
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <div class="d-flex">
                <a href="#" class="btn btn-outline-beauty card-btn mr-auto mt-auto br-3"
                @click.stop.prevent="addToCart(item.id)">
                  <i class="fas fa-shopping-basket" v-if="runGif !== item.id"></i>
                  <img src="@/assets/images/checkmark-ok2.gif" v-if="runGif === item.id"
                  width="20" class="pb-1">
                </a>
                <div class="d-flex flex-column">
                  <del class="text-right text-gray">原價 ＄{{ item.origin_price }}</del>
                  <span class="h5 text-beauty">NT ＄{{ item.price }}</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'celebrities',
  data() {
    return {
    };
  },
  methods: {
    ...mapActions(['getProducts']),
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
      this.$router.push(`/detail/${id}`);
    },
  },
  computed: {
    ...mapGetters(['isLoading', 'products', 'product', 'loadingId', 'carts', 'runGif']),
    filterData() {
      return Object.values(this.products).filter((item) => item.category === '凡人');
    },
  },
  created() {
    this.getProducts();
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
