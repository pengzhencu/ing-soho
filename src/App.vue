<template>
  <div id="app" class="main">
    <ing-header/>
    <div class="ing-content">
      <router-view/>
    </div>
    <ing-footer/>
  </div>
</template>

<script>
import IngHeader from '@/components/common/IngHeader'
import IngFooter from '@/components/common/IngFooter'

export default {
  components: {
    IngHeader,
    IngFooter
  }
}
</script>

<style>
  html {
    font-size: 10px;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
  }

  .ing-content {
    min-height: calc(100vh - 36.5rem);
  }

</style>
