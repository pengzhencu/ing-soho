<template>
  <div class="main">
    <div class="container">
      <div class="row">
        <div class="col">
          <img src="/static/assets/ing-work/temp/detail/logo.jpg" alt="">
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 classify">
          <div class="row">
            <div class="col-4">
              <p>
                <span>客户名称 :</span>
              </p>
            </div>
            <div class="col-8">
              <p>新东方logo设计</p>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <p><span>所属行业 :</span></p>
            </div>
            <div class="col-8">
              <p></p>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <p><span>服务内容 :</span></p></div>
            <div class="col-8">
              <p>
                品牌标志策略与设计 <br>
                品牌视觉形象设计系统<br>
                品牌诊断与评估<br>
                品牌定义<br>
                品牌架构<br>
                导示系统设计<br>
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <p><span>相关案例 :</span></p></div>
            <div class="col-8">
              <p>
                中国人寿 <br>
                新东方LOGO设计欣赏<br>
                蓝景丽家<br>
                山东亿兆能源<br>
                奥纳院线logo设计欣赏<br>
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-md-6 content">
          <h3>LOGO/VI/SI年度服务/品牌设计</h3>
          <span>关于:</span>
          <p>
            新东方教育科技集团由1993年成立的北京新东方学校发展壮大而来，目前集团以培训为核心，拥有众多培训体系，同时在教育领域、出国咨询、文化产业等方面取得了骄人的成绩。作为中国最大的著名私立教育机构，新东方教育科技集团于2006年9月7日在美国纽约证券交易所成功上市。
            截至2010年12月，累计培训学员1200余万人次。
          </p>
          <span>设计方案:</span>
          <p>
            新东方标识设计保留了品牌最核心的元素并加以全新设计提升，相较于之前的品牌英文名称，“XDF.CN”作为品牌标志中的一部分，具有很高的功能性与实用性。新标识整体结构向右方略微倾斜，其设色对原有绿色色调进行了调整，增添了象征曙光的橙黄色，与新东方文化相呼应。
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <img src="/static/assets/ing-work/temp/detail/1.jpg" alt="">
          <img src="/static/assets/ing-work/temp/detail/2.jpg" alt="">
          <img src="/static/assets/ing-work/temp/detail/3.jpg" alt="">
          <img src="/static/assets/ing-work/temp/detail/4.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IngWorkDetail'
}
</script>

<style scoped>
  .main {
    /*text-align: center;*/
    padding-bottom: 3rem;
    font-size: 1.5rem;
  }

  .classify {
    margin-bottom: 2rem;
    border-bottom: 1px solid #8c939d;
    padding-top: 3.5rem;
    padding-bottom: 2rem;
  }

  .content {
    margin-bottom: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .classify span {
    color: #202020;
  }

  .classify p {
    margin: 0.5rem 0rem 0rem 0rem;
    /*line-height: 2rem;*/
  }

  span {
    /*display: block;*/
    font-weight: bold;
  }

  img {
    width: 100%;
  }

  p {
    color: #898989;
    line-height: 2rem;
  }

  @media (min-width: 768px) {
    .classify {
      border-bottom: none;
      border-right: 1px solid #8c939d;
      margin-bottom: 4rem;
    }

    .content {
      margin-bottom: 4rem;
    }
  }
</style>
