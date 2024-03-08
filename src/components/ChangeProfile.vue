

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
                <label>Ancien Mot de passe (obligatoire)</label>
                <input :type="showPassword ? 'text' : 'password'" class="form-control form-control-lg" v-model="password"/> 
            </div>
            <div class="mb-3">
                <label>Nouveau Mot de passe (optionnel)</label>
                <input :type="showPassword ? 'text' : 'password'" class="form-control form-control-lg" v-model="new_password"/> <!-- possible bug -->
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
        updateUser(){
            //create a temporary email variable to not force the user to change his email
            let temp_email = this.email;
                if(temp_email == this.$store.getters.email){
                    temp_email = '';
                }
                if(this.new_password == ''){
                    this.new_password= this.password;
                }
                axiosClient.post('auth/update', { 
                    id: this.id,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: temp_email,
                    password: this.password,
                    new_password: this.new_password
                }).then(response => {
                    console.log(response);
                    toast.success('Compte modifié avec succès!');
                    this.$store.commit('setLoggedIn'); // Set isLoggedIn to true
                    this.$store.commit('setFirstname', this.firstName);
                    this.$store.commit('setLastname', this.lastName);
                    this.$store.commit('setEmail', this.email);
                    this.$store.commit('setId', this.id);
                    this.$router.push('/'); // Redirection to path "/" which is the index page
                }).catch(error => {
                    console.log(error);
                    toast.error('Une erreur s\'est produite lors de la modification du compte.');
                });
        },
        
        submitForm() {
            if(this.new_password==''){
                this.updateUser();
            }
            else if (!this.checkPasswordLength(this.new_password)) {
                toast.error("Le mot de passe doit contenir plus de 8 caractères");
            }
            else{
                this.updateUser();
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
        min-height: 80vh;

    }
</style>