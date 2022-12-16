<template>
  <v-app >
    <v-navigation-drawer app v-if="false">
      <!-- -->
    </v-navigation-drawer>

    <v-app-bar app class="  d-flex align-center"   style="background: rgba(62, 197, 149, 0.9);backdrop-filter: blur(8px);">
      <v-container>
      LIVE RESUME
      </v-container>
      <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main  class="pa-6 fill-height">

      <!-- Provides the application the proper gutter -->
      <v-container class="pt-12 fill-height" fluid style="width:1000px;background:#F0FFF0">

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app style="position:sticky;bottom:0;background: rgba(62, 197, 149, 0.8);backdrop-filter: blur(3px);">
      <v-col
        class="text-center pt-5"
        cols="12"
      >
      this website created with Vue 3, <a class="text-green-darken-4  " target="_blank" href="https://next.vuetifyjs.com/en/">Vuetify 3 Beta</a><i><v-icon size="small"
      class="ml-1"
     >
      mdi-vuetify
    </v-icon></i>,
       <a class="text-green-darken-4  " target="_blank" href="https://vitejs.dev">Vite</a><i><v-icon size="small"
      class="ml-1"
     >
      mdi-flash
    </v-icon></i> by <a class="text-decoration-none" href="https://github.com/tiger93064/live_resume-master" target="_blank">🐯</a>
      </v-col>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default { 
  name: 'App'
}
</script>

<style  lang="scss" >
@import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500&display=swap');
$font-family: 'Maven Pro', sans-serif;
 .v-application {
    .headline,
    [class*='display-'],
    [class*='text-'] {
      color: #36405a;
      font-family: $font-family, sans-serif !important;
    }
    font-family: $font-family, sans-serif !important;
  }
 
 .h_cus{
      /* RWTW */

    position: static;
    width: 46px;
    height: 25px;
    left: 0px;
    top: 0px;

    font-family:'Saira Condensed';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 25px;
    /* identical to box height, or 125% */
    text-align: center;

    color: #FFFFFF;


    /* Inside Auto Layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 0px;

 }
 .h1_cus{
    /* Ride like the wind! */

    position: static;
    width: 143px;
    height: 20px;
    left: 0px;
    top: 25px;

    font-family: 'Saira Condensed';
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    /* identical to box height, or 167% */
    letter-spacing: 0.3em;

    color: #FFFFFF;


    /* Inside Auto Layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 0px;


 }

 .bar_cus{
   background: #3EB595 !important
 }
 .footer_cus{
   background: #3EB595 !important
 }

 .tab_cus{
   /* 最新快訊 */


  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  /* identical to box height, or 250% */
  text-align: center;

  

 }
 .div_cus{
   background:white;
   height: 24px;
   margin: auto 0;
 }
</style>
