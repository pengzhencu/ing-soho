<template>
  <div class="main">
    <div class="row shadow-bottom fix-top">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="d-flex justify-content-between">
              <router-link to="/" class="brand"><img src="../../../static/assets/common/ing-header/logo.png" alt=""></router-link>
              <div class="dropdown">
                <span class="main-btn"><i class="el-icon-more"></i></span>
                <ul class="dropdown-content">
                  <li>
                    <router-link to="/">{{ $t('common.ingHeader.index') }}</router-link>
                  </li>
                  <li>
                    <router-link to="/about">{{ $t('common.ingHeader.about') }}</router-link>
                  </li>
                  <li>
                    <router-link to="/new">{{ $t('common.ingHeader.new') }}</router-link>
                  </li>
                  <li>
                    <router-link to="/service">{{ $t('common.ingHeader.service') }}</router-link>
                  </li>
                  <li>
                    <router-link to="/work/a">{{ $t('common.ingHeader.work') }}</router-link>
                  </li>
                  <li>
                    <router-link to="/team">{{ $t('common.ingHeader.team') }}</router-link>
                  </li>
                  <li>
                    <router-link to="/contact">{{ $t('common.ingHeader.contact') }}</router-link>
                  </li>
                  <li>
                    <div class="sub-dropdown">
                      <span class="sub-btn">Language</span>
                      <ul class="sub-dropdown-content">
                        <li>
                          <button>
                            <span href="#" @click="ChangeLanguage('en')">English</span>
                          </button>
                        </li>
                        <li>
                          <button>
                            <span href="#" @click="ChangeLanguage('zhHans')">简体中文</span>
                          </button>
                        </li>
                        <li>
                          <button>
                            <span href="#" @click="ChangeLanguage('zhHant')">繁体中文</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IngHeader2.vue',
  methods: {
    ChangeLanguage (lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>

<style scoped>
  .main {
    height: 4.5rem;
    background-color: #fff;
  }

  .main img {
    width: 100%;
  }

  .brand {
    height: 4.5rem;
    width: 18rem;
  }

  .shadow-bottom {
    box-shadow: 0rem 0rem 1rem 0.5rem #666;
  }

  .fix-top {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
    background-color: #fff;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  a:hover {
    color: #f60;
  }

  .dropdown {
    position: relative;
    display: inline-block;
    text-align: center;
  }

  .main-btn {
    display: block;
    font-size: 3rem;
    line-height: 4.5rem;
    width: 6rem;
    height: 4.5rem;
  }

  .dropdown a {
    display: block;
    -webkit-margin-before: 1rem;
    -webkit-margin-after: 1rem;
    -webkit-margin-start: 0rem;
    -webkit-margin-end: 0rem;
  }

  .dropdown-content {
    font-size: 1.5rem;
    display: none;
    position: absolute;
    margin-top: 4rem;
    top: 0rem;
    right: 0rem;
    background-color: #fff;
    min-width: 12rem;
    box-shadow: 0rem 0.5rem 1rem 0rem rgba(0, 0, 0, 0.2);
    padding: 0.75rem 0rem;
    z-index: 1;
  }

  .dropdown-content li {
    padding: 0rem;
    margin: 0rem;
    text-align: center;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .sub-dropdown {
    position: relative;
    display: inline-block;
  }

  .sub-btn {
    display: none;
  }

  .sub-dropdown-content button {
    width: 100%;
    border: none;
    background: none;
  }

  .sub-dropdown-content span {
    font-size: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    display: block;
    -webkit-margin-before: 0.5rem;
    -webkit-margin-after: 0.5rem;
    -webkit-margin-start: 0rem;
    -webkit-margin-end: 0rem;
    padding: 0;
  }

  .sub-dropdown-content button:hover {
    color: #f60;
  }

  .sub-dropdown span:before {
    border: 0.1rem solid #333;
  }

  .sub-dropdown a {
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
  }

  .sub-dropdown-content {
    font-size: 1.5rem;
    top: 5rem;
    background-color: #fff;
    min-width: 12rem;
    box-shadow: 0rem 0.5rem 1rem 0rem rgba(0, 0, 0, 0.2);
    padding: 0.75rem 0rem;
    z-index: 1;
  }

  @media (min-width: 992px) {
    .main-btn {
      display: none;
    }

    .dropdown a {
      display: block;
      line-height: 4.5rem;
      margin: 0rem 0.5rem;
    }

    .dropdown-content {
      display: inline;
      position: relative;
    }

    .dropdown-content li {
      float: left;
      padding: 0rem 0.1rem;
      width: 8rem;
    }

    .dropdown:hover .dropdown-content {
      display: inline;
    }

    .sub-dropdown {
      position: relative;
      display: inline-block;
    }

    .sub-btn {
      color: #f96;
      width: 8rem;
      display: inline;
      font-size: 1.5rem;
      line-height: 4.5rem;
      padding: 0.1rem 0.5rem;
      margin: 0rem;
      border: 0.1rem solid #f96;
      -webkit-border-radius: 2rem;
      -moz-border-radius: 2rem;
      border-radius: 2rem;
    }

    .sub-dropdown span:after {
      border: none;
    }

    .sub-dropdown-content li {
      float: none;
      padding: 0rem;
      text-align: center;
      display: block;
      width: 7rem;
    }

    .sub-dropdown a {
      display: block;
      line-height: 2rem;
    }

    .sub-dropdown-content {
      display: none;
      position: absolute;
      top: 4rem;
      right: -1rem;
      background-color: #fff;
      min-width: 10rem;
      box-shadow: 0rem 0.3rem 0.7rem 0.3rem rgba(0, 0, 0, 0.3);
      padding: 0.75rem 0rem;
      z-index: 1;
    }

    .sub-dropdown-content button {
      width: 10rem;
      padding: 0;
      margin: 0;
    }

    .sub-dropdown-content span {
      font-size: 1.5rem;
      padding: 0;
      line-height: 2rem;
    }

    .sub-dropdown:hover .sub-dropdown-content {
      display: block;
    }
  }

</style>
