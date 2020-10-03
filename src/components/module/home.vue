<template>
  <div class="home">
    <!-- 搜索 -->
    <search />
    <!-- 标签分类 -->
    <category />
    <!-- 轮播图广告 -->
    <ad :img='img' />
    <!-- 商品信息 -->
    <product />
    <!-- <div class="product">
        <ul>
            <li class="product-lists" v-for="(item,index) in items" :key="index">
                <router-link :to="'/detail/'+item.product_id">
                    <img :src="item.product_img_url" width="150" height="150">
                </router-link>
                <label>
                    <b class="discount">折扣价：{{item.product_uprice}}</b>
                    <span class="price-text">原价：{{item.product_price}}</span>
                </label>
            </li>
        </ul>
    </div> -->
  </div>
</template>

<script>
import ad from './common/ad'
import category from './common/category'
import product from './common/product'
import search from './common/search'
import axios from 'axios'
export default {
  data () {
    return {
        img: [require("@/assets/img/banner1.jpg"),
        require("@/assets/img/banner2.jpg"),
        require("@/assets/img/banner3.jpg"),
        require("@/assets/img/banner4.jpg"),
        require("@/assets/img/banner5.jpg"),],
        items:[],
    }
  },
  components: {
    search,
    ad,
    category,
    product
  },







//   与后台交互获取数据
  // methods:{
  //     getData:function(){
  //         //链接填写后端的URL   
  //         axios.get('../../../static/helloworld.json').then(res=>{
  //           //   检测数据后，将正确的数据写入items
  //             if(res.data.success){
  //               this.items = res.data.data;//将data写入items中
  //               console.log(this.items);
  //             }
  //         },(error)=>{
  //             console.log('访问数据失败')
  //             console.log(error)
  //         })
  //     }
  // },
  // //在渲染生命周期开始时获取数据
  // mounted:function(){
  //     this.getData();
  // }



}
</script>


<style scoped>

</style>

