<script>

import { ref, reactive } from 'vue'


export default {
  name: 'RouteCard',
  props:{
    title: {
      type: String,
      // Object or array defaults must be returned from
      // a factory function
      default: "TITLE TEXT"
    },
    content: {
      type: String,
      // Object or array defaults must be returned from
      // a factory function
      default: "青海的草原，一眼看不完；喜瑪拉雅山 ；喜瑪拉雅山，峰峰相連到天邊..."
    },
    imgUrl: {
      type: String,
      // Object or array defaults must be returned from
      // a factory function
      default: "https://source.unsplash.com/uYoVf9I6ANI"
    }

  },
  components: {
  
  },                                             
  setup(){
    const show = ref(true)
    const model = ref(null)

   

    return { show, model }
  }                                               //*
}
</script>

<template>
   <v-card
      color="white"
      class="pa-2"
  >
    <v-img
      height="150"
      cover
      :src="imgUrl"
    >
      <v-card
        class="mx-2 trans_card text-justify"
        width="90%"
        style="position:absolute;bottom:0">
        {{title}}
      </v-card>
    </v-img>
    <!-- <v-card-title class="text-body-1 text-black mt-10 mx-2 ">{{title}}</v-card-title> -->

    
    <v-card-text >
      <div cclass="text-body-2 ">
        <span class="text-black ">{{content}}
        </span>
      </div>
    </v-card-text>
  
  </v-card>

</template>



<style scoped>
.trans_card{
   background: rgba(255, 255, 255, 0.1) !important;
   backdrop-filter: blur(6px) !important ;
   -webkit-backdrop-filter: blur(3px) !important ;
 }

 
 
</style>