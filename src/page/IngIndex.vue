<template>
  <div>
    <ing-work-nav/>
    <ing-carousel/>
    <ing-banner/>
    <ing-intro-video/>
    <ing-title/>
    <ing-brand-publish/>
    <ing-pub-con/>
    <ing-bus-coop/>
    <ing-bus-con/>
    <ing-news-information/>
    <ing-news-con/>
    <ing-news-con/>
    <ing-contact-form/>
  </div>
</template>
<script>
import IngWorkNav from '@/components/ing-work/IngWorkNav'
import IngCarousel from '@/components/ing-index/IngCarousel'
import IngBanner from '@/components/ing-index/IngBanner'
import IngIntroVideo from '@/components/ing-index/IngIntroVideo'
import IngTitle from '@/components/ing-index/IngTitle'
import IngBrandPublish from '../components/ing-index/IngBrandPublish'
import IngPubCon from '../components/ing-index/IngPubCon'
import IngBusCoop from '../components/ing-index/IngBusCoop'
import IngBusCon from '../components/ing-index/IngBusCon'
import IngNewsInformation from '../components/ing-index/IngNewsInformation'
import IngNewsCon from '../components/ing-index/IngNewsCon'
import IngContactForm from '@/components/ing-contact/IngContactForm'

export default {
  components: {
    IngWorkNav,
    IngCarousel,
    IngBanner,
    IngIntroVideo,
    IngTitle,
    IngBrandPublish,
    IngPubCon,
    IngBusCoop,
    IngBusCon,
    IngNewsInformation,
    IngNewsCon,
    IngContactForm
  }
}
</script>
<style scoped>

</style>
