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
            <button class="btn btn-dark btn-lg btn-block">Se connecter</button>
            <!-- <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/reinitialisation">Mot de passe oublié ?</router-link>
            </p> -->
        </form>
    </div>
</template>

<script>
import { axiosClient } from '@/apiClient';
import { toast } from 'vue3-toastify';



export default {
    name: 'Signin',
    data() {
        return {
            email: '',
            password: '',
            showPassword: false
        };
    },
    methods: {
        submitForm() {
            axiosClient.post('auth/sign-in', {
                email: this.email,
                password: this.password
            }).then(response => {
                toast.success('Connexion réussie !');
                this.$store.commit('setLoggedIn'); // Set isLoggedIn to true
                this.$store.commit('setIsAdmin', response.data.data.rank);
                this.$store.commit('setFirstname', response.data.data.firstName);
                this.$store.commit('setLastname', response.data.data.lastName);
                this.$store.commit('setEmail', response.data.data.email);
                this.$store.commit('setId', response.data.data.id);
                this.$router.push('/'); // Redirection to path "/" which is the index page
            }).catch(error => {
                console.log(error);
                toast.error('E-mail ou mot de passe incorrect.');
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