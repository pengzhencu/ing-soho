<template>
  <div class="main">
    <div class="container">
      <div class="row">
        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <a href="#">
            <img src="/static/assets/ing-work/temp/ky.jpg" alt=""></a>
          <a href="#"> KellyOne</a>
          <span>包装设计</span>
        </div>
        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <router-link to="/work/detail">
            <img src="/static/assets/ing-work/temp/brf.jpg" alt="">
          </router-link>
          <router-link to="/work/detail">一带一路</router-link>
          <span>LOGO/VI</span>
        </div>
        <div class="col-6 col-sm-4 col-md-3 col-lg-2"><a href="#">
          <img src="/static/assets/ing-work/temp/epbj.jpg" alt=""></a>
          <a href="#">2019北京世园会</a>
          <span>LOGO/VI</span>
        </div>
        <div class="col-6 col-sm-4 col-md-3 col-lg-2"><a href="#">
          <img src="/static/assets/ing-work/temp/dh.jpg" alt=""></a>
          <a href="#">大理国际大酒店</a>
          <span>LOGO/VI</span>
        </div>
        <div class="col-6 col-sm-4 col-md-3 col-lg-2"><a href="#">
          <img src="/static/assets/ing-work/temp/xz.jpg" alt=""></a>
          <a href="#">旗袍小镇</a>
          <span>LOGO/VI</span>
        </div>
        <div class="col-6 col-sm-4 col-md-3 col-lg-2"><a href="#">
          <img src="/static/assets/ing-work/temp/zh.jpg" alt=""></a>
          <a href="#">中国国际航空</a>
          <span>VI/CI/SI/企业文化/品牌战略/年度服务</span>
        </div>
        <div class="col-6 col-sm-4 col-md-3 col-lg-2"><a href="#">
          <img src="/static/assets/ing-work/temp/360.jpg" alt=""></a>
          <a href="#">360安全卫士</a>
          <span>
            logo/vi
          </span>
        </div>
        <div class="col-6 col-sm-4 col-md-3 col-lg-2"><a href="#">
          <img src="/static/assets/ing-work/temp/snyg.jpg" alt=""></a>
          <a href="#">苏宁易购</a>
          <span>LOGO/VI</span>
        </div>
        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <img src="/static/assets/ing-work/temp/xdf.jpg" alt="">
          <a href="#">新东方LOGO设计</a>
          <span>LOGO/VI/SI/年度服务/品牌设计</span>
        </div>
        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <img src="/static/assets/ing-work/temp/bb.jpg" alt="">
          <a href="#">鑫蜀国传情火锅</a>
          <span>LOGO/VI</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IngWorkG'
}
</script>

<style scoped>
  .main {
    text-align: center;
    color: darkgray;
    padding-top: 1rem;
    padding-bottom: 5rem;
    font-size: 1.5rem;
  }

  .container {
    border: 0.1rem solid;
  }

  a {
    text-decoration: none;
    color: darkgray;
    padding-bottom: 1rem;
    display: block;
  }

  a:hover {
    color: #202020;
  }

  span {
    display: block;
    padding-bottom: 1rem;
  }

  img {
    padding: 1rem 1rem 0.5rem 1rem;
    width: 100%;
  }

  img:hover {
    transform: scale(1.1);
    transition-duration: 500ms;
  }

  .col-6 {
    border-bottom: 1px solid darkgray;
  }

  @media (min-width: 992px) {
    .main {
      padding-top: 2rem;
    }
  }
</style>
