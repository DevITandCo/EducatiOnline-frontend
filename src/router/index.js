import {createRouter, createWebHistory } from 'vue-router'

import AcceuilPage from "@/views/Acceuil.vue"
import DeficiencyFormPage from "@/views/DeficiencyForm.vue"
import NotFound from '@/views/Notfound.vue'


const routes = [
  { path: '/', name:'Acceuil',component: AcceuilPage},
  { path: '/formulaire', name:'Fiche', component: DeficiencyFormPage },
  { path: '/:catchAll(.*)', name:'404Name', component: NotFound}
]

const router = createRouter({
    history: createWebHistory(),
    routes : routes
})

export default router