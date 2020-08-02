
<template>
  <div class="home">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
  },
};
</script>
