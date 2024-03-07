
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
        <div class="deficiency">
          <router-link :to="'/formulaire?id=' + article.id" id="back">Retournez à l'article</router-link>
          <form @submit.prevent="submitForm">
            <h1>Titre</h1>
            <textarea
              contentEditable="true"
              class="txt_field txt_title"
              id="txt_title"
              v-model="article.title"
              >
            </textarea>
            <h3>Pathologie</h3>
            <textarea
              id="pathology"
              contentEditable="true"
              class="txt_field txt_pathology"
              v-on:click="resize()"
              v-model="article.pathology"
              
            ></textarea>
            <h3>Symptomes</h3>
            <textarea
              id="symptoms"
              contentEditable="true"
              class="txt_field"
              v-on:change="resize()"
              v-model="article.symptoms"
            ></textarea>
            <h3>Contributions</h3>
            <textarea
              id="contributions"
              contentEditable="true"
              class="txt_field"
              v-on:change="resize()"
              v-model="article.contributions"
            ></textarea>
            <h3>Procédures</h3>
            <textarea
              id="procedures"
              contentEditable="true"
              class="txt_field"
              v-on:change="resize()"
              v-model="article.procedures"
              ></textarea>
    
            <div class="link-instructions-container">
              <div class="link-instructions">
                <h3>Insérer un lien URL</h3>
                <p>Pour insérer un lien URL, veuillez rédiger ce dernier sous le format suivant:</p>
                <p><b>Syntaxe:</b> Nom|URL</p>
                <p><b>Exemple:</b> Google|https://www.google.com</p>
              </div>
            </div>

            <h3>En savoir plus</h3>
            <textarea
              id="additional"
              contentEditable="true"
              class="txt_field"
              v-on:change="resize()"
              v-model="article.additional"
            ></textarea>
            <h3>Fiches liées</h3>
            <textarea
              id="related"
              contentEditable="true"
              class="txt_field"
              v-on:update="resize()"
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
              let ref = this
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
                  let id = response.data.data.newArticle._id
                  ref.$router.push('/formulaire?id=' + id);
            }).catch(function (error) {
                console.log(error);
                toast.error('Erreur lors de la création.');
            });
            },
            updateArticle() {
              let ref = this
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
                  // let id = response.data.data.newArticle._id
                  ref.$router.push('/formulaire?id=' + data.id);
                }).catch(function (error) {
                  console.log(error);
                  toast.error('Erreur lors de la modification.');
                });
            },
            deleteArticle(){
              let ref = this
              const data = this.$data.article
              axiosClient.post('/article/delete', {"id": data.id}
                    ).then(function (response) {
                      console.log(response)
                      toast.success('Suppression réussie !');
                      ref.$router.push('/');
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
    
            }
          },
          beforeMount: function() {
            this.init()
          },
          updated: function() {
            this.resize()
          }
      }
      </script>
      
      <style scoped>
        h1{
          font-style: italic;
          font-weight: 700;
        }
        h3 {
          margin: 40px 0 0;
          font-style: italic;
          font-weight: 700;
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
        .link-instructions-container {
          display: flex;
          justify-content: center;
          margin-top: 30px;
          margin-bottom: 10px;
        }
        .link-instructions {
          border: 1px solid #ccc;
          padding: 20px;
          border-radius: 5px;
          background-color: #f9f9f9;
        }

        .link-instructions h3 {
          margin-top: 0;
          font-style: italic;
          font-weight: 700;
        }
      </style>
        