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
const axios = require('axios')
export default {
    name:'LoginPage',
    data() {
        return {
            email: '',
            password: '',
            showPassword: false,
        }
    },
    methods: {
        submitForm() {
            // Handle form submission
            console.log("Form data:", this.email, this.password);
            axios.post('http://localhost:3000/v1/auth/sign-in', {
                email: this.email,
                password: this.password
            }).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
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