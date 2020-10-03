<template>
  <!-- 轮播图广告 -->
  <div class='ad'>
        <img v-for="(src,index) in img" :key="index" :src="src" v-show="index==n"/>
        <div class="banner-circle">
            <ul>
                <li v-for="(v,i) in img" :key="i" :class="i==n ?'selected':''"></li>
            </ul>
        </div>
  </div>
</template>



<script>
export default {
  data () {
    return {
      n: 0,
    }
  },
  props: ['img'],
  methods: {
      fun:function(){
        //   setInterval(函数体,时间)
          setInterval(this.play,2000)
      },
      play:function(){
          this.n++;
          if(this.n == this.img.length){
              this.n = 0;
          }
      }  
  },
  mounted:function(){
      this.fun()
  }

}
</script>



