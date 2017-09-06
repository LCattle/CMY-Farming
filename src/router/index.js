import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import HomePage from '@/views/HomePage'
import Login from '@/views/Login'
import CreateUser from '@/views/createUser'
import About from '@/views/about'
import RoleManagement from '@/views/RoleManagement'

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
        },
         {
          path: '/rolemanagement',
          name: 'User',
          components: {
            rightContent: RoleManagement
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
