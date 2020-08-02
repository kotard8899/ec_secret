<template>
  <div class="about bg-dark">
    <div class="container">
      <div class="about-title text-center pb-5">ABOUT US</div>
      <div class="jumbotron jumbotron-fluid bg-cover-jum d-flex align-items-center" style="background-image: url(https://images.unsplash.com/photo-1507499739999-097706ad8914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=670&q=80);">
        <div class="container text-center">
          <h2 class="display-4">
            <img src="@/assets/images/logo-mb.svg">
          </h2>
        </div>
      </div>
      <p class="about-text m-0">
        SECRET 為了保護大家的個資安全而生
        <br>
        也為了大家的利益而戰
        <br>
        社群媒體不只綁架了我們的生活，也奪走了我們的個資
        <br>
        並且從中圖利
        <br>
        而那些再行銷廣告商甚至比我們的朋友還更了解我們
        <br>
        因此，SECRET 提供了解決方案！
        <br>
        我們不讓<span>別人擅自販賣我們的個資</span>，
        <br>
        我們讓<span>您自己賣自己的個資！</span>
        <br>
        您只要填寫好資料，剩下的就交給SECRET 幫您處理
        <br>
        SECRET 讓您掌握人生主導權的同時，<span>也不會讓您的荷包寂寞！</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {};
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
