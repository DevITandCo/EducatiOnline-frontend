<template>
    <div class="faq-template">
        <div class="display-3 mt-5">FAQ</div>
        <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card height="400" color="transparent" flat>
              <br /> <br /> <br /> <br />
              <div class="faq-question">
                <strong>1. Pourriez-vous ajouter une fiche sur ..... s'il-vous-plaît ?</strong>
              </div>
              <div class="faq-answer">
                Bien sûr, merci pour la recommandation, votre demande est en cours de traitement.N'hésitez pas à nous recontacter pour nous poser des questions ou proposer plus d'idées !
              </div>

              <div class="faq-question">
                <strong>2. Quel est l'objectif de ce site web ?</strong>
              </div>

              <div class="faq-answer">
                Un site web conçu pour aider les personnes handicapées, leurs parents et principalement leurs professeurs à accéder à l'éducation en leur fournissant des ressources adaptées à leurs besoins spécifiques.
              </div>

              <br />
              <div class="faq-question">
                <strong>3. Quelles sont les ressources disponibles sur ce site web ?</strong>
              </div>
              <div class="faq-answer">
                Ce site web propose des articles informatifs, des guides pratiques, des outils technologiques, des vidéos explicatives, des tutoriels, des cours en ligne adaptés, et des exercices adaptés à chaques profiles.
              </div>
              
              <br />
              <div class="faq-question">
                <strong>4. Comment puis-je accéder aux ressources de ce site web ?</strong>
              </div>
              <div class="faq-answer">
                Vous pouvez accéder aux ressources en naviguant sur différentes sections du site web, en utilisant des filtres de recherche ou en consultant les différentes catégories disponibles
              </div>

              <br />
              <div class="faq-question">
                <strong>5. Comment puis-je savoir si une ressource est adaptée à mes besoins spécifiques ?</strong>
              </div>
              <div class="faq-answer">
                Le site web fournit des descriptions détaillées des ressources, indiquant leur contenu, leurs objectifs et les types de handicaps pour lesquels elles sont adaptées.
              </div>

              <br />
              <div class="faq-question">
                <strong>6. Existe-t-il des partenariats avec des établissements d'enseignement pour l'accès à l'éducation des personnes handicapées ?</strong>
              </div>
              <div class="faq-answer">
                Oui, le site web peut avoir des partenariats avec des écoles, des universités ou d'autres institutions éducatives pour faciliter l'accessibilité aux programmes d'éducation.
              </div>

              <br />
              <div class="faq-question">
                <strong>7. Comment puis-je contacter l'équipe de support du site web en cas de problème ou de question ?</strong>
              </div>
              <div class="faq-answer">
                Le site web propose une page de formulaire de contact où vous pouvez envoyer un message ou remplir un formulaire pour obtenir de l'aide, poser une question ou faire une recommandation/proposition de correction.
              </div>

              <br />
              <div class="faq-question">
                <strong>8. Comment puis-je contribuer au site web en tant que personne handicapée ou professionnel de l'éducation ?</strong>
              </div>
              <div class="faq-answer">
                Il peut y avoir des possibilités de contribution via des témoignages, des articles invités, des suggestions de ressources, etc...
              </div>

              <br />
              <div class="faq-question">
                <strong>9. Puis-je partager les ressources de ce site web avec d'autres personnes handicapées ?</strong>
              </div>
              <div class="faq-answer">
                Oui, vous pouvez partager les ressources avec d'autres personnes handicapées en utilisant les fonctionnalités de partage sur les réseaux sociaux ou en leur envoyant directement des liens vers les ressources.
              </div>

              <br />
              <div class="faq-question">
                <strong>10. Est-ce que l'accès aux ressources sur ce site web est gratuit ?</strong>
              </div>
              <div class="faq-answer">
                Cela dépend du site web spécifique, mais de nombreux sites web d'assistance à l'accès à l'éducation pour les personnes handicapées proposent des ressources gratuitement. Cependant, certaines ressources plus spécialisées peuvent être payantes.
              </div>

              <br />
              <div class="faq-question">
                <strong>11. Est-ce que ce site web propose également des conseils sur les droits des personnes handicapées dans l'éducation ?</strong>
              </div>
              <div class="faq-answer">
                Oui, notre site fournit des informations sur les droits des personnes handicapées dans le domaine de l'éducation, y compris les lois et les réglementations en vigueur.
              </div>

              <br /><br /><br />
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
</template>


<style>
    .faq-template{
    display: flex;
    align-items: left;
    flex-direction: column; 
    }

    .display-3 {
        text-align: center;
        text-decoration: underline;
    }

    .faq-question {
        text-align: left;
        font-size: 20px;
        margin-left: 30px;
        margin-bottom: 2px; /* Add some spacing between questions */
        color: #0375e3;
    }

    .faq-answer {
        text-align: left;
        font-size: 20px;
        margin-left: 15px;
        margin-bottom: 30px; /* Add some spacing between answers */
    }
</style>