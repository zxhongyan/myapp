<template>
    <div class="product">
        <ul>
            <li class="product-lists" v-for="(item,index) in items" :key="index">
                
                    <router-link :to="'/detail/'+item.product_id">
                        <img :src="item.product_img_url" >
                    </router-link>
                
                <label>
                    <div class="discription">
                        <p class="top lines_limit_length">{{item.product_detail}}</p>
                        <div class="position_bottom">
                        <p class="store_name font_size">店名：{{item.store_name}}</p>
                        <p class="font_size">好评：{{item.store_review}}</p>
                        <p class="discount">折扣价：{{item.product_price}}</p>
                        <a class="uprice">原价：{{item.product_uprice}}</a>
                        </div>
                    </div>

                </label>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
          items:[],
    }      
  },
  //   与后台交互获取数据
  methods:{
      getData:function(){
          //链接填写后端的URL   
          axios.get('../../../../static/product.json').then(res=>{
            //   检测数据后，将正确的数据写入items
              if(res.data.success){
                this.items = res.data.data;//将data写入items中
                console.log(this.items);
              }
          },(error)=>{
              console.log('访问数据失败')
              console.log(error)
          })
      }
  },
  //在渲染生命周期开始时获取数据
  mounted:function(){
      this.getData();
  }
}

</script>