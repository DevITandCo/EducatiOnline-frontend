<script setup>
import { computed } from "vue";
import { useStore } from 'vuex';

const store = useStore();
const isAdmin = computed(() => store.state.isAdmin);

if (isAdmin.value != 1) {
  window.location.replace("/");
}
</script>

<template>
    <div class="admin">
      <h1>Plateforme d'administration</h1>
      <div class="actions">
        <router-link to="/articlesmanagement">
          <div class="action">
            <img alt="logo creer un article" src="@/assets/logo-ecrire-article.png" />
            <h4>Plateforme de gestion des articles</h4>
          </div>
        </router-link>
        <router-link to="/contactmanagement">
          <div class="action">
            <img alt="logo gestion des formulaires de contacts" src="@/assets/logo-contact-management.png"/>
            <h4>Plateforme de gestion des formulaires de contact</h4>
          </div>
        </router-link>
      </div>
      <div class="accountmanagement">
        <h3>Gestion des comptes</h3>
        <table>
            <tr>
                <th>Courriel</th>
                <th>Actions</th>
            </tr>
            <tr v-for="(user) in filterUsers()" :key="user">
            <td>{{ user.email  }}</td>
            <td>
              <div class="buttons">
                <button v-on:click="deleteUser(user._id)"><img alt="Logo delete" src="@/assets/logo-delete.png"/></button>
                <button v-if="user.rank == 0" v-on:click="changeRank(user._id, 1 - parseInt(user.rank))"><img alt="Logo non admin" src="@/assets/logo-non-admin.png"/></button>
                <button v-if="user.rank == 1" v-on:click="changeRank(user._id, 1 - parseInt(user.rank))"><img alt="Logo admin" src="@/assets/logo-admin.png"/></button>
              </div>
            </td>
            </tr>
        </table>
      </div>
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
          let obj = this
          axiosClient.post('/auth/setRank', 
            {id: id, rank: rank}
                ).then(function (response) {
                    obj.init()
                    console.log(response)
                    toast.success('Modification réussie !');
                }).catch(function (error) {
                    console.log(error);
                    toast.error('Erreur lors de la modification.');
                });
        },
        deleteUser(id) {
          let obj = this
          axiosClient.post('/auth/delete', 
            {id: id}
            ).then(function (response) {
                obj.init()
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
        const store = useStore();
        const isAdmin = computed(() => store.state.isAdmin);

        if (isAdmin.value != 1) {
          window.location.replace("/");
        }
      },
      updated: function() {
        // use it when only parameter changes
        // this.init()
      },
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  a {
    color: #42b983;
  }

  .admin {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 80vh;

  }

  .admin .actions {
    display: flex;
    flex-direction: column;
  }

  .admin .actions img {
    width: 80px;
  }

  .admin .action {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .admin .accountmanagement {
    margin: 40px 0;
  }
  .admin table {
    width: 60vw;
  }
  .admin th {
    background-color: #DBDBDB;
  }
  .admin th, .admin td {
    border: 1px solid #BDBDBD;
  }

  .admin td .buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  
  .admin td img {
    width: 25px;
    height: 25px;
  }

@media only screen and (min-width: 1200px){

  .admin table {
    width: 40vw;
  }
}

@media only screen and (min-width: 1980px){

  .admin .actions {
    width: 60vw;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .admin table {
    width: 20vw;
  }
}
  </style>