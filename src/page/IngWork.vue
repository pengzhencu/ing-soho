<template>
  <div>
    <ing-work-nav/>
    <router-view></router-view>
  </div>
</template>
<script>
import IngWorkNav from '@/components/ing-work/IngWorkNav'

export default {
  components: {
    IngWorkNav
  }
}
</script>
<style scoped>

</style>
