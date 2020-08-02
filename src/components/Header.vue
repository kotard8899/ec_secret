<template>
  <div>
    <nav class="site-header navbar navbar-expand-md">
      <button class="navbar-toggler" type="button"
      data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false"
      aria-label="Toggle navigation">
        <div class="nav-ham">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div class="nav-title mr-md-4">
        <router-link to="/" class="d-md-block d-none">
          <img src="../assets/images/logo-mb.svg" width="150">
        </router-link>
        <router-link to="/" class="d-md-none">
          <img src="../assets/images/logo-mb.svg" width="120">
        </router-link>
        <h1 class="text-hide">Secret</h1>
      </div>
      <router-link class="d-md-none nav-link h5 font-weight-light mb-0" to="/carts">
        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        <small class="badge badge-pill">{{ carts.carts.length }}</small>
      </router-link>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
            <router-link class="nav-link h5 font-weight-light m-0 py-3" to="/about">關於</router-link>
            <router-link class="nav-link h5 font-weight-light m-0 py-3" to="/goods">
              全部商品</router-link>
            <router-link to="/celebrities" class="nav-link h5 font-weight-light m-0 py-3">
              名人特區
            </router-link>
            <router-link class="nav-link h5 font-weight-light m-0 py-3" to="/muggles">
            無聊的人</router-link>
            <router-link class="nav-link h5 font-weight-light m-0 py-3" to="/alien">
            特有品種</router-link>
        </div>
        <nav class="nav align-items-center ml-auto">
          <router-link class="nav-link h5 mb-0 pl-0" to="/login">
            <i class="d-none d-md-block far fa-user"></i>
            <span class="d-md-none font-weight-light">登入</span>
          </router-link>
        </nav>
      </div>
      <router-link class="d-none d-md-block nav-link h5 font-weight-light mb-0" to="/carts">
        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        <small class="badge badge-pill">{{ carts.carts.length }}</small>
      </router-link>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapGetters(['carts']),
  },
  methods: {
    ...mapActions(['getCarts']),
  },
  created() {
    this.getCarts();
  },
};

</script>
