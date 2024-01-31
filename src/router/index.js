import {createRouter, createWebHistory } from 'vue-router'

import AcceuilPage from "@/views/Acceuil.vue"
import DeficiencyFormPage from "@/views/DeficiencyForm.vue"
import NewDeficiencyFormPage from "@/views/NewDeficiencyForm.vue"
import AdminPage from '@/views/AdminView.vue'
import LoginPage from '@/components/Login.vue'
import SignupPage from '@/components/Signup.vue'
import ForgotPasswordPage from '@/components/Forgotpassword.vue'
import NotFound from '@/views/Notfound.vue'
import FaqPage from '@/components/Faq.vue'
import ContactManagementPage from '@/views/ContactManagement.vue'


const routes = [
  { path: '/', name:'Acceuil',component: AcceuilPage},
  { path: '/formulaire', name:'Fiche', component: DeficiencyFormPage },
  { path: '/edit', name:'Edit', component: NewDeficiencyFormPage },
  { path: '/admin', name:'Admin', component: AdminPage },
  { path: '/contactmanagement', name:'ContactManagement', component: ContactManagementPage },
  { path: '/connection', component: LoginPage },
  { path: '/inscription', component: SignupPage },
  { path: '/reinitialisation', component: ForgotPasswordPage },
  { path: '/faq', name:'FAQ', component: FaqPage },
  { path: '/:catchAll(.*)', name:'404Name', component: NotFound}
]

const router = createRouter({
    history: createWebHistory(),
    routes : routes
})

export default router