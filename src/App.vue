<!--页面内容-->
<template>
  <div id="app">
    <!-- 路由的出口，匹配成功后，渲染对应的页面 -->
    <router-view/>


    <NavBottom />
  </div>
</template>

<!--javascript代码-->
<script>
import NavBottom from './components/NavBottom';

export default {
  name: 'App',
  components: {
    NavBottom
  },
}
</script>

<!--css代码-->
<style>
@import './assets/css/index.css';
/* 引入css字体图标 */
@import './assets/font/css/font-awesome.min.css';
</style>