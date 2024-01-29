<template>
    <div class="login-template">
        <form @submit.prevent="submitForm">
            <h3>Connection</h3>
            <div class="mb-3">
                <label>Adresse Email</label>
                <input type="email" class="form-control form-control-lg" v-model="email"/>
            </div>
            <div class="mb-3">
                <label>Mot de passe</label>
                <input :type="showPassword ? 'text' : 'password'" class="form-control form-control-lg" v-model="password"/>
                <input type="checkbox" @click="showPassword = !showPassword"> Afficher mot de passe
            </div>
            <button type="submit" class="btn btn-dark btn-lg btn-block">Se connecter</button>
            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/reinitialisation">Mot de passe oublié ?</router-link>
            </p>
        </form>
    </div>
</template>

<script>
import { axiosClient } from '@/apiClient';

export default {
    name: 'ArticlePage',
    data() {
        return {
            articles: [],
            input: '',
        }
    },
    created() {
        this.refresh();
    },
    methods: {
        refresh() {
            axiosClient.get('article/getAll')
            .then((response) => {
                var responseArray = response.data.data.existingArticle;
                responseArray.forEach(element => {
                    this.articles.push({ title: element.title, path: "/formulaire?id=" + element._id });
                });
            }).catch((error) => {
                console.log(error);
            });
        },
        filteredList() {
            if (this.input === "") {
                return [];
            }
            return this.articles.filter((element) =>
                element.title.toLowerCase().includes(this.input.toLowerCase())
            );
        }
    }
}
</script>

<style>
    .login-template{
    display: flex;
    align-items: center;
    flex-direction: column; 
    }
</style>