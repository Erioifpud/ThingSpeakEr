import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/pages/IndexPage'
import ChannelsPage from '@/components/pages/ChannelsPage'
import DevicesPage from '@/components/pages/DevicesPage'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: IndexPage
    },
    {
      path: '/channels',
      name: 'Channels',
      component: ChannelsPage,
      meta: {
        requiredKey: true
      }
    },
    {
      path: '/devices/:id',
      name: 'Devices',
      component: DevicesPage,
      meta: {
        requiredKey: true
      }
    }
  ]
})

export default router
