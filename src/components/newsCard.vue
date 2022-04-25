<script>

import { ref, reactive } from 'vue'


export default {
  name: 'NewsCard',
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
      default: "青海的草原，一眼看不完；喜瑪拉雅山，峰峰相連到天邊。古聖和先賢，在這裡建家園；風吹雨打中，聳立五千年。中華民國！中華民國！經得起考驗，只要黃河長江的水不斷。中華民國！中華民國！千秋萬世，直到永遠。青海的草原，一眼看不完；喜瑪拉雅山，峰峰相連到天邊..."
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
      width="320px"
      color="white"

  
  >
    <v-card width="30vw" height="45px" color="primary" ></v-card>
    <v-card-title class="text-body-1 text-black mt-10 mx-2 font-weight-black">{{title}}</v-card-title>

    
    <v-card-text class="text-black mx-6">
      <div cclass="text-h6 pt-2 pb-1 font-weight-black ">
        <span class="text-black">{{content}}
        </span>
      </div>
    </v-card-text>
    <v-card-actions class="my-8">
      <v-row  class="px-8">
        <v-col md="5">
          <v-btn
            color="grey-lighten-2"
            class="text-black font-weight-black"
            text
            width="100%"
            @click="$emit('mamaCloseMe')"
          >
            關閉視窗
          </v-btn>
        </v-col>
        <v-col md="7">
          <v-btn
            color="primary"
            class="font-weight-black"
            text
            width="100%"
            @click="$router.push('/news')"
          >
            繼續閱讀
          </v-btn>
        </v-col>
      </v-row>
      

      
    </v-card-actions>
  </v-card>

</template>



<style scoped>

 
</style>