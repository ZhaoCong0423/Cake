import Vue from 'vue'
import Router from 'vue-router'
import NosProduits from '@/components/NosProduits/NosProduits'
import BreadA from '@/components/NosProduits/BreadA'
import BreadB from '@/components/NosProduits/BreadB'
import BreadC from '@/components/NosProduits/BreadC'
import BreadD from '@/components/NosProduits/BreadD'
import BreadE from '@/components/NosProduits/BreadE'
import BreadF from '@/components/NosProduits/BreadF'
import BreadG from '@/components/NosProduits/BreadG'
import BreadH from '@/components/NosProduits/BreadH'
import BreadI from '@/components/NosProduits/BreadI'
import BreadJ from '@/components/NosProduits/BreadJ'
import Napoleon from '@/components/Napoleon/Napoleon'
import Nouveaute from '@/components/Nouveaute/Nouveaute'
import Mon from '@/components/Mon/Mon'
import Mondenglu from '@/components/Mon/Mondenglu'
import Monzhuce from '@/components/Mon/Monzhuce'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/NosProduits/BreadA"
    }, {
      path: '/NosProduits',
      name: 'NosProduits',
      component: NosProduits,
      children: [
        {
          path: 'BreadA',
          name: 'BreadA',
          component: BreadA
        },{
          path: 'BreadB',
          name: 'BreadB',
          component: BreadB
        },{
          path: 'BreadC',
          name: 'BreadC',
          component: BreadC
        },{
          path: 'BreadD',
          name: 'BreadD',
          component: BreadD
        },{
          path: 'BreadE',
          name: 'BreadE',
          component: BreadE
        },{
          path: 'BreadF',
          name: 'BreadF',
          component: BreadF
        },{
          path: 'BreadG',
          name: 'BreadG',
          component: BreadG
        },{
          path: 'BreadH',
          name: 'BreadH',
          component: BreadH
        },{
          path: 'BreadI',
          name: 'BreadI',
          component: BreadI
        },{
          path: 'BreadJ',
          name: 'BreadJ',
          component: BreadJ
        }
      ]
    },{
      path:'/Napoleon',
      name:'Napoleon',
      component:Napoleon
    },{
      path:'/Nouveaute',
      name:'Nouveaute',
      component:Nouveaute
    },{
      path:'/Mon',
      name:'Mon',
      component:Mon,
      redirect:"/Mon/Mondenglu",
      children:[
        {
          path:'Mondenglu',
          name:'Mondenglu',
          component:Mondenglu
        },{
          path:'Monzhuce',
          name:'Monzhuce',
          component:Monzhuce
        }
      ]
    }
  ]
})
