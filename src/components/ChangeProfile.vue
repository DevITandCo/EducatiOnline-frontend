

<template>
    <div class="login-template">
        <form @submit.prevent="submitForm">
            <h3>Modify your account</h3>
            <div class="mb-3">
                <label>Prénom</label>
                <input type="text" class="form-control form-control-lg" v-model="firstName"/>
            </div>
            <div class="mb-3">
                <label>Nom de famille</label>
                <input type="text" class="form-control form-control-lg" v-model="lastName"/>
            </div>
            <div class="mb-3">
                <label>Adresse Email</label>
                <input type="email" class="form-control form-control-lg" v-model="email"/>
            </div>
            <div class="mb-3">
                <label>Ancien Mot de passe</label>
                <input :type="showPassword ? 'text' : 'password'" class="form-control form-control-lg" v-model="password"/> 
                <input type="checkbox" @click="showPassword = !showPassword"> Afficher mot de passe
            </div>
            <div class="mb-3">
                <label>Nouveau Mot de passe</label>
                <input :type="showPassword ? 'text' : 'password'" class="form-control form-control-lg" v-model="new_password"/> <!-- possible bug -->
                <input type="checkbox" @click="showPassword = !showPassword"> Afficher mot de passe
            </div>
            <button class="btn btn-dark btn-lg btn-block">Modifier le compte</button>
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
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            new_password:'',
            showPassword: false
        }
    },
    methods: {
        init(){
            this.$data.firstName = this.$store.getters.firstName;
            this.$data.lastName = this.$store.getters.lastName;
            this.$data.email = this.$store.getters.email;
            this.$data.id = this.$store.getters.id;

        },
        
        submitForm() {
            if (!this.checkPasswordLength(this.new_password)) {
                toast.error("Le mot de passe doit contenir plus de 8 caractères");
            } else {
                axiosClient.post('auth/update', { 
                    id: this.id,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    password: this.password,
                    new_password: this.new_password
                }).then(response => {
                    console.log(response);
                    toast.success('Compte modifié avec succès!');
                    this.resetForm();
                }).catch(error => {
                    console.log(error);
                    toast.error('Une erreur s\'est produite lors de la modification du compte.');
                });            
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
    },
    beforeMount(){
        this.init();
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