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
            <button v-on:click="login()" type="submit" class="btn btn-dark btn-lg btn-block">Se connecter</button>
            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/reinitialisation">Mot de passe oublié ?</router-link>
            </p>
        </form>
    </div>
</template>

<script>
import { axiosClient } from '@/apiClient';

export default {
  name: 'DeficiencyFormPage',
  props: {
    id: String,
    mail: String,
    username: String,
    token: String
  },
  data() {
    return {
      user: {
        id: '',
        mail: '',
        username: '',
        token: '',
        email: '',
        passwword: ''
      }
    }
  },
  methods: {
    login() {
        let User = this
        axiosClient.post('http://localhost:3000/v1/auth/sign-in',
         {"email": User.email, "password": User.password}
                    ).then(function (response) {
                        console.log('response')
                        console.log(response)
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