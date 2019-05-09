// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'normalize.css'
import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

// import language properties
import LangEn from '../static/lang/en'
import LangZhHans from '../static/lang/zhHans'
import LangZhHant from '../static/lang/zhHant'

Vue.config.productionTip = true

Vue.use(VueI18n)
Vue.use(ElementUI)
Vue.use(VueAxios, axios)

// config language setting
const i18n = new VueI18n({
  locale: 'zhHans',
  messages: {
    'en': LangEn,
    'zhHans': LangZhHans,
    'zhHant': LangZhHant
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
