<template>
  <div class="find">
    <div class="top display_center">{{name}}</div>
    <search />
    <sort />
  </div>
</template>

<script>
import search from './common/search'
import sort from './common/sort'
export default {
  data () {
    return {
      name: '发现'
    }
  },
  components: {
    search,
    sort
  },
}
</script>


<style scoped>
  
</style>
