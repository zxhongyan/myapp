<template>
  <div class="my_order">
    <div class="top">
      <p>我的订单</p>
      <a>查看全部></a>
    </div>
    <div class="bottom">
      <a class="" v-for="(item,index) in items" :key="index">
        <i :class='item.font'></i>
        <label>{{item.mean}}</label>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '我的订单',
      items: [{font:'fa fa-credit-card fa-2x' ,mean:'待付款'},
              {font:'fa fa-share fa-2x' ,mean:'待分享'},
              {font:'fa fa-clock-o fa-2x' ,mean:'待发货'},
              {font:'fa fa-truck fa-2x' ,mean:'待收货'},
              {font:'fa fa-commenting-o fa-2x' ,mean:'评价'}
      ]
    }
  }
}

</script>