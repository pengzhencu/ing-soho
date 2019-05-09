<template>
  <div class="main">
    <div class="container">
      <div class="row">
        <div class="col">
          <img src="../../../static/assets/ing-team/team.jpg">
        </div>
      </div>
      <div class="row">
        <div class="col-4 cv">
          <div class="row pho">
            <img src="../../../static/assets/ing-team/chenhuan.jpg"/>
          </div>
          <div class="abs" id="1" @mouseover="setShow($event)" @mouseout="setHide($event)">
            <p class="name row">陈欢</p>
            <p class="job row">职务信息</p>
          </div>
        </div >
        <div class="col-4 cv">
          <div class="row pho">
            <img src="../../../static/assets/ing-team/tanzheng.jpg"/>
          </div>
          <div class="abs" id="2" @mouseover="setShow($event)" @mouseout="setHide($event)">
            <p class="name row">谭政</p>
            <p class="job row">职务信息</p>
          </div>
        </div>
        <div class="col-4 cv">
          <div class="row pho">
            <img src="../../../static/assets/ing-team/xuman.jpg"/>
          </div>
          <div class="abs" id="3" @mouseover="setShow($event)" @mouseout="setHide($event)">
            <p class="name row">徐曼</p>
            <p class="job row">职务信息</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-4 hide" id="4">
          <p>详细介绍1</p>
        </div>
        <div class="col-4 offset-4 hide" id="5">
          <p>详细介绍2</p>
        </div>
        <div class="col-4 offset-8 hide" id="6">
          <p>详细介绍3</p>
        </div>
      </div>
      <div class="row">
        <div class="col-4 cv">
          <div class="row pho">
            <img src="../../../static/assets/ing-team/chenhuan.jpg"/>
          </div>
          <div class="abs" id="7" @mouseover="setShow($event)" @mouseout="setHide($event)">
            <p class="name row">陈欢</p>
            <p class="job row">职务信息</p>
          </div>
        </div >
        <div class="col-4 cv">
          <div class="row pho">
            <img src="../../../static/assets/ing-team/tanzheng.jpg"/>
          </div>
          <div class="abs" id="8" @mouseover="setShow($event)" @mouseout="setHide($event)">
            <p class="name row">谭政</p>
            <p class="job row">职务信息</p>
          </div>
        </div>
        <div class="col-4 cv">
          <div class="row pho">
            <img src="../../../static/assets/ing-team/xuman.jpg"/>
          </div>
          <div class="abs" id="9" @mouseover="setShow($event)" @mouseout="setHide($event)">
            <p class="name row">徐曼</p>
            <p class="job row">职务信息</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-4 hide" id="10">
          <p>详细介绍1</p>
        </div>
        <div class="col-4 offset-4 hide" id="11">
          <p>详细介绍2</p>
        </div>
        <div class="col-4 offset-8 hide" id="12">
          <p>详细介绍3</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'component0',
  methods: {
    setShow (event) {
      let self = event.target
      self.className = 'abss'
      let id = Number(self.id)
      let newId = id + 3
      let cDom = document.getElementById(newId)
      if ((newId % 3) === 1) {
        cDom.className = 'show col-4'
      } else if ((newId % 3) === 2) {
        cDom.className = 'show col-4 offset-4'
      } else {
        cDom.className = 'show col-4 offset-8'
      }
    },
    setHide (event) {
      let self = event.target
      self.className = 'abs'
      let id = self.id
      id = Number(id)
      let newId = id + 3
      let cDom = document.getElementById(newId)
      cDom.className = 'hide'
    }
  }
}

</script>

<style scoped>
  img {
    width: 100%;
    height: 100%;
  }
  .name {
    font-size: 3.3rem;
    color: #363636;
    font-family:  "微软雅黑",Tahoma, Helvetica, Arial, sans-serif;
    margin: 0;
    pointer-events: none;
  }
  .job{
    font-size: 1.9rem;
    color: #999999;
    font-family:  "微软雅黑",Tahoma, Helvetica, Arial, sans-serif;
    margin-left: 0;
    margin-top: 1.1rem;
    margin-bottom: 0.8rem;
    pointer-events: none;
  }
  .abs{
    background-color: #F8F8F8;
    padding: 2.1rem;
    margin: 0;
  }
  .abss{
    background-color: #A2E6BD;
    padding: 2.1rem;
    margin: 0;
  }
  .pho{
    margin: 0;
  }
  .cv{
    padding: 0;
    margin: 0;
  }
  .hide{
    display: none;
  }
  .show{
    font-size: 3rem;
    display: inline;
  }
</style>
