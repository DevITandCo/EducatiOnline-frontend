<template>
    <div class="admin">
        <h1>Plateforme de gestion des formulaires de contact</h1>

        <p>Gestion de tous les formulaires</p>

        <table class="mgt">
            <tr>
                <th>Courriel de l'auteur</th>
                <th>Catégorie</th>
                <th>Contenu</th>
                <th colspan="2">Options</th>
            </tr>
            <tr v-for="(form,i) in getForm()"
                :key="i"
                :to=getForm().length>
            <td>{{ form.author }}</td>
            <td>{{ form.category }}</td>
            <td>{{ form.content }}</td>
            <td><button v-on:click="deleteForm(form._id)"><img src='@/assets/logo-delete.png' alt='Delete logo' /></button></td> 
            </tr>
        </table>

    </div>
</template>
  
<script>
import { axiosClient } from '@/apiClient';
import { toast } from 'vue3-toastify';

export default {
    name: 'ContactManagementPage',
    data() {
      return {
        forms: ''
      }
    },
    methods: {
        init() {
          let data = this.$data
            axiosClient.get('/contact/getAll',
                ).then(function (response) {
                    data.forms = response.data.data.existingForm
                    console.log(response);
                }).catch(function (error) {
                    console.log(error);
                });
        },
        getForm() {
            return this.$data.forms
        },
        deleteForm(id) {
            axiosClient.post('/contact/delete', 
            {id: id}
            ).then(function (response) {
                console.log(response)
                toast.success('Suppression réussie !');
                }).catch(function (error) {
                    console.log(error);
                    toast.error('Erreur lors de la suppression.');
                });
        },
      },
      beforeMount: function() {
        // use is when page changes
        this.init()
      },
      updated: function() {
        // use it when only parameter changes
        this.init()
      },
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }

  a {
    color: #42b983;
  }

  .admin {
    display: flex;
    flex-direction: column;
  }

  .admin th {
    background-color: #DBDBDB;
  }
  .admin th, .admin td {
    border: 1px solid #BDBDBD;
  }

  .admin td img {
    width: 25px;
    height: 25px;
  }
</style>
  