import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import LoginPage from '@/pages/LoginPage'
import ForgotPassword from '@/pages/ForgotPassword'
import ResetPassword from '@/pages/ResetPassword'

Vue.component('app', App)

import DashboardPage from '@/pages/DashboardPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'Home', component: LoginPage},
    {path: '/forgot-password', name: 'forgot-password', component: ForgotPassword},
    {path: '/reset-password/:token', name: 'reset-password', component: ResetPassword},
    {path: '/dashboard', name: 'dashboard', component: DashboardPage, meta: { requiresAuth: true }}
  ]
})
