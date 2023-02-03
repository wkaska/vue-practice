import { createRouter, createWebHashHistory } from 'vue-router'
import CharactersView from '../views/CharactersView.vue'
import EpisodesView from '../views/EpisodesView.vue'
import LocationsView from '../views/LocationsView.vue'


const routes = [
  {
    path: '/characters',
    name: 'characters',
    component: CharactersView
  },
  {
    path: '/episodes',
    name: 'episodes',
    component: EpisodesView
  },
  {
    path: '/locations',
    name: 'locations',
    component: LocationsView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
