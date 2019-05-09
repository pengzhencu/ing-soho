import Vue from 'vue'
import Router from 'vue-router'
import IngIndex from '@/page/IngIndex'
import IngAbout from '@/page/IngAbout'
import IngNew from '@/page/IngNew'
import IngService from '@/page/IngService'
import IngWork from '@/page/IngWork'
import work from './work'
import IngTeam from '@/page/IngTeam'
import IngContact from '@/page/IngContact'
import IngTest from '@/page/IngTest'
import Ing404 from '@/page/Ing404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IngIndex
    },
    {
      path: '/about',
      component: IngAbout
    },
    {
      path: '/new',
      component: IngNew
    },
    {
      path: '/service',
      component: IngService
    },
    {
      path: '/work',
      component: IngWork,
      children: work
    },
    {
      path: '/team',
      component: IngTeam
    },
    {
      path: '/contact',
      component: IngContact
    },
    {
      path: '/test',
      component: IngTest
    },
    {
      path: '/404',
      name: '404',
      component: Ing404
    },
    {
      path: '*',
      redirect: '/404'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }+
    }
  }
})
