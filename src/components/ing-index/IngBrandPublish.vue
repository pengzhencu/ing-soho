<template>
  <div class="container">
    <div class="row">
      <div class="col">
      <div class="outline">
        <h2>
          News information
          <br/>
          品牌发布
        </h2>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IngBrandPublish'
}
</script>

<style scoped>
  h2 {
    margin: 0.5rem 0rem 0rem 0rem;
    color: #FFC001;
    padding-left: 1rem;
    font-size: 2.4rem;
  }

  h2:first-line {
    color: #8F8A91;
  }

  .outline {
    padding-bottom: 0.5rem;
  }

  .outline::before {
    content: '';
    width: 0.6rem;
    height: 5rem;
    background: #FFC001;
    color: #FFC001;
    position: absolute;
  }
.row{
  padding-bottom: 3rem;
}
</style>
