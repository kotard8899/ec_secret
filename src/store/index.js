import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import $ from 'jquery';

Vue.use(Vuex);


export default new Vuex.Store({
  strict: true,
  state: {
    cartOrder: [],
    isLoading: false,
    isDisabled: false,
    carts: {
      carts: [],
    },
    products: [],
    product: {},
    status: {
      loadingId: '',
      runGif: '',
    },
  },
  actions: {
    updateLoading(context, payload) {
      context.commit('LOADING', payload);
    },
    getProducts(context) {
      context.commit('LOADING', true);
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      axios.get(api).then((response) => {
        if (response.data.success) {
          context.commit('LOADING', false);
          context.commit('PRODUCTS', response.data.products);
        }
      });
    },
    getProduct(context, item) {
      context.commit('LOADINGID', item.id);
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_CUSTOMPATH}/product/${item.id}`;
      axios.get(api).then((response) => {
        if (response.data.success) {
          context.commit('PRODUCT', response.data.product);
          $('#productModal').modal('show');
          context.commit('LOADINGID', '');
        }
      });
    },
    getProductToPage(context, id) {
      context.commit('LOADING', true);
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
      axios.get(api).then((response) => {
        if (response.data.success) {
          context.commit('PRODUCT', response.data.product);
          context.commit('LOADING', false);
        }
      });
    },
    addToCart(context, { id, qty = 1 }) {
      context.commit('LOADINGID', id);
      const cart = {
        product_id: id,
        qty,
      };
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      if (!this.state.isDisabled) {
        context.commit('ISDISABLED', true);
        axios.post(api, { data: cart }).then((response) => {
          if (response.data.success) {
            context.commit('LOADINGID', '');
            context.commit('RUNGIF', id);
            setTimeout(() => {
              context.commit('RUNGIF', '');
            }, 1500);
            setTimeout(() => {
              context.commit('ISDISABLED', false);
            }, 2000);
            $('#productModal').modal('hide');
            this.dispatch('getCarts');
          }
        });
      }
    },
    getCarts(context) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      axios.get(api).then((response) => {
        if (response.data.success) {
          context.commit('CARTS', response.data.data);
          context.commit('CARTORDER', response.data.data.carts);
        }
      });
    },
    removeCart(context, id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      context.commit('LOADING', true);
      axios.delete(api).then((response) => {
        if (response.data.success) {
          context.commit('LOADING', false);
          this.dispatch('getCarts');
        }
      });
    },
    cartChangeQty(context, { id, productId, num }) {
      const delAPI = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      const addAPI = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      const changeCart = {
        product_id: productId,
        qty: num,
      };
      axios
        .all([axios.delete(delAPI), axios.post(addAPI, { data: changeCart })])
        .then(axios.spread(() => {
          context.commit('LOADING', false);

          this.dispatch('getCarts');
        }));
    },
    updateProductQty(context, { originCartId, originProductId, newQty }) {
      context.commit('LOADINGID', originProductId);
      const delAPI = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_CUSTOMPATH}/cart/${originCartId}`;
      const addAPI = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      const changeCart = {
        product_id: originProductId,
        qty: newQty,
      };
      if (!this.state.isDisabled) {
        context.commit('ISDISABLED', true);
        axios
          .all([axios.delete(delAPI), axios.post(addAPI, { data: changeCart })])
          .then(axios.spread(() => {
            context.commit('LOADINGID', '');
            context.commit('RUNGIF', originProductId);
            setTimeout(() => {
              context.commit('RUNGIF', '');
            }, 1500);
            setTimeout(() => {
              context.commit('ISDISABLED', false);
            }, 2000);
            this.dispatch('getCarts');
          }));
      }
    },
  },
  mutations: {
    LOADING(state, payload) {
      state.isLoading = payload;
    },
    ISDISABLED(state, payload) {
      state.isDisabled = payload;
    },
    PRODUCTS(state, payload) {
      state.products = payload;
    },
    PRODUCT(state, payload) {
      state.product = payload;
    },
    LOADINGID(state, payload) {
      state.status.loadingId = payload;
    },
    RUNGIF(state, payload) {
      state.status.runGif = payload;
    },
    CARTS(state, payload) {
      state.carts = payload;
    },
    CARTORDER(state, payload) {
      state.cartOrder = payload.sort((a, b) => b.qty - a.qty);
    },
  },
  getters: {
    isLoading: (state) => state.isLoading,
    isDisabled: (state) => state.isDisabled,
    runGif: (state) => state.status.runGif,
    products: (state) => state.products,
    product: (state) => state.product,
    loadingId: (state) => state.status.loadingId,
    carts: (state) => state.carts,
  },
  modules: {
  },
});
