import { createRouter, createWebHistory } from 'vue-router'

// Import your pages
import Dashboard from '../views/Dashboard.vue'
import Employees from '../components/EmployeeTable.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/employees',
    name: 'Employees',
    component: Employees,
  },
  // Add more routes here
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
