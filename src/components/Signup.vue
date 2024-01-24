<template>
    <div class="signup-template">
        <form @submit.prevent="submitForm">
            <h3>Créer un compte</h3>
            <div class="mb-3">
                <label>Prénom</label>
                <input type="text" class="form-control form-control-lg" v-model="firstName"/>
            </div>
            <div class="mb-3">
                <label>Nom de famille</label>
                <input type="text" class="form-control form-control-lg" v-model="lastName"/>
            </div>
            <div class="mb-3">
                <label>Adresse email</label>
                <input type="email" class="form-control form-control-lg" v-model="email"/>
            </div>
            <div class="mb-3">
                <label>Mot de passe</label>
                <input :type="showPassword ? 'text' : 'password'" class="form-control form-control-lg" v-model="password"/>
                <input type="checkbox" @click="showPassword = !showPassword"> Afficher mot de passe
            </div>
            <button type="submit" class="btn btn-dark btn-lg btn-block">S'enregistrer</button>
            <p class="forgot-password text-right">
                <router-link to="/connection">Déjà un compte ?</router-link>
            </p>
        </form>
    </div>
</template>


<script>
const axios = require('axios')
export default {
    name: 'SignupPage',
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            showPassword: false,
        }
    },
    methods: {
        submitForm() {
            // Handle form submission
            axios.get('http://localhost:3000/v1/health/ping'
            ).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
            console.log("Form data:", this.firstName, this.lastName, this.email, this.password);
            // axios.post('http://localhost:3000/v1/auth/sign-up', {
            //     username: this.lastName,
            //     email: this.email,
            //     password: this.password
            // })
        },
        // checkPasswordLength(password){
        //     if(this.password.length < 8){
        //         try catch
        //     }
        // }
    }
}
</script>


<style>
    .signup-template{
    display: flex;
    align-items: center;
    flex-direction: column;
    }
</style>