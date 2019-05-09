<template>
  <div class="main">
    <div class="container">
      <div class="row works-nav">
        <div class="col">
          <router-link to="/work/a">
            <img src="/static/assets/ing-work/icon/1a.png"/>
            <p>品牌策划</p>
          </router-link>
        </div>
        <div class="col">
          <router-link to="/work/b">
            <img src="/static/assets/ing-work/icon/2a.png"/>
            <p>品牌识别</p>
          </router-link>
        </div>
        <div class="col">
          <router-link to="/work/c">
            <img src="/static/assets/ing-work/icon/3a.png"/>
            <p>平面设计</p>
          </router-link>
        </div>
        <div class="col">
          <router-link to="/work/d">
            <img src="/static/assets/ing-work/icon/4a.png"/>
            <p>新媒体</p>
          </router-link>
        </div>
        <div class="col">
          <router-link to="/work/e">
            <img src="/static/assets/ing-work/icon/5a.png"/>
            <p>空间设计</p>
          </router-link>
        </div>
        <div class="col">
          <router-link to="/work/f">
            <img src="/static/assets/ing-work/icon/6a.png"/>
            <p>产品设计</p>
          </router-link>
        </div>
        <div class="col">
          <router-link to="/work/g">
            <img src="/static/assets/ing-work/icon/7a.png"/>
            <p>虚拟交互</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IngWorkNav'
}
</script>

<style scoped>
  .main {
    /*font-weight: 100;*/
  }
  .works-nav {
    padding-top: 1rem;
  }
  .works-nav div {
    width: 14.3%;
  }

  .works-nav .col {
    padding-right: 0rem;
    padding-left: 0rem;
  }

  .works-nav .col a {
    text-decoration: none;
    color: black;
  }

  .works-nav .col a:hover {
    text-decoration: none;
    opacity: 0.3;
    color: #8c939d;
  }

  .works-nav .col a img {
    width: 100%;
    padding: 5% 20%;
  }

  .works-nav .col a p {
    /*display: none;*/
    /*height: 2rem;*/
    margin-top: 0;
    text-align: center;
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    .works-nav .col {
      padding-right: 15px;
      padding-left: 15px;
    }

    .works-nav .col a img {
      padding: 5% 25%;
    }

    .works-nav .col a p {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 1200px) {
    .works-nav .col a img {
      padding: 5% 28%;
    }
  }
</style>
