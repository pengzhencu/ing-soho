<template>
  <div>
    <el-carousel :interval="5000" arrow="always" height="480px" :autoplay="true">
      <el-carousel-item v-for="item in 4" :key="item">
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="col">
                <p style="margin-bottom: 40px">
                  <span class="slogan">
                  开创展览新体验
                  </span>
                </p>
                <p class="detail">
                  <span>
                  专注展示创意行业20年，行业全面的跨界资质
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'IngCarousel',
  data () {
    return {}
  }
}
</script>

<style scoped>
  .el-carousel__item .content {
    color: white;
    text-align: center;
    height: 48rem;
    position: absolute;
    width: 100%;
    font-size: 1.5rem;
  }

  .el-carousel__item .col {
    padding: 19rem;
    height: 48rem;
  }

  .slogan {
    width: 30%;
    font-size: 5rem;
  }

  .slogan:before, .slogan:after {
    content: '';
    background: white;
    position: absolute;
    width: 20%;
    height: 0.1rem;
    line-height: 5rem;
    top: 49%;
  }

  .slogan:before {
    left: 15%;
  }

  .slogan:after {
    right: 15%;
  }

  .el-carousel__item:nth-child(2n) {
    background-image: url("/static/assets/ing-index/carousel/carousel-1.jpg");
    background-size: cover;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-image: url("/static/assets/ing-index/carousel/carousel-2.jpg");
    background-size: cover;
  }

  .el-carousel {
    display: none;
    margin-bottom: 2rem;
  }

  @media (min-width: 992px ) {
    .el-carousel {
      display: block;
    }

    .slogan:before {
      left: 10%;
    }

    .slogan:after {
      right: 10%;
    }

    .detail {
      width: 60%;
      margin: 0rem 20%;
      padding: 0.3rem;
      border: 0.1rem solid white;
    }
  }

  @media (min-width: 1200px ) {
    .slogan:before, .slogan:after {
      width: 22%;
    }
    .detail {
      width: 50%;
      margin: 0rem 25%;
    }
  }
</style>
