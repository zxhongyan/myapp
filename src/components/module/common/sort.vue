<template>
  <div class="sort">
    <div class="left_bar">      
        <div class="species display_center"  v-on:click="show(index)" v-for="(item,index) in items" :key="index">{{item}}</div>
        <!-- <div class="display_center"  v-for="(item,index) in items" v-show="index == n" :key="index">{{item}}</div>         -->
    </div>           
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '分类',
      n: 0,
      isshow: true,
      items: ['推荐','鞋包','食品','数码','衣物','美妆','健康','图书','母婴','生鲜','车品','电器','洗护','手机','百货','家装']
    }
  },
  methods:{
      show:function(index){
          this.n = index;
          console.log(this.n);
      }
  }
}
</script>