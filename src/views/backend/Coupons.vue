<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="text-right mt-4">
      <button class="btn btn-primary" @click="openModal(true)">
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th width="120">到期日</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in coupons" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ item.due_date | date }}</td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <button class="btn btn-outline-primary btn-sm"
            @click="openModal(false, item)">編輯</button>
            <button class="btn btn-outline-danger btn-sm"
            @click="openDeleteModal(item)" data-whatever="@mdo">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex justify-content-center">
      <Pagination :pages="pagination" @changePage="getCoupons"></Pagination>
    </div>
    <div class="modal fade" id="couponModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增優惠券</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="title">標題</label>
              <input type="text" class="form-control" id="title"
                placeholder="請輸入標題" v-model="tempCoupon.title">
            </div>
            <div class="form-group">
              <label for="code">優惠碼</label>
              <input type="text" class="form-control" id="code"
                placeholder="code" v-model="tempCoupon.code">
            </div>
            <div class="form-group">
              <label for="due_date">到期日</label>
              <input type="date" class="form-control" id="due_date"
                placeholder="請輸入標題" v-model="due_date">
            </div>
            <div class="form-group">
              <label for="percent">折扣百分比</label>
              <input type="number" class="form-control" id="percent"
                placeholder="請輸入標題" v-model="tempCoupon.percent">
            </div>
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox"
                  id="is_enabled"
                  v-model="tempCoupon.is_enabled"
                  :true-value="1"
                  :false-value="0">
                <label class="form-check-label" for="is_enabled">
                  是否啟用
                </label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="updateCoupon">確認</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="delCouponModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除優惠券</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除 <strong class="text-danger">{{ tempCoupon.title }}</strong> 優惠券(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger"
            @click="deleteCoupon">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import { mapGetters } from 'vuex';
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'Coupons',
  components: {
    Pagination,
  },
  data() {
    return {
      isNew: false,
      due_date: new Date(),
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 0,
        due_date: 0,
        code: '',
      },
      coupons: [],
      pagination: {},
    };
  },
  watch: {
    due_date() {
      const vm = this;
      const timestamp = Math.floor(new Date(vm.due_date) / 1000);
      vm.tempCoupon.due_date = timestamp;
    },
  },
  methods: {
    openModal(isNew, item) {
      const vm = this;
      vm.isNew = isNew;
      if (isNew) {
        vm.tempCoupon = {};
        vm.tempCoupon.is_enabled = 0;
        vm.due_date = '';
      } else {
        vm.tempCoupon = { ...item };
        const dateAndTime = new Date(vm.tempCoupon.due_date * 1000).toISOString().split('T');
        [vm.due_date] = dateAndTime;
      }
      $('#couponModal').modal('show');
    },
    openDeleteModal(item) {
      this.tempCoupon = { ...item };
      $('#delCouponModal').modal('show');
    },
    getCoupons(page = 1) {
      const vm = this;
      vm.$store.dispatch('updateLoading', true);
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${page}`;
      vm.$http.get(api).then((response) => {
        if (response.data.success) {
          vm.$store.dispatch('updateLoading', false);
          vm.coupons = response.data.coupons;
          vm.pagination = response.data.pagination;
        }
      });
    },
    updateCoupon() {
      const vm = this;
      vm.$store.dispatch('updateLoading', true);
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
      let httpMethod = 'put';
      if (vm.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`;
        httpMethod = 'post';
      }
      vm.$http[httpMethod](api, { data: vm.tempCoupon }).then((response) => {
        if (response.data.success) {
          vm.$store.dispatch('updateLoading', false);
          $('#couponModal').modal('hide');
          vm.getCoupons();
        } else {
          vm.$store.dispatch('updateLoading', false);
          $('#couponModal').modal('hide');
          vm.getCoupons();
        }
      });
    },
    deleteCoupon() {
      const vm = this;
      vm.$store.dispatch('updateLoading', true);
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
      vm.$http.delete(api).then((response) => {
        if (response.data.success) {
          vm.$store.dispatch('updateLoading', false);
          $('#delCouponModal').modal('hide');
          vm.getCoupons();
        }
      });
    },
  },
  computed: {
    ...mapGetters(['isLoading']),
  },
  created() {
    this.getCoupons();
  },
};
</script>
