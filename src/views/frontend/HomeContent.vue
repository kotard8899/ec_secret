<template>
  <div>
    <div id="carouselExampleCaptions" class="carousel slide carousel-height"
    data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner h-100">
        <template v-for="(item, index) in bestSellerThree">
          <div class="carousel-item carousel-bg"
          :style="{backgroundImage: `url(${item.imageUrl})`}"
          :class="{'active': index === 0}" :key="item.id">
            <div class="carousel-custome-caption">
              <div class="caption-title">熱賣商品</div>
              <div class="caption-context">{{ item.title }}</div>
              <button type="button" class="btn btn-light rounded-0 carousel-btn"
              @click.prevent="toDetail(item.id)">
                馬上買  BUY NOW
              </button>
            </div>
          </div>
        </template>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleCaptions"
      role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleCaptions"
      role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
    </div>
    <div class="scrolling bg-primary">
        <div class="scroll-title">新品上市</div>
      <div class="scrolling-wrapper">
        <template v-for="item in takeSeven">
          <a class="scroll-card bg-cover" :key="item.id" @click.prevent="toDetail(item.id)"
          :style="{backgroundImage: `url(${item.imageUrl})`}"></a>
        </template>
      </div>
    </div>
    <section class="about-us text-center text-white bg-primary pb-4">
      <h4 class="font-weight-lighter">想知道喜歡的名星住哪嗎 ?</h4>
      <p class="mb-0 text-secondary font-weight-light">
        SECRET有你想要的東西
        <br>
        我們擁有所有人的<strong>個人資料</strong>
        <br>
        只要你出錢，我們就賣給你
      </p>
      <router-link class="btn btn-light rounded-0 mt-3 font-weight-light" to="/about">
        ABOUT US
      </router-link>
    </section>
    <section class="row no-gutters rectangle-section">
      <router-link to="/celebrities" href="#" class="col-md-4 rectangle-image-wrap" >
        <span class="rectangle-text">名人特區</span>
        <div class="border-line"></div>
        <span class="rectangle-en-text">CELEBRITIES</span>
        <button type="button" class="btn btn-light rounded-0 rec-btn">MORE</button>
        <div class="four-sides rectangle-over zindex--1"></div>
        <div class="rectangle-image bg-cover" style="background-image: url(https://images.unsplash.com/photo-1541535881962-3bb380b08458?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80);"></div>
      </router-link>
      <router-link to="/muggles" class="col-md-4 rectangle-image-wrap" >
        <span class="rectangle-text">無聊的人</span>
        <div class="border-line"></div>
        <span class="rectangle-en-text">MUGGLES</span>
        <button type="button" class="btn btn-light rounded-0 rec-btn">MORE</button>
        <div class="four-sides rectangle-over zindex--1"></div>
        <div class="rectangle-image bg-cover" style="background-image: url(https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80);"></div>
      </router-link>
      <router-link to="/alien" class="col-md-4 rectangle-image-wrap" >
        <span class="rectangle-text">特有品種</span>
        <div class="border-line"></div>
        <span class="rectangle-en-text">ALIENS</span>
        <button type="button" class="btn btn-light rounded-0 rec-btn">MORE</button>
        <div class="four-sides rectangle-over zindex--1"></div>
        <div class="rectangle-image bg-cover" style="background-image: url(https://images.unsplash.com/photo-1542702937-506268e68902?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80);"></div>
      </router-link>
    </section>
    <section class="bg-primary text-white interview">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="h2 in-sec-title">INTERVIEWS</div>
            <div class="row">
              <a href="#" class="col-md-6 in-sm no-gutters-md">
                <div class="img-sm bg-cover" style="background-image: url(https://images.unsplash.com/photo-1585261941984-0145bb423997?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80);">
                  <div class="in-arrow d-none"><i class="fas fa-chevron-right fa-3x"></i></div>
                </div>
                <div class="in-title my-3">Information Security</div>
                <div class="in-context">七種方式：有效的解決個資外洩的問題</div>
              </a>
              <a href="#" class="col-md-6 in-sm no-gutters-md">
                <div class="img-sm bg-cover" style="background-image: url(https://images.unsplash.com/photo-1528545027322-5e3b3f441730?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2595&q=80);">
                  <div class="in-arrow d-none"><i class="fas fa-chevron-right fa-3x"></i></div>
                </div>
                <div class="in-title my-3">Information Security</div>
                <div class="in-context">SECRET 完成24億元D輪融資，總募資金額逼近50億元！</div>
              </a>
              <a href="#" class="col-md-6 in-sm no-gutters-md">
                <div class="img-sm bg-cover" style="background-image: url(https://images.unsplash.com/photo-1575157951566-b6f6e1f51ca6?ixlib=rb-1.2.1&auto=format&fit=crop&w=820&q=80);">
                  <div class="in-arrow d-none"><i class="fas fa-chevron-right fa-3x"></i></div>
                </div>
                <div class="in-title my-3">Information Security</div>
                <div class="in-context">SECRET 被認證：台灣最有潛力獨角獸？</div>
              </a>
              <a href="#" class="col-md-6 in-sm no-gutters-md">
                <div class="img-sm bg-cover" style="background-image: url(https://images.unsplash.com/photo-1509993630589-dbfcf726c21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80);">
                  <div class="in-arrow d-none"><i class="fas fa-chevron-right fa-3x"></i></div>
                </div>
                <div class="in-title my-3">Information Security</div>
                <div class="in-context">瑞幸：你喝的不是咖啡，是資本的眼淚</div>
              </a>
            </div>
          </div>
          <div class="col-md-6 no-gutters-md">
            <div class="sticky-top t-80">
              <a href="#" class="in-bg">
                <div class="img-bg bg-cover" style="background-image: url(https://images.unsplash.com/photo-1517936788989-5689e31c3c09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80);">
                  <div class="in-bg-title">
                    八種方法：
                    <br>
                    讓你瞬間掌握話語霸權
                  </div>
                  <div class="in-bg-cat">專訪特輯</div>
                  <div class="in-arrow d-none"><i class="fas fa-chevron-right fa-3x"></i></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="best-seller bg-primary">
      <div class="container">
        <div class="bs-title font-weight-light text-white text-center py-4">熱門暢銷商品</div>
        <div class="row">
          <div class="col-md-3 px-2 pb-4" v-for="item in bestSeller" :key="item.id">
            <a href="#" class="image-wrap" @click.prevent="toDetail(item.id)">
              <div class="rectangle-image bg-cover"
              :style="{backgroundImage: `url(${item.imageUrl})`}"></div>
            </a>
            <a href="#" class="bs-name" @click.prevent="toDetail(item.id)">
              {{ item.title }}
            </a>
            <div class="pt-1">
              <span class="bs-price">特價 {{ item.price }}</span>
              <del class="bs-origin-price">原價 {{ item.origin_price }}</del>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'HomeContent',
  data() {
    return {

    };
  },
  methods: {
    ...mapActions(['getProducts']),
    toDetail(id) {
      this.$router.push(`/detail/${id}`);
    },
  },
  computed: {
    ...mapGetters(['isLoading', 'products', 'product', 'loadingId']),
    bestSeller() {
      const vm = this;
      return Object.values(vm.products).filter((item) => {
        const data = item.title.includes('熱銷');
        return data;
      });
    },
    bestSellerThree() {
      return this.bestSeller.slice(0, 3);
    },
    takeSeven() {
      return Object.values(this.products).slice(0, 7);
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
