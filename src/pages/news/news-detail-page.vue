<script>

import { ref, reactive, watch } from 'vue'
import _ from 'lodash'

export default {
  name: 'News',
  components: {
    
  
  },                                             
  setup(){
    const show = ref(true)
    const pageNow = ref(null)
    const items = reactive({  
      data: [
        {
          title : '騎進漁光島活動，把youbike騎下海折扣50元',
          content : 'Cat Photos',
          type: '活動消息'

        },
        {
          title : '東沙群島新站點共100處啟用公告，站點搶先...',
          content : 'Cat Photos',
          type: '活動消息'

        },
        {
          title : '治安整治，台中站點附公用手槍使用說明',
          content : 'Cat Photos',
          type: '活動消息'

        },
        {
          title : '東沙群島新站點共100處啟用公告，站點搶先...',
          content : 'Cat Photos',
          type: '營運資訊'

        },
        {
          title : '小琉球新站點共0.5處啟用公告，站點搶先...',
          content : 'Cat Photos',
          type: '營運資訊'

        },
        {
          title : '騎進漁光島活動，把youbike騎下海折扣50元',
          content : 'Cat Photos',
          type: '營運資訊'

        },
        {
          title : '東沙群島新站點共100處啟用公告，站點搶先...',
          content : 'Cat Photos',
          type: '站點公告'

        },
        {
          title : '治安整治，台中站點附公用手槍使用說明',
          content : 'Cat Photos',
          type: '站點公告'

        },
        {
          title : '東沙群島新站點共100處啟用公告，站點搶先...',
          content : 'Cat Photos',
          type: '站點公告'

        },
        {
          title : '小琉球新站點共0.5處啟用公告，站點搶先...',
          content : 'Cat Photos',
          type: '站點公告'

        }
      ]
    })


    watch(
      pageNow, (value) => {
        console.log(value)
        items.data = _.shuffle(items.data)
      }
    )
      

    return { show, items, pageNow }
  }                                               //*
}
</script>

