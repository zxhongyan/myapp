<template>
  <div class="my_imformation">
    <div class="img">
      <img :src="img_url">
    </div>
    <div class="user">
      <b>{{user_id}}</b>
      <a>我的拼小圈></a>
    </div>
    

             
  </div>
</template>

<script>
export default {
  data () {
    return {
      user_id: 'hello world',
      img_url: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2852338631,75294945&fm=111&gp=0.jpg',

    }
  }
}
</script>