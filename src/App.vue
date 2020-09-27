<template>
  <div id="app">
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<style lang="scss">
@import "./assets/scss/all";
</style>
<script>
export default {
  name: 'App',
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isRouterAlive: true,
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    },
  },
};
</script>
