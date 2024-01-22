<!-- views/NotFound.vue -->

<template>
    <div class="NotFound">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card height="400" color="transparent" flat>
              <div class="display-3 mt-5">404 Page Not Found</div>
              <div class="grey--text lighten-5">
                La page à laquelle vous essayez d'accéder n'a jamais existé dans cette réalité,
                ou a migré vers un univers parallèle.
              </div>
              <div class="paragraph-text mt-2">
                <br />
                <br />Essayez de revenir à la page d'accueil et de répéter votre action. Ou bien,
                contactez le service d'assistance pour obtenir de l'aide.
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </template>
  
  <style>
    .paragraph-text {
      font-size: 18px;
    }
  </style>
  