<template>

  <v-row justify="center" class="mt-10"> 
    <svg width="314" height="64" viewBox="0 0 314 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_94_437)">
      <path d="M4.5 0H309.5V56H4.5V0Z" fill="white"/>
      <path d="M104.632 20.24H115.744V25.976H117.976V18.632H102.496V25.976H104.632V20.24ZM105.544 25.328H114.688V23.936H105.544V25.328ZM105.544 21.392V22.784H114.664V21.392H105.544ZM117.424 31.736C116.896 32.816 116.176 33.824 115.312 34.664C114.448 33.8 113.776 32.792 113.248 31.736H117.424ZM103.624 34.664H107.56V35.816C106.216 35.984 104.872 36.128 103.624 36.248V34.664ZM107.56 28.736V30.08H103.624V28.736H107.56ZM103.624 31.688H107.56V33.032H103.624V31.688ZM118.744 29.912L118.384 29.984H110.464V31.736H111.856L111.28 31.904C111.904 33.416 112.768 34.784 113.824 35.936C112.576 36.872 111.136 37.592 109.648 38.024V28.736H120.688V26.936H99.664V28.736H101.632V36.44C100.84 36.512 100.096 36.584 99.448 36.632L99.64 38.6C101.824 38.336 104.68 38 107.56 37.688V39.896H109.648V38.096C110.104 38.528 110.584 39.296 110.824 39.824C112.456 39.224 113.992 38.432 115.36 37.376C116.68 38.384 118.24 39.2 119.968 39.704C120.28 39.176 120.832 38.336 121.312 37.928C119.632 37.544 118.168 36.872 116.896 35.984C118.312 34.52 119.44 32.696 120.112 30.464L118.744 29.912ZM141.472 20.312H137.848C137.536 19.52 137.056 18.512 136.648 17.696L134.44 18.272C134.728 18.872 135.04 19.64 135.304 20.312H130.912V22.16H141.472V20.312ZM132.592 32.648C132.088 34.184 131.272 35.816 130.384 36.944C130.84 37.184 131.56 37.712 131.92 38C132.784 36.776 133.744 34.856 134.344 33.176L132.592 32.648ZM141.52 31.616V29.72H137.44V27.536H141.856V25.664H139.048C139.456 24.776 139.864 23.672 140.272 22.616L138.208 22.184C137.968 23.192 137.464 24.656 137.032 25.664H133.24L135.016 25.16C134.896 24.368 134.512 23.144 134.128 22.208L132.304 22.664C132.712 23.6 133.048 24.848 133.144 25.664H130.528V27.536H135.28V29.72H130.672V31.616H135.28V39.752H137.44V31.616H141.52ZM138.28 33.272C139 34.424 139.816 35.984 140.2 36.992L141.76 36.056C141.376 35.096 140.56 33.584 139.768 32.456L138.28 33.272ZM152.392 25.832H144.952V21.632C147.4 21.2 149.992 20.624 151.96 19.856L150.208 18.224C148.48 18.968 145.528 19.712 142.864 20.168V28.472C142.864 31.616 142.696 35.672 140.8 38.456C141.256 38.696 142.168 39.368 142.504 39.776C144.64 36.728 144.952 31.928 144.952 28.472V27.896H147.76V39.776H149.944V27.896H152.392V25.832ZM162.976 29.24C163.576 27.488 164.008 24.704 164.128 22.736L162.496 22.496C162.328 24.416 161.896 27.056 161.296 28.664L162.976 29.24ZM169.936 26.144C169.672 24.992 168.856 23.12 168.112 21.728L166.792 22.28V17.864H164.608V39.872H166.792V22.88C167.44 24.248 168.064 25.88 168.304 26.936L169.936 26.144ZM176.632 32.072C178.288 34.544 180.472 37.856 181.48 39.8L183.52 38.648C182.392 36.728 180.16 33.512 178.504 31.16L176.632 32.072ZM176.56 23.648H179.608V28.64H176.44C176.536 27.728 176.56 26.84 176.56 25.976V23.648ZM181.792 28.64V21.584H176.56V17.864H174.304V21.584H169.888V23.648H174.304V25.976C174.304 26.816 174.28 27.728 174.208 28.64H168.664V30.752H173.896C173.296 33.56 171.736 36.296 167.776 38.264C168.304 38.672 169.048 39.536 169.36 39.992C173.704 37.544 175.48 34.16 176.152 30.752H183.592V28.64H181.792ZM201.592 21.872H197.104L198.688 20.888C198.352 20.024 197.632 18.752 197.032 17.744L195.424 18.632C196.024 19.616 196.696 20.984 197.056 21.872H192.976V23.648H201.592V21.872ZM200.728 26.816V25.064H193.936V26.816H200.728ZM198.976 33.272V36.704H195.688V33.272H198.976ZM200.752 31.472H193.936V39.584H195.688V38.504H200.752V31.472ZM193.936 29.96H200.752V28.232H193.936V29.96ZM201.88 19.16V21.272H204.568V28.04H201.592V30.104H204.568V39.896H206.656V30.104H209.464V28.04H206.656V21.272H210.208C210.184 30.68 210.136 38.72 212.464 39.536C213.712 40.064 214.696 39.296 214.984 35.888C214.648 35.552 214.096 34.736 213.76 34.184C213.688 35.792 213.52 37.352 213.376 37.304C212.248 36.968 212.272 28.04 212.44 19.16H201.88Z" fill="#707070"/>
      <path d="M4.5 0V-2H2.5V0H4.5ZM309.5 0H311.5V-2H309.5V0ZM309.5 56V58H311.5V56H309.5ZM4.5 56H2.5V58H4.5V56ZM4.5 2H309.5V-2H4.5V2ZM307.5 0V56H311.5V0H307.5ZM309.5 54H4.5V58H309.5V54ZM6.5 56V0H2.5V56H6.5Z" fill="#707070"/>
      </g>
      <defs>
      <filter id="filter0_d_94_437" x="0.5" y="0" width="313" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_94_437"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_94_437" result="shape"/>
      </filter>
      </defs>
      </svg>
  </v-row>
  <v-row justify="center" class="mt-10"> 
    <v-card class="trans_card" @click=";"   width="880px"  elevation="2">
      <div v-for="(i, index) in items.data" :key="i" >
        <v-list-item> 
          <v-list-item-icon>
            <v-row>
              <v-divider  class="div_cus2 ml-4 mr-4" vertical thickness="8px"></v-divider>
              <v-card color="primary" class="d-inline-block  ml-4" elevation="0"   width="100px" height="4vh" @click=";" v-if="i.type === '活動消息'">
                <div class="text-body-1 pt-2 font-weight-bold ml-4"><span class="text-yellow">{{i.type}}</span></div>
              </v-card>
              <v-card color="white" class="d-inline-block  ml-4" elevation="2"   width="100px" height="4vh" @click=";" v-else-if="i.type === '營運資訊'">
                <div class="text-body-1 pt-2 font-weight-bold ml-4"><span class="text-grey-darken-2">{{i.type}}</span></div>
              </v-card>
              <v-card color="yellow" class="d-inline-block  ml-4" elevation="0"   width="100px" height="4vh" @click=";" v-else>
                <div class="text-body-1 pt-2 font-weight-bold ml-4"><span class="text-grey-darken-2">{{i.type}}</span></div>
              </v-card>
            </v-row>
          </v-list-item-icon>
          <v-list-item-content class="ml-8">
            <div  class="text-h6 pt-2 pb-1 font-weight-black text-truncate text-grey-darken-2" style="max-width: 700px;">{{i.title}} </div>
          </v-list-item-content>
          <v-spacer></v-spacer>
          <v-list-item-action > 
            <div  class="text-h6 pt-2 pb-1  font-weight-black text-truncate text-grey-darken-2" style="max-width: 200px;"><span class="text-grey-darken-2">- 2021/11/17</span> </div>
          </v-list-item-action>
          
        </v-list-item>
        <v-divider class="ml-4" thickness="5px" v-if="index!=9" style="margin-right:20vw"></v-divider>
      </div>
    </v-card>
      
  </v-row>
  <v-row justify="center" class="mt-10"> 
    <v-pagination
      v-model="pageNow"
      color="error"
      :length="15"
      :total-visible="5"
    
    ></v-pagination>
  </v-row>
</template>
<style lang="scss" scoped>
   .trans_card{
   background: rgba(255, 255, 255, 0.7) !important;
   backdrop-filter: blur(3px) !important ;
   -webkit-backdrop-filter: blur(3px) !important ;
 }
 .div_cus2{
   background: #3EB595;
   height: 36px;
   margin: auto 0;
 }

</style>

