<template>
    <div class="NotFound">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card height="400" color="transparent" flat>
              <div class="display-3 mt-5">403 Unauthorized</div>
              <div class="grey--text lighten-5">
                Vous n'avez pas les permissions requises pour accéder à cette page.
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
  