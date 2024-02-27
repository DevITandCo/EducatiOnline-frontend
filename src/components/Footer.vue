<template>
    <footer class="footer">
        <div class="footer-content">
            <p class="brand-name">EducatiONLINE</p>
            <span class="copyright">&copy;2023 - 2024</span>
        </div>
        <div class="footer-content">
            <li class="footer-item">
                <router-link class="nav-link" to="/admin" v-if="isAdmin==1">Plateforme d'administration<span class="visually-hidden"></span></router-link>
            </li>
            <li class="footer-item">
                <router-link class="nav-link" to="/contact">Nous contacter <span class="visually-hidden"></span></router-link>
            </li>
            <li class="footer-item">
                <router-link class="nav-link" to="/faq">FAQ<span class="visually-hidden"></span></router-link>
            </li>
        </div>
        <div class="footer-content">
            <span class="powered-by">Powered by</span>
            <p class="company-name">DevIT&Co</p>
        </div>
    </footer>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from 'vuex';

const store = useStore();
const isAdmin = computed(() => store.state.isAdmin);
</script>

<style>
.footer {
    background-color: #0375e3;
    color: #ffffff; 
    padding: 20px;
    display: flex; 
    justify-content: space-between; 
    align-items: center;
    font-size: 0.9em; 
}

.footer-content {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.footer-item {
    padding: 0;
    margin: 0;
}
.brand-name {
    font-weight: bold;
    margin-bottom: 5px;
}

.company-name {
    font-weight: bold;
}
</style>
