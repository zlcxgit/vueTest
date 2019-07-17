import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import helloSon from '@/components/helloSon'
import helloTwo from '@/components/helloTwo'
import welcome from '@/home/welcome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:'/helloSon',
      children:[
        {
          path:'helloSon',
          component:helloSon,
          name:'helloSon'
        },
        {
          path:'helloTwo',
          component:helloTwo,
          name:'helloTwo'
        }
      ]
    },
    {
      path:'/welcome',
      name:'welcome',
      component:welcome
    }
  ]
})
