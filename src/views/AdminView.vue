<template>
    <div class="admin">
        <h1>Plateforme d'administration</h1>
        <p><a href="/edit?id=">Créer un article</a></p>
        <p><a href="/contactmanagement">Gestion des formulaires de contact</a></p>
        <p>Gestion des comptes</p>
        <table class="mgt">
            <tr>
                <th>Courriel</th>
                <th>Prénom</th>
                <th>Nom</th>
                <th>Actions</th>
            </tr>
            <tr v-for="(user) in filterUsers()"
                :key="user">
            <td>{{ user.email  }}</td>
            <td>{{ user.firstName  }}</td>
            <td>{{ user.lastName  }}</td>
            <td>
              <button v-on:click="deleteUser(user._id)"><img alt="Logo delete" src="@/assets/logo-delete.png"/></button>
              <button v-if="user.rank == 0" v-on:click="changeRank(user._id, 1 - parseInt(user.rank))"><img alt="Logo non admin" src="@/assets/logo-non-admin.png"/></button>
              <button v-if="user.rank == 1" v-on:click="changeRank(user._id, 1 - parseInt(user.rank))"><img alt="Logo admin" src="@/assets/logo-admin.png"/></button>
            </td>
            </tr>
        </table>
    </div>
  </template>
  
<script>
import { axiosClient } from '@/apiClient';
import { toast } from 'vue3-toastify';

export default {
    name: 'AdminPage',
    data() {
      return {
        users: '',
        publicPath: process.env.BASE_URL
      }
    },
    methods: {
        init() {
          let data = this.$data
            axiosClient.get('/auth/getAll',
                ).then(function (response) {
                    data.users = response.data.data.users
                }).catch(function (error) {
                    console.log(error);
                });
        },
        filterUsers() {
            return this.$data.users
        },
        changeRank(id, rank) {
            axiosClient.post('/auth/setRank', 
            {id: id, rank: rank}
                ).then(function (response) {
                    console.log(response)
                    toast.success('Modification réussie !');
                }).catch(function (error) {
                    console.log(error);
                    toast.error('Erreur lors de la modification.');
                });
        },
        deleteUser(id) {
            axiosClient.post('/auth/delete', 
            {id: id}
            ).then(function (response) {
                console.log(response)
                toast.success('Suppression réussie !');
                }).catch(function (error) {
                    console.log(error);
                    toast.error('Erreur lors de la suppression.');
                });
        }
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
  