<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">購買時間</th>
          <th>Email</th>
          <th>購買款項</th>
          <th width="120">應付金額</th>
          <th width="120" class="text-center">是否付款</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in orders" :key="item.id">
          <td>{{ timeStamp2Date(item.create_at) }}</td>
          <td>{{ item.user.email }}</td>
          <td>
            <div v-for="product in item.products" :key="product.id">
              {{ product.product.title }}
            </div>
          </td>
          <td class="text-right">
            {{ item.total | currency }}
          </td>
          <td class="text-center">
            <span v-if="item.is_paid" class="text-success">已付款</span>
            <span v-else>未付款</span>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex justify-content-center">
      <Pagination :pages="pagination" @changePage="getOrders"></Pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'Coupons',
  components: {
    Pagination,
  },
  data() {
    return {
      orders: [],
      pagination: {},
    };
  },
  methods: {
    getOrders(page = 1) {
      const vm = this;
      vm.$store.dispatch('updateLoading', true);
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`;
      vm.$http.get(api).then((response) => {
        if (response.data.success) {
          vm.$store.dispatch('updateLoading', false);
          vm.orders = response.data.orders;
          vm.pagination = response.data.pagination;
        }
      });
    },
    timeStamp2Date(time) {
      const datetime = new Date();
      datetime.setTime(time * 1000);
      const year = datetime.getFullYear();
      const month = datetime.getMonth() + 1;
      const date = datetime.getDate();
      return `${year}-${month}-${date}`;
    },
  },
  computed: {
    ...mapGetters(['isLoading']),
  },
  created() {
    this.getOrders();
  },
};
</script>
