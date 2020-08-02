<template>
  <nav class="col-md-2 d-none d-md-block bg-light sidebar">
    <div class="sidebar-sticky">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/products">
            <i class="fas fa-box-open"></i>
            商品列表
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/orders">
            <i class="fas fa-cat"></i>
            訂單管理
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/coupons">
            <i class="fas fa-ticket-alt"></i>
            優惠券
          </router-link>
        </li>
      </ul>

      <h6 class="sidebar-heading d-flex justify-content-between
      align-items-center px-3 mt-4 mb-1 text-muted">
        <span>客戶端</span>
      </h6>
      <ul class="nav flex-column mb-2">
        <li class="nav-item">
          <router-link class="nav-link" to="/customer_order">
            <i class="fas fa-dog"></i>
            模擬購物
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Sidebar',
  data() {
    return {
    };
  },
};
</script>
