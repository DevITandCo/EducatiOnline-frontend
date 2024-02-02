
<template>
    <div class="deficiency">
      <router-link :to="'/formulaire?id=' + article.id" id="back">Retournez à l'article</router-link>
      <form @submit.prevent="submitForm">
        <h1>titre</h1>
        <textarea
          contentEditable="true"
          class="txt_field txt_title"
          id="txt_title"

          v-model="article.title"
        >
        </textarea>
        <h3>Pathologie</h3>
        <textarea
          contentEditable="true"
          class="txt_field txt_pathology"
          v-model="article.pathology"
          
        >
        </textarea>
        <h3>Symptomes</h3>
        <textarea
          contentEditable="true"
          class="txt_field"
          v-model="article.symptoms"
        ></textarea>
        <h3>Contributions</h3>
        <textarea
          contentEditable="true"
          class="txt_field"
          v-model="article.contributions"
        ></textarea>
        <h3>Procédures</h3>
        <textarea
          contentEditable="true"
          class="txt_field"
          v-model="article.procedures"
        ></textarea>

        <p>Pour insérer un lien URL, veuillez rédiger ce dernier sous le format suivant:</p>
        <p><b>syntaxe:</b>Nom|URL</p>
        <p><b>exemple:</b>Education, formation et handicap - Ministere du 
          travail de la santé et des solidarités|
          https://handicap.gouv.fr/education-formation-et-handicap</p>
          <h3>En savoir plus</h3>
          <textarea
            contentEditable="true"
            class="txt_field"
            v-model="article.additional"
          ></textarea>
          <h3>Fiches liées</h3>
          <textarea
            contentEditable="true"
            class="txt_field"
            v-model="article.related"
          ></textarea>

          <div class="cud_articles">
            <button class="btn btn-primary btn-lg btn-block" v-if="!isArticle()" v-on:click="createArticle()">Créer</button>
            <button class="btn btn-success btn-lg btn-block" v-if="isArticle()" v-on:click="updateArticle()">Modifier</button>
            <button class="btn btn-danger btn-lg btn-block" v-if="isArticle()" v-on:click="deleteArticle()">Supprimer</button>
          </div>
        </form>
      </div>
  </template>
    
  <script>
  import { axiosClient } from '@/apiClient';
  import { toast } from 'vue3-toastify';

  export default {
    name: 'EditDeficiencyFormPage',
    props: {
      title: String,
      pathology: String,
      symptoms: String,
      contributions: String,
      procedures: String,
      additional: String,
      related: String
    },
    data() {
      return {
        mode: 'r',
        article: {
          id: '',
          title: '',
          pathology: '',
          symptoms: '',
          contributions: '',
          procedures: '',
          additional: '',
          related: ''
        }
      }
    },
    methods: {
        init() {
          var url = new URL(window.location)
          var id = url.searchParams.get('id')
          const data = this.$data.article
          const methods = this
          if (id != null && id != "") {
            axiosClient.get('/article/get', {params :{"id": id}}
            ).then(function (response) {
              let foundArticle = response.data.data.existingArticle
              
              data.id = foundArticle._id
              data.title = foundArticle.title
              data.pathology = foundArticle.pathology
              data.symptoms = foundArticle.symptoms
              data.contributions = foundArticle.contributions
              data.procedures = foundArticle.procedures
              data.additional = foundArticle.additional
              data.related = foundArticle.related

              if (methods.isArticle()) {
                let obj = document.getElementById('back')
                obj.setAttribute('href', "/formulaire?id=" + data.id)
              }
              }).catch(function (error) {
              console.log(error);
            });
          }
        },
        createArticle() {
          const data = this.$data.article
          let that = this
          axiosClient.post('/article/create', 
            {
              title: data.title,
              pathology: data.pathology,
              symptoms: data.symptoms,
              contributions: data.contributions,
              procedures: data.procedures,
              additional: data.additional,
              related: data.related
            }
            
            ).then(function (response) {
              console.log(response);
              toast.success('Création réussie !');
              that.$router.push('/');
        }).catch(function (error) {
            console.log(error);
            toast.error('Erreur lors de la création.');
        });
        },
        updateArticle() {
          let data = this.$data.article
          axiosClient.post('/article/update', 
            {
              id: data.id,
              title: data.title,
              pathology: data.pathology,
              symptoms: data.symptoms,
              contributions: data.contributions,
              procedures: data.procedures,
              additional: data.additional,
              related: data.related
            }
            
            ).then(function (response) {
              toast.success('Modification réussie !');
              console.log(response);
            }).catch(function (error) {
              console.log(error);
              toast.error('Erreur lors de la modification.');
            });
        },
        deleteArticle(){
          const data = this.$data.article
          axiosClient.post('/article/delete', {"id": data.id}
                ).then(function (response) {
                  console.log(response)
                  toast.success('Suppression réussie !');
                }).catch(function (error) {
                    console.log(error)
                    toast.error('Erreur lors de la suppresion.');
                });
        },
        isArticle() {
          let id = this.$data.article.id
          if (id == null) return false
          if (id == '') return false
          return true
        }
      },
      beforeMount: function() {
        this.init()
      },
  }
  </script>
  
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
  
    .txt_field {
      width: 60vw;
    }
  
    .txt_title {
      text-align: center;
    }
  
    .cud_articles {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      margin: 20px;
    }
    .cud_articles button {
      /* flex: auto; */
      margin: 10px;
    }
  </style>
    