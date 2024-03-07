<script setup>
    import LeftNavBar from '@/components/LeftNavBar.vue';
</script>

<template>
  <div class="mbappe" v-on:scroll="checkScroll()">
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
    </div>
  </div>
  <img id="returntop" v-on:click="returntop()" alt="image return to top" src="@/assets/logo-return-to-top.png"/>
</template>

<script>
import { axiosClient } from '@/apiClient';

import { computed } from "vue";
import { useStore } from 'vuex';

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
created () {
  window.addEventListener('scroll', this.checkScroll);
},
unmounted () {
  window.removeEventListener('scroll', this.checkScroll);
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
        const store = useStore();
        const isAdmin = computed(() => store.state.isAdmin);
        return isAdmin.value == 1
    },
    returntop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    },
    checkScroll() {
      const returnButton = document.getElementById('returntop')
      const scrollValue = window.scrollY
      returnButton.style.opacity = scrollValue > 200 ? 0.8: 0;
    }
  },
  beforeMount: function() {
    // when page changes
    this.init()
  },
  updated: function() {
    // when only url parameter changes
    this.init()
  },
}
</script>

<style scoped>

.deficiency {
  flex : 7;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.deficiency p{
  width: 94%;
}
.mbappe {
  display: flex;
  flex-direction: column;
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

#returntop {
  width: 80px;
  opacity: 0;
  position: fixed;
  right: 10vw;
  bottom: 25vh;
}

@media only screen and (min-width: 1980px){
  .deficiency {
    flex : 13;
  }
}

@media only screen and (min-width: 1200px) {
  .mbappe {
    flex-direction: row;
  }
  #returntop{
    visibility: hidden;
  }
}
</style>