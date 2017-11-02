<template>
  <div id="app">
    <my-nav></my-nav>
      <router-view/>
  </div>
</template>

<script>
  // 引入导航条
  import myNav from '@/components/my-nav/my-nav'
  export default {
    components: {
      myNav
    }
  }
</script>

<style>
  /* 引入CSS文件*/
  @import './assets/css/reset.css';
</style>
