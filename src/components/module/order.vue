<template>
  <div class="order">
    <p class="display_center top">{{name}}</p>   


    <div class="content">
      <p class="display_center">购物车为空</p>
    </div>  

    <div class="advace">
      <p class=" display_center">系统为您推荐</p>
      <product />
    </div>     
  </div>
</template>

<script>
import product from './common/product'
export default {
  data () {
    return {
      name: '购物车'
    }
  },
  components:{
    product
  }
}
</script>

