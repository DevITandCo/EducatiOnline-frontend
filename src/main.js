import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'vue3-toastify/dist/index.css';

const app = createApp(App)

app.use(store);
app.use(router)
app.mount('#app')