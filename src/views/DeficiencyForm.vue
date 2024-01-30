    <div class="deficiency">
      <h1>{{article.title}}</h1>
      <li class="nav-item">
        <!--<router-link class="nav-link" to="/delete?id={article.id}">Supprimer l'article<span class="visually-hidden"></span></router-link>-->
        <p><button v-on:click="deleteArticle()">Supprimer l'article</button></p> 
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

                }).catch(function (error) {
                    console.log(error);
                });
          }
        },
        update() {
          console.log('submit')
          console.log(this.$data.article.id)
          console.log(this.$data.article.title)
          console.log(this.$data.article.pathologie)
          console.log(this.$data.article.symptoms)
        },
        deleteArticle(){
          axiosClient.post('/article/delete', {"id": this.$data.article.id}
                ).then(function (response) {
                // TODO toast success
                console.log(response)
                }).catch(function (error) {
                    console.log(error)
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
  
    .txt_titre {
      text-align: center;
      /* width: 10vw; */
    }
  
    .txt_pathologie {
      /* text-align: center; */
      /* width: 10vw; */
    }

    .nav-item {
      margin: 0 15px; /* Adjusted for a balanced look */
    }

    .nav-link {
      color: #0375e3; /* Match the footer's text color */
      transition: color 0.2s, text-decoration 0.2s;
      text-decoration: none; 
    }    
  </style>
    