    <template>
      <div class="deficiency">
      <h1>{{article.title}}</h1>
      <li class="nav-item">
        <!-- For now it's disable to prevent missclicks -->
        <!-- <p><button v-on:click="deleteArticle()" :disabled="true">Supprimer l'article</button></p>  -->
        <a id="edit">Edit article</a>
      </li>
      <h3>Pathologies</h3>
      <p>{{ article.pathology }}</p>
      <h3>Symptomes</h3>
      <p>{{ article.symptoms }}</p>
      <h3>Contributions</h3>
      <p>{{ article.contributions }}</p>
      <h3>Procédures</h3>
      <p>{{ article.procedures }}</p>
      <h3>En savoir plus</h3>
      <p>{{ article.additional }}</p>
      <h3>Fiches liées</h3>
      <p>{{ article.related }}</p>
    </div>
  </template>
    
  <script>
  import { axiosClient } from '@/apiClient';

  
  export default {
    name: 'EditDeficiencyFormPage',
    props: {
      id: String,
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
          const article = this.$data.article
          if (id != null) {
            axiosClient.get('http://localhost:3000/v1/article/get', {params :{"id": id}}
                ).then(function (response) {
                  let foundArticle = response.data.data.existingArticle
                  article.id = foundArticle._id
                  article.title = foundArticle.title
                  article.pathology = foundArticle.pathology
                  article.symptoms = foundArticle.symptoms
                  article.contributions = foundArticle.contributions
                  article.procedures = foundArticle.procedures
                  article.additional = foundArticle.additional
                  article.related = foundArticle.related

                  let obj = document.getElementById('edit')
                  obj.setAttribute('href', "/edit?id=" + article.id)
                }).catch(function (error) {
                    console.log(error);
                });
          }
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

    .nav-item {
      margin: 0 15px; /* Adjusted for a balanced look */
    }
  </style>
    