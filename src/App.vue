<template>
  <div id="app">
    <ele-header></ele-header>
    <div class="navs">
      <div class="item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="item">
        <router-link to="/sellers">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from "components/ele-header.vue";
  export default {
    name: 'App',
    components:{
        "ele-header":header
    }
  }
</script>

<!--
  常见的3种css预处理器
    less
    sass(scss)
    stylus
      npm install stylus stylus-loader -D
-->
<style scoped lang="stylus">
  #app
    .navs
      display flex
      background pink
      .item
        flex 1
        text-align center
</style>
