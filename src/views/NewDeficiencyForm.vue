
<template>
    <div class="deficiency">
      <a id="back">Back to article</a>
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
          <p><button v-on:click="create()">Create</button></p>
          <p><button v-on:click="update()">Update</button></p>
        </form>
      </div>
  </template>
    
  <script>

  import { axiosClient } from '@/apiClient';
  
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
          if (id != null) {
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
              let obj = document.getElementById('back')
              obj.setAttribute('href', "/formulaire?id=" + data.id)
            }).catch(function (error) {
              console.log(error);
            });
          }
        },
        create() {
          const data = this.$data.article
          axiosClient.post('/article/create', 
            {
              title: data.title,
              pathology: data.pathology,
              symptomes: data.symptomes,
              contributions: data.contributions,
              procedures: data.procedures,
              additional: data.additional,
              related: data.related
            }
            
            ).then(function (response) {
              console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
        },
        update() {
          let data = this.$data.article
          axiosClient.post('/article/update', 
            {
              id: data.id,
              title: data.title,
              pathology: data.pathology,
              symptomes: data.symptomes,
              contributions: data.contributions,
              procedures: data.procedures,
              additional: data.additional,
              related: data.related
            }
            
            ).then(function (response) {
              console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
        }
      },
      beforeMount: function() {
        // use is when page changes
        this.init()
      },
      // updated: function() {
      //   // use it when only parameter changes
      //   this.init()
      // },
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
    a {
      color: #42b983;
    }
  
    .txt_field {
      width: 60vw;
      /* border: none; */
      /* outline: none; */
      resize: none;
      /* overflow: hidden; */
      /* min-height: 50px;
      max-height: 20vh; */
    }
  
    .txt_title {
      text-align: center;
      /* width: 10vw; */
    }
  
    .txt_pathology {
      /* text-align: center; */
      /* width: 10vw; */
    }
  </style>
    