import Vue from 'vue'
import Router from 'vue-router'
import demo from '../pages/demo'
import chartdemo from '../components/charts'
import gmap from '../pages/gmap'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'demo',
      component: demo
    },
    {
      path:'/chartdemo',
      name:'chartdemo',
      component:chartdemo
    },
    {
      path:'/gmap',
      name:'gmap',
      component:gmap
    }
  ]
})
