import Vue from 'vue'
import Router from 'vue-router'
import demo from '../pages/demo'
import chartdemo from '../components/charts'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
