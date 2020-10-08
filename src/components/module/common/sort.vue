<template>
  <div class="sort">
    <div class="left_bar">      
        <div class="species display_center"  v-on:click="show(index)" v-for="(item,index) in items" :key="index">{{item.species}}</div>    
    </div>
    <div class="right_bar">
        <b>本周热门</b>
        <div class="content" v-for="(item1,index1) in items" :key="index1" v-show="n == index1">
          <div class="content_img" v-for="(item2,index2) in item1.content" :key="index2">
            <i :class="item2.font"> </i>
            <label>{{item2.name}}</label>
          </div>  
        </div>  
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
      items: [{species:'推荐',content:[{font:'fa fa-camera fa-2x',name:'照相机'},{font:'fa fa-globe fa-2x',name:'海淘'},{font:'fa fa-medkit fa-2x',name:'医药'},{font:'fa fa-file fa-2x',name:'照相机'},{font:'fa fa-globe fa-2x',name:'海淘'},{font:'fa fa-medkit fa-2x',name:'医药'},{font:'fa fa-camera fa-2x',name:'照相机'},{font:'fa fa-globe fa-2x',name:'海淘'},{font:'fa fa-medkit fa-2x',name:'医药'},{font:'fa fa-file fa-2x',name:'照相机'},{font:'fa fa-globe fa-2x',name:'海淘'},{font:'fa fa-medkit fa-2x',name:'医药'}] },
              {species:'鞋包',content:[{font:'fa fa-bath fa-2x',name:'照相机'},{font:'fa fa-globe fa-2x',name:'海淘'},{font:'fa fa-medkit fa-2x',name:'医药'},{font:'fa fa-file fa-2x',name:'照相机'},{font:'fa fa-globe fa-2x',name:'海淘'},{font:'fa fa-medkit fa-2x',name:'医药'},{font:'fa fa-camera fa-2x',name:'照相机'},{font:'fa fa-globe fa-2x',name:'海淘'},{font:'fa fa-medkit fa-2x',name:'医药'},{font:'fa fa-file fa-2x',name:'照相机'},{font:'fa fa-globe fa-2x',name:'海淘'},{font:'fa fa-medkit fa-2x',name:'医药'}] },
              {species:'食品',content:[{font:'fa fa-coffee fa-2x',name:'咖啡'},{font:'fa fa-coffee fa-2x',name:'咖啡'},{font:'fa fa-coffee fa-2x',name:'咖啡'},{font:'fa fa-coffee fa-2x',name:'咖啡'},{font:'fa fa-coffee fa-2x',name:'咖啡'},{font:'fa fa-coffee fa-2x',name:'咖啡'},{font:'fa fa-coffee fa-2x',name:'咖啡'},{font:'fa fa-coffee fa-2x',name:'咖啡'},{font:'fa fa-coffee fa-2x',name:'咖啡'},{font:'fa fa-coffee fa-2x',name:'咖啡'},{font:'fa fa-coffee fa-2x',name:'咖啡'},{font:'fa fa-coffee fa-2x',name:'咖啡'}] },
              {species:'数码',content:[{font:'fa fa-file',name:'照相机'},{font:'fa fa-camera',name:'照相机'},{font:'fa fa-camera',name:'照相机'}] },
              {species:'内衣',content:[{font:'fa fa-file',name:'照相机'},{font:'fa fa-camera',name:'照相机'},{font:'fa fa-camera',name:'照相机'}] },
              {species:'生鲜',content:[{font:'fa fa-file',name:'照相机'},{font:'fa fa-camera',name:'照相机'},{font:'fa fa-camera',name:'照相机'}] },
              {species:'电器',content:[{font:'fa fa-file',name:'照相机'},{font:'fa fa-camera',name:'照相机'},{font:'fa fa-camera',name:'照相机'}] },
              {species:'健康',content:[{font:'fa fa-file',name:'照相机'},{font:'fa fa-camera',name:'照相机'},{font:'fa fa-camera',name:'照相机'}] },
              {species:'家纺',content:[{font:'fa fa-file',name:'照相机'},{font:'fa fa-camera',name:'照相机'},{font:'fa fa-camera',name:'照相机'}] },
              {species:'洗护',content:[{font:'fa fa-bath fa-2x',name:'沐浴露'},{font:'fa fa-camera',name:'照相机'},{font:'fa fa-camera',name:'照相机'}] },
              {species:'百货',content:[{font:'fa fa-file',name:'照相机'},{font:'fa fa-camera',name:'照相机'},{font:'fa fa-camera',name:'照相机'}] },
              {species:'手机',content:[{font:'fa fa-file',name:'照相机'},{font:'fa fa-camera',name:'照相机'},{font:'fa fa-camera',name:'照相机'}] },
              {species:'运动',content:[{font:'fa fa-file',name:'照相机'},{font:'fa fa-camera',name:'照相机'},{font:'fa fa-camera',name:'照相机'}] },
              {species:'美妆',content:[{font:'fa fa-file',name:'照相机'},{font:'fa fa-camera',name:'照相机'},{font:'fa fa-camera',name:'照相机'}] }
      ],
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