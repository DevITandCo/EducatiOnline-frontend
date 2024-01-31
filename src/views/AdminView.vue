<template>
    <div class="acceuil">
        <h1>Plateforme d'administration</h1>

        <p><a href="/formulaire?id=">Créer un article</a></p>

        <p>Gestion du rang des comptes</p>

        <tr>
            <th>Mail</th>
            <td>firstName</td>
            <td>lastName</td>
            <td>rank</td>
            <td>delete</td>
        </tr>
        <tr v-for="(user,i) in filterUsers()"
        :key="i"
        :to=getUsers().length>
       <th scope="row">{{ user.email  }}</th>
       <td>{{ user.firstName  }}</td>
       <td>{{ user.lastName  }}</td>
       <td><button v-on:click="changeRank(user._id, user,rank)">set rank to {{ 1 - parseInt(user.rank) }}</button></td>
       <td><button v-on:click="deleteUser(user._id)">delete</button></td>
       </tr>
       <!-- <button v-on:click="getUsers()">clickme</button> -->
    </div>
  </template>
  
<script>
import { axiosClient } from '@/apiClient';
import { toast } from 'vue3-toastify';

export default {
    name: 'AdminPage',
    data() {
      return {
        users: ''
      }
    },
    methods: {
        init() {
        //   const methods = this
          let data = this.$data
        //   if (id != null) {
            axiosClient.get('/auth/getAll',
                ).then(function (response) {
                    data.users = response.data.data.users
                }).catch(function (error) {
                    console.log(error);
                });
        //   }
        },
        getUsers() {
            // console.log(this.$data)
            return this.$data.users
        },
        filterUsers() {
            // console.log(this.$data)
            return this.$data.users
        },
        changeRank(id, rank) {
            console.log(id, '-', rank)
            axiosClient.post('/auth/setRank', 
            {id: id, rank: 0}
                ).then(function (response) {
                    console.log(response)
                    toast.success('Création réussie !');
                }).catch(function (error) {
                    console.log(error);
                    toast.error('Erreur lors de la création.');
                });
        },
        deleteUser(id) {
            axiosClient.post('/auth/delete', 
            {id: id}
            ).then(function (response) {
                console.log(response)
                toast.success('Création réussie !');
                }).catch(function (error) {
                    console.log(error);
                    toast.error('Erreur lors de la création.');
                });
        }
      },
      beforeMount: function() {
        // use is when page changes
        this.init()
      },
      updated: function() {
        // use it when only parameter changes
        // this.init()
      },
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  