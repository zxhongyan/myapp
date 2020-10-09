<template>
  <div class="my">
    <imformation />
    <order />
    <category />
  </div>
</template>

<script>
import imformation from "./common/my_imformation"
import order from './common/my_order'
import category from './common/category'
export default {
  data () {
    return {
      name: '我的'
    }
  },
  components: {
    imformation,
    category,
    order
  },
}

</script>


<style scoped>
  
</style>
