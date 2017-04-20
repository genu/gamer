import Vue from 'vue';
import Router from 'vue-router';
import Jeapordy from '@/components/jeapordy/Jeapordy';
import Games from '@/components/Games';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Games',
      component: Games
    },
    {
      path: '/jeapordy',
      name: 'Jeapordy',
      component: Jeapordy
    }
  ]
});
