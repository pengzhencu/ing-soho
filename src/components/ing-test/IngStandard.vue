<template>
  <div>
    <div class="container-fluid">
      <h1>颜色</h1>
      <div class="row">
        <br>
        <div class="box c-0 col">
          #F96
        </div>
        <div class="box c-1 col">
          #F60
        </div>
        <div class="box c-a col">
          #fff
        </div>
        <div class="box c-b col">
          #ccc
        </div>
        <div class="box c-c col">
          #999
        </div>
        <div class="box c-d col">
          #666
        </div>
        <div class="box c-e col">
          #333
        </div>
        <div class="box c-f col">
          #000
        </div>
      </div>
    </div>
    <br><br><br><br>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <h1>
            字体大小
          </h1>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h2>
            大字号共6种
          </h2>
          <p style="font-size: 4.8rem">
            * 4.8rem
          </p>
          <p style="font-size: 3.8rem">
            * 3.8rem
          </p>
          <p style="font-size: 3rem">
            * 3rem
          </p>
          <p style="font-size: 2.4rem">
            * 2.4rem
          </p>
          <p style="font-size: 2rem">
            * 2rem
          </p>
          <p style="font-size: 1.8rem">
            * 1.8rem
          </p>
          <h2>
            正常字号共3种
          </h2>
          <span style="font-size: 1.6rem">* 正文1 1.6rem 用途待定</span><br><br><br>
          <span style="font-size: 1.5rem">* 正文2 1.5rem !用于正文!</span><br><br><br>
          <span style="font-size: 1.4rem">* 正文3 1.4rem 用途待定</span><br><br><br>
          <h2>
            较小字号共2种
          </h2>
          <p style="font-size: 1.3rem">
            * 1.3rem
          </p>
          <p style="font-size: 1.2rem">
            * 1.2rem
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IngStandard'
}
</script>

<style scoped>
  .box {
    width: 6rem;
    height: 6rem;
  }

  .c-0 {
    background-color: #F96;
  }

  .c-1 {
    background-color: #F60;
  }

  .c-a {
    background-color: #fff;
  }

  .c-b {
    background-color: #ccc;
  }

  .c-c {
    background-color: #999;
  }

  .c-d {
    background-color: #666;
  }

  .c-e {
    background-color: #333;
  }

  .c-f {
    background-color: #000;
  }
</style>
