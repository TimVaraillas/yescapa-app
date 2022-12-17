import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list',
      component: () => import('../views/VehiclesListView.vue')
    },
    {
      path: '/vehicle/:id',
      name: 'vehicle',
      component: () => import('../views/VehicleDetailView.vue')
    },
  ]
})

export default router
