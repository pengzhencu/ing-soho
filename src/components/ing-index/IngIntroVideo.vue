<template>
  <div class="main">
    <div class="container">
      <div class="row">
        <div class="col">
          <img src="/static/img/ing-index/logo.jpg" alt="">
          <h2>ING DESIGNED EXPERIENCES</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <video width="100%" height="100%" controls>
            <source src="/static/assets/ing-index/intro.mp4" type="video/mp4">
            您的浏览器不支持Video标签。
          </video>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <p>
            ING has positioned itself as the voice of the brand, willing to develop unique and new techniques,
            and to implement brand-centric recommendations.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IngIntroVideo'
}
</script>

<style scoped>
  .main {
    background-color: #202020;
    padding: 4rem 0rem;
    text-align: center;
    color: white;
  }

  .main img {
    width: 12rem;
  }

  .main h2 {
    margin-top: 1rem;
    margin-bottom: 2.5rem;
    font-size: 2.5rem;
  }

  .main p {
    text-align: left;
    font-size: 1.5rem;
  }
</style>
