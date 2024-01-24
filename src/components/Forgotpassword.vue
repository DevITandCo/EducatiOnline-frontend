<template>
    <div class="forgottenpassword-template">
        <form @submit.prevent="submitForm">
            <h3>Mot de passe oublié</h3>
            <div class="mb-3">
                <label>Adresse email</label>
                <input type="email" class="form-control form-control-lg" v-model="email"/>
            </div>
            <button type="submit" class="btn btn-dark btn-lg btn-block">Réinitialiser mot de passe</button>
        </form>
    </div>
</template>

<script>
    export default {
        name:'ForgotPasswordPage',
        data() {
            return {
            email: '',
            }
        },
        methods: {
        submitForm() {
            // Handle form submission
            console.log("Form data:", this.email);
        }
    }
    }
</script>

<style>
    .forgottenpassword-template{
    display: flex; /* Utiliser Flexbox */
    align-items: center; /* Centrer verticalement */
    flex-direction: column; /* Aligner les enfants verticalement */
    }
</style>