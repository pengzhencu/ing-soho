<template>
  <div class="main">
    <div class="container">
      <div class="fix-bottom">
        <div class="row">
          <div class="col">
            <img src="/static/assets/common/ing-footer/logo.png" alt="" class="ing-logo">
          </div>
      </div>
        <div class="row">
          <div class="col-lg-4">
            <p>
              {{ $t('common.ingFooter.companyInfo.jiangXi.companyName')}}<br>
              TEL: {{ $t('common.ingFooter.companyInfo.jiangXi.tel.i')}}<br>
              TEL: {{ $t('common.ingFooter.companyInfo.jiangXi.tel.ii')}}<br>
              Email: {{ $t('common.ingFooter.companyInfo.jiangXi.email')}}<br>
              {{ $t('common.ingFooter.companyInfo.jiangXi.address')}}<br>
              <br>
            </p>
          </div>
          <div class="col-lg-4">
            <p>
              {{ $t('common.ingFooter.companyInfo.shangHai.companyName')}}<br>
              TEL: {{ $t('common.ingFooter.companyInfo.jiangXi.tel.i')}}<br>
              TEL: {{ $t('common.ingFooter.companyInfo.jiangXi.tel.ii')}}<br>
              Email: {{ $t('common.ingFooter.companyInfo.shangHai.email')}}<br>
              {{ $t('common.ingFooter.companyInfo.shangHai.address')}}<br>
            </p>
          </div>
          <div class="col-lg-4">
            <p>
              <router-link to="/">{{ $t('common.ingHeader.index') }}</router-link>
              <br>
              <router-link to="/about">{{ $t('common.ingHeader.about') }}</router-link>
              <br>
              <router-link to="/new">{{ $t('common.ingHeader.new') }}</router-link>
              <br>
              <router-link to="#">{{ $t('common.ingHeader.service') }}</router-link>
              <br>
              <router-link to="/work/a">{{ $t('common.ingHeader.work') }}</router-link>
              <br>
              <router-link to="#">{{ $t('common.ingHeader.team') }}</router-link>
              <br>
              <router-link to="/contact">{{ $t('common.ingHeader.contact') }}</router-link>
            </p>
          </div>
      </div>
        <div class="row">
          <div class="col">
            <span class="social-media">
              <a href="https://weibo.com" target="_blank">
                <img src="/static/assets/common/ing-footer/weibo.png" alt="">
              </a>
              <a href="https://weibo.com" target="_blank">
                <img src="/static/assets/common/ing-footer/qq.png" alt="">
              </a>
              <a href="https://weibo.com" target="_blank">
                <img src="/static/assets/common/ing-footer/wechat-fill.png" alt="">
              </a>
              <a href="https://weibo.com" target="_blank">
                <img src="/static/assets/common/ing-footer/facebook.png" alt="">
              </a>
              <a href="https://weibo.com" target="_blank">
                <img src="/static/assets/common/ing-footer/twitter.png" alt="">
              </a>
            </span>
            <span class="cr">
            Copyright © 2018 Ingsoho. All Rights Reserved
          </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
  .main {
    background-color: #000;
    color: #fff;
  }

  .fix-bottom {
  }

  .cr {
    display: block;
    float: right;
    padding: 4rem 1rem;
    font-size: 1.2rem;
  }

  .social-media {
    display: block;
    float: left;
    padding: 4rem 0rem;
    font-size: 1.4rem;
  }

  .social-media a {
    padding: 0rem 0.3rem;
  }

  .ing-logo {
    height: 3.5rem;
    margin: 2.5rem 0rem 0.5rem 0rem;
  }

  img {
    height: 2rem;
  }

  a {
    color: #fff;
  }

  a:hover {
    color: #f60;
  }

  p {
    line-height: 1.8rem;
    font-size: 1.2rem;
  }

</style>
