<template>
  <div class="search">
        <i class="fa fa-search"></i>
        <a v-for="(item,index) in items" :key="index" v-show="index==n">{{item.search_tag}}</a>
        <i class="fa fa-camera camera" ></i>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {    
        items : [],
        n : 0,
    }
  },
  //   与后台交互获取数据
  methods:{
      getData:function(){
          //链接填写后端的URL   
          axios.get('../../../../static/search.json').then(res=>{
            //   检测数据后，将正确的数据写入items
              if(res.data.success){
                this.items = res.data.data;//将data写入items中
                console.log(this.items);
              }
          },(error)=>{
              console.log('访问数据失败');
              console.log(error);
          })
      },
      play:function(){
          this.n++;
          if(this.n == this.items.length){
              this.n = 0;
          }
      }
      
      
  },
  //在渲染生命周期开始时获取数据
  mounted:function(){
      this.getData();
      setInterval(this.play, 10000);
  }

}


</script>
