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
import { axiosClient } from '@/apiClient';
import { toast } from 'vue3-toastify';

export default {
    name: 'Signup',
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
            if (this.checkPasswordLength(this.password)) {
                axiosClient.post('auth/sign-up', {
                    username: this.lastName,
                    email: this.email,
                    password: this.password
                }).then(response => {
                    console.log(response);
                    toast.success('success', 'Compte créé avec succès!');
                    this.resetForm();
                }).catch(error => {
                    console.log(error);
                    toast.error('error', 'Une erreur s\'est produite lors de la création du compte.');
                });
            } else {
                toast.error("Le mot de passe doit contenir plus de 8 caractères");
            }
        },
        checkPasswordLength(password) {
            if (password.length < 8) {
                console.error("Le mot de passe doit contenir au moins 8 caractères.");
                return false;
            }
            return true;
        },
        resetForm() {
            this.firstName = '';
            this.lastName = '';
            this.email = '';
            this.password = '';
        }
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