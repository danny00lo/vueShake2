import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('./views/Index.vue'),
    },
    // {
    //   path: '/havePrize',
    //   name: 'havePrize',
    //   component: () => import('./views/HavePrize.vue')
    // },
    // {
    //   path: '/noPrize',
    //   name: 'noPrize',
    //   component: () => import('./views/NoPrize.vue')
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
});

