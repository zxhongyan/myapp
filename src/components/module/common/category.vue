<template>
  <!-- 类型 -->
  <div class='category'>
      <div class="category-index" v-for='(item,index) in lists' :key='index'>
          <i class="iconfont" :class="item.icon"></i>
          <label>{{item.title}}</label>
      </div>
  </div>
</template>



<script>
export default {
  data () {
    return {
      lists: [{title:'美食',icon:'fa fa-cutlery'},
      {title:'日用',icon:'fa fa-umbrella'},
      {title:'箱包',icon:'fa fa-suitcase'},
      {title:'数码',icon:'fa fa-desktop'},
      {title:'生鲜',icon:'fa fa-envira'},
      {title:'出行',icon:'fa fa-car'},
      {title:'医药',icon:'fa fa-medkit'},
      {title:'签到',icon:'fa fa-calendar-check-o'},
      {title:'折扣',icon:'fa fa-cny'},
      {title:'更多',icon:'fa fa-list'},]
    }
  },
  
}
</script>

