<template>
  <div class="deficiency">
    <h1>{{article.title}}</h1>
    <h3>Pathologie</h3>
    <p>{{ article.description }}</p>
    <h3>Symptomes</h3>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
      </ul>
    <h3>Signes d'alerte</h3>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
      </ul>
    <h3>Que faire ?</h3>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
      </ul>
    <h3>Ne pas faire</h3>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
      </ul>
    <h3>Procédures</h3>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
      </ul>
      <h3>En savoir plus</h3>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
      </ul>
  </div>
</template>
  
<script>
import { axiosClient } from '@/apiClient';

export default {
  name: 'EditDeficiencyFormPage',
  props: {
    id: String,
    title: String,
    description: String,
    content: String
  },
  data() {
    return {
      mode: 'r',
      article: {
        id: '',
        title: '',
        description: '',
        content: ''
      }
    }
  },
  methods: {
      init() {
        var url = new URL(window.location)
        var id = url.searchParams.get('id')
        const article = this.$data.article
        if (id != null) {
        let res = axiosClient.get('http://localhost:3000/v1/article/get', {params :{"id": id}}
            ).then(function (response) {
              res =  response;
              let foundArticle = res.data.data.existingArticle
              article.id = foundArticle._id
              article.title = foundArticle.title
              article.description = foundArticle.description
              article.content = foundArticle.content
            }).catch(function (error) {
                res = error;
            });
        }
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
    resize: function () {
      console.log('here')
      this.style.height = "auto";
      this.style.height = this.scrollHeight + 10 + "px";
    }
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
</style>
  