
<template>
    <header class="header">
        <router-link class="header-brand" to="/">
            <img alt="Logo Edu" src="@/assets/logo-edu.png">
        </router-link>
        <form @submit.prevent="searchDeficiency" class="search-form">
            <input class="form-control" type="search" placeholder="Search" aria-label="Search" v-model="input" v-on:click="clearSearch">
            <div class="list">
                <router-link
                    v-for="(element) in filteredList()"
                    :key="element"
                    :to="element.path"
                    class="link"
                    @click="redirect"
                >{{element.title}}
                </router-link>
                <div class="link" v-if="input && !filteredList().length">
                    <p>Aucuns résultats</p>
                </div>
            </div>
        </form>
        <ul class="header-nav">
            <li class="nav-item" v-if="!isLoggedIn">
                <router-link class="nav-link" to="/connection">Connexion</router-link>
            </li>
            <li class="nav-item" v-if="!isLoggedIn">
                <router-link class="nav-link" to="/inscription">Inscription</router-link>
            </li>
            <li class="nav-item" v-if="isLoggedIn">
                <!-- redirects to 404 for now -->
                <router-link class="nav-link" to="/profil">Profil</router-link>
            </li>
            <li class="nav-item" v-if="isLoggedIn">
                <button class="nav-link" @click="logout">Déconnexion</button>
            </li>
        </ul>
    </header>
</template>

<script setup>
import { axiosClient } from '@/apiClient'; 
import { ref, computed } from "vue";
import { useStore } from 'vuex';

const store = useStore();
const isLoggedIn = computed(() => store.state.isLoggedIn); // Read the value of isLoggedIn, it is initially to false

let input = ref("");
var articles = [];

const refresh = () => {
    axiosClient.get('article/getAll')
    .then(response => {
        const responseArray = response.data.data.existingArticle;
        articles = []
        responseArray.forEach(element => {
            articles.push({ title: element.title, path: "/formulaire?id=" + element._id });
        });
    })
    .catch(error => {
        console.error(error);
    });
};

const searchDeficiency = () => {
    axiosClient.get('article/getAll')
    .then(response => {
        const responseArray = response.data.data.existingArticle;
        let found = false;
        responseArray.forEach(element => {
            if (input.value === element.title) {
                found = true;
                this.$router.push({ path: '/formulaire', query: { titre: input.value } });
            }
        });
        if (!found) {
            console.log("No match found");
        }
    })
    .catch(error => {
        console.error(error);
    });
};

const filteredList = () => {
    return input.value != "" ? articles.filter(element => 
        element.title.toLowerCase().includes(input.value.toLowerCase())
    ) : [];
};

function clearSearch() {
    input.value = "";
refresh()
}

function redirect(){
    clearSearch();
}

function logout() {
    // Update the isLoggedIn state
    store.commit('updateIsLoggedIn', false);

    // Refresh the page
    location.reload();
}
</script>

<style>
.header {
    background-color: #0375e3; /* Match the footer's background color */
    color: #ffffff; /* Match the footer's text color */
    padding: 10px 20px; /* Adjust padding to give more space */
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.9em; /* Match the footer's font size */
}

.header-brand img {
    max-height: 50px; /* Adjusted for a balanced look */
    width: auto;
    height: auto;
}

.header-nav {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
}

.nav-item {
    margin: 0 15px; /* Adjusted for a balanced look */
}

.nav-link {
    color: #ffffff; /* Match the footer's text color */
    transition: color 0.2s, text-decoration 0.2s;
    text-decoration: none; 
}

.nav-link:hover,
.nav-item.active .nav-link {
    color: #adb5bd; /* A lighter shade for hover and active states */
    text-decoration: underline;
}

.search-form {
    display: flex;
    flex-direction: column;
}

.form-control {
    padding: 5px 10px;
    margin-right: 10px;
    border: 1px solid #adb5bd; /* A border color that stands out less */
    background-color: #495057; /* Darker background for the input */
    color: #ffffff; /* White text color for the input */
}

.link {
    color: black;
    width: 20vw;
    height: 5vh;
    margin-bottom: 0;
    background-color: white;
    border: 1px solid black;
}

.list {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 55px;
}
</style>