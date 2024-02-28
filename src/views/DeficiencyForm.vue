<script setup>
    import LeftNavBar from '@/components/LeftNavBar.vue';
</script>

<template>
  <div class="mbappe">
    <LeftNavBar />
      <div class="deficiency">
        <router-link v-if="isAdmin()" :to="'/edit?id=' + article.id" id="edit">Modifier l'article</router-link>
      <!-- button -->
      <h1 id="title">{{ article.title }}</h1>
      <h3 id="linkPathologie">Pathologies</h3>
      <p class="input" id="pathology"></p>
      <h3 id="linkSymptomes">Symptomes</h3>
      <p class="input" id="symptoms"></p>
      <h3 id="linkContributions">Contributions</h3>
      <p class="input" id="contributions"></p>
      <h3 id="linkProcedures">Procédures</h3>
      <p class="input" id="procedures"></p>
      <h3 id="linkAdditional">En savoir plus</h3>
      <p class="input" id="additional"></p>
      <h3 id="linkRelated">Fiches liées</h3>
      <p class="input" id="related"></p>
      <!-- <p v-for="(links) in getAdditionalLinks()" :key="links.name">
        <a target="_blank" :href='"//" + links.url'>{{ links.name }}</a></p>
      <h3>Fiches liées</h3>
      <p v-for="(links) in getRelatedLinks()" :key="links.name">
        <router-link :to='links.url'>{{ links.name }}
        </router-link></p> -->
    </div>
  </div>
</template>

<script>
import { axiosClient } from '@/apiClient';

export default {
name: 'EditDeficiencyFormPage',
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
      let methods = this
      const article = this.$data.article
      if (id != null) {
        axiosClient.get('/article/get', {params :{"id": id}}
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
              
              // console.log(document.getElementsByClassName('input'))
              methods.fillURL()
            }).catch(function (error) {
                console.log(error);
            });
      }
    },
    fillURL() {
      // let fields = [
      //   this.$data.article.pathology,
      //   this.$data.article.symptoms,
      //   this.$data.article.contributions,
      //   this.$data.article.procedures,
      //   this.$data.article.additional,
      //   this.$data.article.related
      // ]
      let data = this.$data.article

      // additional
      let obj = document.getElementById('pathology')
      let art_field = data.pathology
      let lines = []
      // clearing field
      art_field = data.pathology
      obj.innerText = ''
      lines = art_field.split('\n')
      for (let i=0; i<lines.length; i++) {
        if (lines[i].charAt(0) == '$') {
          // get title and url
          let link = lines[i].split('|')
          let title = link[0]
          title = title.substring(2)
          let url = link[1]
          obj.innerHTML += '<a href="'+url+'">'+title+'</a><br>';
        } else {
          obj.innerHTML += '<p>' + lines[i] + '</p>'
        }
      }

      obj = document.getElementById('symptoms')
      art_field = data.symptoms
      // clearing field
      obj.innerText = ''
      lines = art_field.split('\n')
      for (let i=0; i<lines.length; i++) {
        if (lines[i].charAt(0) == '$') {
          // get title and url
          let link = lines[i].split('|')
          let title = link[0]
          title = title.substring(2)
          let url = link[1]
          obj.innerHTML += '<a href="'+url+'">'+title+'</a><br>';
        } else {
          obj.innerHTML += '<p>' + lines[i] + '</p>'
        }
      }

      obj = document.getElementById('contributions')
      art_field = data.contributions
      // clearing field
      obj.innerText = ''
      lines = art_field.split('\n')
      for (let i=0; i<lines.length; i++) {
        if (lines[i].charAt(0) == '$') {
          // get title and url
          let link = lines[i].split('|')
          let title = link[0]
          title = title.substring(2)
          let url = link[1]
          obj.innerHTML += '<a href="'+url+'">'+title+'</a><br>';
        } else {
          obj.innerHTML += '<p>' + lines[i] + '</p>'
        }
      }

      obj = document.getElementById('procedures')
      art_field = data.procedures
      // clearing field
      obj.innerText = ''
      lines = art_field.split('\n')
      for (let i=0; i<lines.length; i++) {
        if (lines[i].charAt(0) == '$') {
          // get title and url
          let link = lines[i].split('|')
          let title = link[0]
          title = title.substring(2)
          let url = link[1]
          obj.innerHTML += '<a href="'+url+'">'+title+'</a><br>';
        } else {
          obj.innerHTML += '<p>' + lines[i] + '</p>'
        }
      }

      obj = document.getElementById('additional')
      art_field = data.additional
      // clearing field
      obj.innerText = ''
      lines = art_field.split('\n')
      for (let i=0; i<lines.length; i++) {
        if (lines[i].charAt(0) == '$') {
          // get title and url
          let link = lines[i].split('|')
          let title = link[0]
          title = title.substring(2)
          let url = link[1]
          obj.innerHTML += '<a href="'+url+'">'+title+'</a><br>';
        } else {
          obj.innerHTML += '<p>' + lines[i] + '</p>'
        }
      }
      
      obj = document.getElementById('related')
      art_field = data.related
      // clearing field
      obj.innerText = ''
      lines = art_field.split('\n')
      for (let i=0; i<lines.length; i++) {
        if (lines[i].charAt(0) == '$') {
          // get title and url
          let link = lines[i].split('|')
          let title = link[0]
          title = title.substring(2)
          let url = link[1]
          obj.innerHTML += '<a href="'+url+'">'+title+'</a><br>';
        } else {
          obj.innerHTML += '<p>' + lines[i] + '</p>'
        }
      }
    },
    isAdmin() {
      //  TODO check rank value
      // get user rank from token
      // or get request with user id
      // axiosClient.get('/auth/rank?id=', {params: {id: user.id}} {
      // })
      return true
    },
    // getAdditionalLinks() {
    //   let related = this.$data.article.additional
    //   let links = related.split('\n')
    //   let results = []
    //   if (links.length > 1) {
    //     for (let i=0; i<links.length; i++) {
    //       let line = links[i].split('|')
    //       let name = line[0]
    //       let url = line[1]
    //       results.push({name: name, url:url})
    //     }
    //   }
    //   return results
    // },
    // getRelatedLinks() {
    //   let related = this.$data.article.related
    //   let links = related.split('\n')
    //   let results = []
    //   if (links.length > 1) {
    //     for (let i=0; i<links.length; i++) {
    //       let line = links[i].split('|')
    //       let name = line[0]
    //       let form_id = line[1].split(['id='])[1]
    //       let url = "/formulaire?id=" + form_id
    //       results.push({name: name, url:url})
    //     }
    //   }
    //   return results
    // }
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

.deficiency {
  flex : 10;
}
.mbappe {
  display: flex;
  flex-direction: column;
}

@media only screen and (min-width: 1024px) {
    .mbappe {
      flex-direction: row;
    }
  }

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