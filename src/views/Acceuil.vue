<template>
  <div class="accueil" v-on:scroll="checkScroll()">
    <header>
      <section>
        <h1>Bienvenue sur EducatiOnline</h1>
        <h3>Sommaire du site</h3>
        <nav>
            <a href="#objectif">À propos</a>
            <a href="#ressources">Ressources</a>
            <a href="#collaborations">Collaborations</a>
            <a href="#contact">Contact</a>
            <a href="#confidentialite">RGPD</a>
        </nav>
      </section>
    </header>

    <main>
        <section id="objectif">
            <h2>Objectif</h2>
            <p>Notre site vise à informer et à fournir des ressources pour faciliter l'accès à l'éducation pour les enfants atteints de handicap mentaux. Nous croyons en l'importance de l'inclusion et de l'égalité des chances pour tous les enfants.</p>
        </section>

        <section id="ressources">
            <h2>Fiches</h2>
            <p>Vous pouvez accéder aux fiches d'informations des maladies présentes dans notre base de données. Cette liste n'est malheureusement pas exhaustive, cependant nous nous efforcons de rajouter du contenu.</p>
          </section>

        <section id="collaborations">
            <h2>Collaborations</h2>
            <p>Nous collaborons avec diverses organisations et institutions pour promouvoir l'accès à l'éducation pour tous les enfants, indépendamment de leur handicap.</p>
        </section>

        <section id="contact">
            <h2>Contact</h2>
            <p>N'hésitez pas à nous contacter pour toute question ou suggestion. Vous pouvez nous envoyer un formulaire de contact via la page suivante: <a href="/contact">Contact</a></p>
        </section>

        <section id="confidentialite">
          <h2>Politique de confidentialité</h2>
          <p>Vous pouvez consulter notre page sur la protection des données, si vous voulez vous renseigner sur la collecte et l'utilisation de vos données personnelles, cliquez sur le lien suivant: <a href="/rgpd">RGPD</a></p>
        </section>
    </main>
  </div>
  <img id="returntop" v-on:click="returntop()" alt="image return to top" src="@/assets/logo-return-to-top.png"/>
</template>

<script>
export default {
  name: 'AcceuilPage',

  created () {
    window.addEventListener('scroll', this.checkScroll);
  },
  unmounted () {
    window.removeEventListener('scroll', this.checkScroll);
  },
  methods: {
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
    },

  },
  updated: function() {
    // when page changes
    this.checkScroll()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  text-shadow: 1px 1px 1px black;
  color: #42b983;
}

section {
  padding: 15px;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
  opacity: 0.7;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border: 1px solid #bdbdbd
}

header section {
  padding: 25px;
  background-image: url('@/assets/image-accueil.jpeg');
}

section h1, section h2, section h3, section p {
  color: white;
  text-shadow: 1px 1px 1px black;
  width: 60vw;
}

header nav {
  display: flex;
  flex-direction: column;
  margin: 25px;
}

header nav a {
  font-size: 1.2em;
}

#returntop {
  width: 80px;
  opacity: 0;
  position: fixed;
  right: 10vw;
  bottom: 20vh;
}

#objectif {
  background-image: url('@/assets/image-objectif.jpg');
}

#ressources {
  background-image: url('@/assets/image-fiches.jpg');
}

#collaborations {
  background-image: url('@/assets/image-collaborations.webp');
}

#contact {
  background-image: url('@/assets/image-contact.webp');
}

#confidentialite {
  background-image: url('@/assets/RGPD.jpg');
  background-position: bottom;
}

@media only screen and (max-width: 1980px){
  #returntop {
    right: 2vh;
    bottom: 25vh;
  }
}
</style>
