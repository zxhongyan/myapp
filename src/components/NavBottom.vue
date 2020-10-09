<template>
  <div class="NavBottom">
    <router-link to="/home">
        <i class="fa fa-home"></i>
        <label>首页</label>
    </router-link>
    <router-link to="/find">
        <i class="fa fa-search"></i>
        <label>发现</label>
    </router-link>
    <router-link to="/order">
        <i class="fa fa-shopping-cart"></i>
        <label>订单</label>
    </router-link>
    <router-link to="/my">
        <i class="fa fa-user-circle"></i>
        <label>我的</label>
    </router-link>


  </div>
</template>

<script>
export default {
  data () {
    return {
      name:'a'
    }
  }
}
</script>

<style scoped>
    .active{
        color: red;
    }
</style>