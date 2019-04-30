import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import Logout from "./views/Logout.vue";
import Welcome from './views/Welcome.vue';
import Taskpage from './views/Taskpage.vue';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
      {
      path: '/signup',
      name: 'signup',
      component: Signup
    },

      {
      path: '/tasks',
      name: 'tasks',
      component: Taskpage
    },

    { path: "/logout", 
    name: "logout", 
    component: Logout },

    { path: "/welcome", 
    name: "welcome", 
    component: Welcome },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
