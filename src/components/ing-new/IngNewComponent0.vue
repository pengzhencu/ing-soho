<template>
  <div class="main">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-auto brand-size">
          <div class="brand"></div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h3 class="t-c">INGSOHO GLOBAL BRAND</h3>
          <h3 class="t-c c-1">INGSOHO / 资讯</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3">
          <img src="\static\assets\ing-about\bg\about.png" style="width:100%">
        </div>
        <div class="col-lg-9">
          <h3>震惊！陈欢大老板每天到休闲操场锻炼</h3>
          <h5>2019-9-25</h5>
          <p class="text">
            9月24日，国务院新闻办公室发布《关于中美经贸摩擦的事实与中方立场》白皮书，以大量翔实的数据和无可辩驳的案例，
            向国际社会澄清中美经贸关系的关键事实，系统阐明中方的政策立场。就在同一天，美国对华2000亿美元商品加征关税举措最
            终落地，中方相应反制措施随后同步实施。面对中美经贸摩擦的持续升级，
            无论中方的应对措施还是白皮书的发布，都充分展示出中方推动问题合理解决、维护多边贸易体制的坚定决心。
          </p>
          <a href="" style="text-decoration:blink;">more+</a>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-3">
          <img src="\static\assets\ing-about\bg\about.png" style="width:100%">
        </div>
        <div class="col-lg-9">
          <h3>震惊！陈欢大老板每天到休闲操场锻炼</h3>
          <h5>2019-9-25</h5>
          <p class="text">
            James到秦皇岛中瑞设计港调研时强调 以最大诚意欢迎设计机构与企业落户 推动工业设计与制造业深度融合
            9月7日，河北省长许勤来到秦皇岛市中瑞设计港调研。他强调，要深入贯彻习近平总书记关于高质量发展的重要指示精神，
            落实新发展理念，从供给侧发力、把需求端激活，推动工业设计与制造业深度融合，以设计提质量、增效益、拓市场
            ，不断满足新时代人民日益增长的美好生活需要，推动转型升级、高质量发展。 中瑞设计港是我省首个工业设计
          </p>
          <a href="" style="text-decoration:blink;">more+</a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'IngNews'
}
</script>

<style scoped>
  .main {
    padding: 3rem 0rem;
  }

  .t-c {
    text-align: center;
  }

  .main .brand-size {
    max-width: 11rem;
    padding: 0rem;
  }

  .main .brand {
    background: url("/static/img/ing-new/brand.png");
    width: 11rem;
    height: 11rem;
  }

  .main .brand:hover {
    animation: playbrand 3.08s steps(74);
  }

  @keyframes playbrand {
    0% {
      background-position: center left;
    }
    100% {
      background-position: center right;
    }
  }

  .main h3 {
    font-size: 1.6rem;
  }

  .main .c-1 {
    color: #FFC001;
  }

</style>
