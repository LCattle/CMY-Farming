import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import HomePage from '@/views/HomePage'
import Login from '@/views/Login'
import CreateUser from '@/views/createUser'
import About from '@/views/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        Login: '',
        Home: HomePage
      },
      children: [
        {
          path: '/createuser',
          name: 'User',
          components: {
            rightContent: CreateUser
          }
        },
         {
          path: '/',
          name: 'User',
          components: {
            rightContent: About
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      components: {
        Login: Login,
        Home: '',
        rightContent: ''
      }
      
    },

  ]
})
