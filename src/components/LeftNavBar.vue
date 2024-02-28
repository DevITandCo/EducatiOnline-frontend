<template>
    <div class="left-nav-bar">
      <ul class="nav flex-column">
        <li class="nav-item"><a class="nav-link" href="#title">Titre</a></li>
        <li class="nav-item"><a class="nav-link" href="#linkPathologie">Pathologies</a></li>
        <li class="nav-item"><a class="nav-link" href="#linkSymptomes">Symptômes</a></li>
        <li class="nav-item"><a class="nav-link" href="#linkContributions">Contributions</a></li>
        <li class="nav-item"><a class="nav-link" href="#linkProcedures">Procédures</a></li>
        <li class="nav-item"><a class="nav-link" href="#linkAdditional">En savoir plus</a></li>
        <li class="nav-item"><a class="nav-link" href="#linkRelated">Fiches liées</a></li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LeftNavBar',
    methods: {
      isAdmin() {
        // Ajoutez ici la logique pour vérifier si l'utilisateur est un administrateur
        return true;
      }
    }
  }
  </script>
  
  <style scoped>
  
  .left-nav-bar {
    flex: 1;
    width: 100vw;
    background-color: #f2f2f2;
    padding: 20px;
  }

  @media only screen and (min-width: 1200px) {
    .left-nav-bar {
      width: 200px; 
      /* height: 100%;  */
      overflow-y: auto;
      position : sticky;
      top : 0;
      height: 100vh;
    }
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  a {
    text-decoration: none;
    color: #333;
  }
  
  a:hover {
    color: #555;
  }
  .nav-link {
  color: #333;
}

.nav-link:hover {
  color: #555;
}
  </style>
  