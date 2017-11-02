import Vue from 'vue'
import Router from 'vue-router'

// @符号是在webpack项目配置中进行的路径简写
// webpack.base.conf.js中resolve项
// import HelloWorld from '@/components/HelloWorld'
import TopicAll from '@/components/topic-all/topic-all'
import TopicMovie from '@/components/topic-movie/topic-movie'
import TopicBook from '@/components/topic-book/topic-book'
import TopicStatus from '@/components/topic-status/topic-status'
import TopicGroup from '@/components/topic-group/topic-group'
import TopicLoading from '@/components/topic-loading/topic-loading'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: TopicAll
    },
    {
      path: '/movie',
      component: TopicMovie
    },
    {
      path: '/book',
      component: TopicBook
    },
    {
      path: '/status',
      component: TopicStatus
    },
    {
      path: '/group',
      component: TopicGroup
    },
    {
      path: '/loading',
      component: TopicLoading
    },
    {
      path: '/*',
      redirect: '/'
    }
  ]
})
