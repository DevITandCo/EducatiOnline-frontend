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
    <div class="articles">
        <h1>Plateforme de gestion des articles</h1>
        <div class="actions">
            <router-link to="/edit?id=">
            <div class="action">
                <img alt="logo creer un article" src="@/assets/logo-ecrire-article.png" />
                <h4>Créer un article</h4>
            </div>
            </router-link>
        </div>
        <div class="articletmanagement">
            <h3>Gestion des articles</h3>
            <table>
                <tr>
                    <th>Titres</th>
                    <th>Actions</th>
                </tr>
                <tr v-for="(article) in filterArticles()" :key="article">
                    <td><router-link :to="'/formulaire?id=' + article._id">{{ article.title }}</router-link></td>
                    <td>
                        <div class="buttons">
                            <button v-on:click="updateArticle(article._id)"><img alt="Logo update" src="@/assets/logo-ecrire-article.png"/></button>
                            <button v-on:click="deleteArticle(article._id)"><img alt="Logo delete" src="@/assets/logo-delete.png"/></button>
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
    name: 'ArticlesMgtPage',
    data() {
      return {
        articles: '',
      }
    },
    methods: {
        init() {
            let data = this.$data
            axiosClient.get('/article/getAll',
                ).then(function (response) {
                    data.articles = response.data.data.articles
                }).catch(function (error) {
                    console.log(error);
                });
        },
        filterArticles() {
            return this.$data.articles
        },
        deleteArticle(id) {
            let obj = this
            axiosClient.post('/article/delete', 
                {id: id}
                ).then(function (response) {
                    obj.init()
                    console.log(response)
                    toast.success('Suppression réussie !');
                    }).catch(function (error) {
                        console.log(error);
                        toast.error('Erreur lors de la suppression.');
                    });
        },

        updateArticle(id) {
            this.$router.push('/formulaire?id=' + id);
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
      }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  a {
    color: #42b983;
  }

  .articles {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 80vh;
  }

  .articles .actions {
    display: flex;
    flex-direction: column;
  }

  .articles .actions img {
    width: 80px;
  }

  .articles .action {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .articles .articletmanagement {
    margin: 40px 0;
  }
  .articles table {
    width: 60vw;
  }
  .articles th {
    background-color: #DBDBDB;
  }
  .articles th, .articles td {
    border: 1px solid #BDBDBD;
  }

  .articles td .buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  
  .articles td img {
    width: 25px;
    height: 25px;
  }

@media only screen and (min-width: 1200px){

  .articles table {
    width: 40vw;
  }
}

@media only screen and (min-width: 1980px){

  .articles .actions {
    width: 60vw;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .articles table {
    width: 20vw;
  }
}
  </style>