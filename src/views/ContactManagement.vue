<template>
    <div class="admin">
        <h1>Plateforme de gestion des formulaires de contact</h1>

        <p>Gestion de tous les formulaires</p>

        <table class="mgt">
            <tr>
                <th>Courriel de l'auteur</th>
                <td>Catégorie</td>
                <td>Contenu</td>
                <td colspan="2">Options</td>
            </tr>
            <tr v-for="(form,i) in getForm()"
                :key="i"
                :to=getForm().length>
            <th>{{ form.author }}</th>
            <td>{{ form.category }}</td>
            <td>{{ form.content }}</td>
            <td><button v-on:click="deleteForm(form._id)">delete</button></td> 
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
        // changeRank(id, rank) {
        //     axiosClient.post('/auth/setRank', 
        //     {id: id, rank: rank}
        //         ).then(function (response) {
        //             console.log(response)
        //             toast.success('Création réussie !');
        //         }).catch(function (error) {
        //             console.log(error);
        //             toast.error('Erreur lors de la création.');
        //         });
        // }
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
</style>
  