import Vue from 'vue';
import VueRouter from 'vue-router';
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';


Vue.use(VueRouter);
Vue.use(VueLoading);

const routes = [
  {
    path: '*',
    redirect: '/',
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/frontend/Home.vue'),
    children: [
      {
        path: 'goods',
        name: 'Goods',
        component: () => import('../views/frontend/Goods.vue'),
      },
      {
        path: 'detail/:productId',
        name: 'Detail',
        component: () => import('../views/frontend/Detail.vue'),
      },
      {
        path: 'carts',
        name: 'Carts',
        component: () => import('../views/frontend/Carts.vue'),
      },
      {
        path: 'checkout',
        name: 'Checkout',
        component: () => import('../views/frontend/Checkout.vue'),
      },
      {
        path: 'payment/:orderId',
        name: 'Payment',
        component: () => import('../views/frontend/Payment.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/frontend/About.vue'),
      },
      {
        path: 'celebrities',
        name: 'Celebrities',
        component: () => import('../views/frontend/Celebrities.vue'),
      },
      {
        path: 'muggles',
        name: 'Muggles',
        component: () => import('../views/frontend/Muggles.vue'),
      },
      {
        path: 'alien',
        name: 'Alien',
        component: () => import('../views/frontend/Alien.vue'),
      },
      {
        path: '',
        name: 'HomeContent',
        component: () => import('../views/frontend/HomeContent.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/backend/Login.vue'),
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('../views/backend/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/backend/Products.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('../views/backend/Orders.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('../views/backend/Coupons.vue'),
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/backend/Dashboard.vue'),
    children: [
      {
        path: 'customer_order',
        name: 'CustomerOrder',
        component: () => import('../views/backend/CustomerOrder.vue'),
      },
      {
        path: 'customer_checkout/:orderId',
        name: 'CustomerCheckout',
        component: () => import('../views/backend/CustomerCheckout.vue'),
      },
    ],
  },
];


const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
});

export default router;
