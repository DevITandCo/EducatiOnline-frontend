
<template>
    <div class="deficiency">
      <form @submit.prevent="submitForm">
        <br/>
        <h1>Nouveau formulaire de contact</h1>
        <h3>Categorie</h3>
        <textarea
          contentEditable="true"
          class="txt_field txt_title"
          id="txt_title"

          v-model="form.category"
        >
        </textarea>

        <h3>E-mail</h3>
        <input type="email"
          contentEditable="true"
          class="txt_field txt_title"
          id="txt_title"

          v-model="form.author"
        >

        <h3>Contenu</h3>
        <textarea
          contentEditable="true"
          class="txt_field txt_title"
          id="txt_title"

          v-model="form.content"
        >
        </textarea>

          <div class="cud_articles">
            <h4><button v-on:click="createForm()">Create</button></h4>
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
        form: {
          category: '',
          author: '',
          content: ''
        }
      }
    },
    methods: {
        init() {
          
        },
        createForm() {
          const data = this.$data.form
          axiosClient.post('/contact/create', 
            {
              category: data.category,
              author: data.author,
              content: data.content
            }
            
            ).then(function (response) {
              console.log(response);
              toast.success('Création réussie !');
        }).catch(function (error) {
            console.log(error);
            toast.error('Erreur lors de la création.');
        });
        },
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
    a {
      color: #42b983;
    }
  
    .txt_field {
      width: 60vw;
      /* border: none; */
      /* outline: none; */
      /* resize: none; */
      /* overflow: hidden; */
      /* min-height: 50px;
      max-height: 20vh; */
    }
  
    .txt_title {
      text-align: center;
      /* width: 10vw; */
    }
  
    .cud_articles {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      margin: 20px;
    }
    .cud_articles a {
      flex: auto;
    }
  </style>
    