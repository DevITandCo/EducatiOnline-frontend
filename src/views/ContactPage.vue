<template>
  <div class="deficiency">
    <form @submit.prevent="submitForm">
      <br/>
      <h1>Nouveau formulaire de contact</h1>

      <h4>E-mail</h4>
      <input type="email"
        contentEditable="true"
        class="txt_field txt_title"
        id="txt_title"
        v-model="form.author"
      >

      <h4>Objet</h4>
      <textarea v-on:change="resize()"
        contentEditable="true"
        class="txt_field txt_title"
        id="txt_title"
        v-model="form.category"
      >
      </textarea>

      <h4>Contenu</h4>
      <textarea v-on:change="resize()"
        contentEditable="true"
        class="txt_field txt_title"
        id="txt_title"
        v-model="form.content"
      >
      </textarea>

        <div class="cud_articles">
          <h4><button v-on:click="createForm()" class="btn btn-primary btn-lg btn-block">Envoyer</button></h4>
        </div>
      </form>
    </div>
</template>

    
  <script>
  import { axiosClient } from '@/apiClient';
  import { toast } from 'vue3-toastify';

  export default {
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
        resize() {
          let objs = document.getElementsByTagName('textarea')
          for (let j in objs) {
            let that = objs[j]
            if (that.style != undefined) {
              that.style.height = 'auto';
              that.style.height = that.scrollHeight + 'px';
            }
          }
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
      updated: function() {
        this.resize()
      },
  }
  </script>
  
  <style scoped>
    h1 {
      text-align: center;
      text-decoration: underline;
      font-weight: 700;
      font-size: 34px; /* Adjust the font size as needed */
      margin-bottom: 10px; /* Add some spacing below the title */
    }

    h3 {
      margin: 40px 0 0;
    }

    h4 {
      margin: 40px 0 0;
      font-weight: 700;
      font-style: italic;
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
      margin-bottom: 20px;
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
      border-radius: 20px;
      padding: 10px;
    }

    input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ced4da;
      border-radius: 4px;
    }
    textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid #ced4da;
      border-radius: 4px;
    }
    
  </style>
    