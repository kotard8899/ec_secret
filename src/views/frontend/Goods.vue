<template>
  <div class="bg-dark pt-5">
    <Loading :active.sync="isLoading"></Loading>
    <div class="container">
      <div class="row">
        <div class="col-md-3 pb-4">
          <div class="cus-list-group sticky-top">
            <a href="#" class=""
            @click.prevent="searchText = ''"
            :class="{'active':searchText === ''}">
              全部
            </a>
            <a href="#" class=""
            @click.prevent="searchText = '名人'"
            :class="{'active':searchText === '名人'}">
              名人特區
            </a>
            <a href="#" class=""
            @click.prevent="searchText = '凡人'"
            :class="{'active':searchText === '凡人'}">
              無聊的人
            </a>
            <a href="#" class=""
            @click.prevent="searchText = '外星人'"
            :class="{'active':searchText === '外星人'}">
              特有品種
            </a>
          </div>
        </div>
        <div class="col-md-9">
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
                      <i class="fas fa-shopping-basket"></i>
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
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Goods',
  data() {
    return {
      searchText: '',
    };
  },
  methods: {
    ...mapActions(['getProducts', 'getCarts']),
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
    getProduct(item) {
      this.$store.dispatch('getProduct', item);
      this.product_num = 1;
    },
    toDetail(id) {
      this.$router.push(`/detail/${id}`);
    },
  },
  computed: {
    ...mapGetters(['isLoading', 'products', 'product', 'loadingId', 'carts']),
    filterData() {
      const vm = this;
      if (vm.searchText) {
        return Object.values(this.products).filter((item) => item.category === vm.searchText);
      }
      return vm.products;
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
