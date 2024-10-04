<script>
import { ref, reactive, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import news from "./news-page.vue";
import route from "./route-page.vue";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import tw from "../three/tw.vue";

SwiperCore.use([Pagination, Autoplay]);

export default {
  name: "Home",
  components: {
    Swiper,
    SwiperSlide,
    news,
    route,
    tw
  },
  setup(props, ctx) {
    onMounted(() => {
      fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQEPPSvJDrAUtweYS_6sSZ_IqQOLjvi68Vi4WqFG3rd1I7q-q8t_BGFD2-eTm3-KSu3aGJDWIVJ6avx/pub?gid=0&single=true&output=csv"
      )
        .then(function (response) {
          return response;
        })
        .then(function (myJson) {
          console.log(myJson);
        });
    });

    const show = ref(true);
    const keywords = ref([0]);
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };

    const data = reactive({
      socialMedia: [
        { name: "GITHUB", url: "https://github.com/tiger93064", icon: "mdi-github" },
        { name: "INSTAGRAM", url: "https://www.instagram.com/guanting.liu_/", icon: "mdi-instagram" },
        { name: "FACEBOOK", url: "https://www.facebook.com/tiger93064", icon: "mdi-facebook" },
      ],
      skills: [
        { name: "Vue.js", icon: "mdi-vuejs", isTech: true },
        { name: "Vuetify", icon: "mdi-vuetify" },
        { name: "element-ui", icon: "" },
        { name: "Node.js", icon: "mdi-nodejs", isTech: true },
        { name: "PWA", icon: "", isTech: true },
        { name: "AWS", icon: "mdi-aws", isTech: true },
        { name: "Puppeteer", icon: "" },
        { name: "Swift", icon: "mdi-language-swift", isTech: true },
        { name: "JavaScript", icon: "mdi-language-javascript", isTech: true },
        { name: "C#", icon: "" },
        { name: "JAVA", icon: "mdi-language-java", isTech: true },
        { name: "SQL Server", icon: "" },
        { name: "Agile", icon: "" },
      ],
      project: [
        {
          date: "DEC 2023 - NOW",
          title: "數位雲補助計畫",
          subTitle: "連鎖總部數據中心",
          isSideProject: false,
          tools: ["Puppeteer", "Vue.js", "AWS", "Lambda"],
          desc: "To build a AI powered system for the restaurant chain, with the ability to analysis multiple platform data and provide the best solution for the owner.",
          features: [
            {
              name: "Crawler Automation",
              isAI: true,
              desc: "  Serializing web crawling process to fully customized user-defined flow, analyzing sign-in process with ASSISTANT by OpenAI for non-tech-user-friendly. Recall the serialized flow for daily crawling. ",
            },
            {
              name: "OpenAI Assistant",
              isAI: true,
              desc: "  Integrated with the OpenAI latest v4 model/ Assistant. By vectoring the existing API docs, Assistant then smartly choose the exact API to call, generate python sandbox for data processing both the code to meet user requirements.　　　　",
            },
            {
              name: "Sheet Automation",
              desc: "  by linking the google service account to the sheet share list, then it becomes fully accessible in nodejs or python environment.",
            },
            
          ],
          links: [
            {
              title: "About",
              url: "https://digiplus.adi.gov.tw/plan_detail_10.html",
            },
            {
              title: "Ref",
              url: "https://hubnchain.store",
            },
            {
              title: "Office",
              url: "https://hubnchain.store/admin/#/?domain=spicyqueen.com.tw",
            },
            
            
          ],
          images: [
            // 'https://lh3.googleusercontent.com/drive-viewer/AKGpihZHZXYOQLqcP6RGpZWUjxK4ZyMaRIn7UxRrFNvRkVbIN8IyHwQV7pIdGPmbzwZie81f1CpLxcvrFDcL17EaqgQJzUjRe_mRvC4=s1600-rw-v1',
            // 'https://lh3.googleusercontent.com/drive-viewer/AKGpihZ5eoAXa_o9N4YGeai7LpR9qqx0rMYf2qCIqEucXY9d5uCBBazv4h68RNXa2_pX73tbfldeU4Zv1fLrE9GFuqoeAxND6pPqQ54=s1600-rw-v1'
            './images/dd1.png',
            './images/dd2.png',
          ]
          // refs:[
          //   { url: 'https://drive.google.com/uc?export=view&id=1RbBkJau8KV14zRDEQ67WgzFMIAdRwB7s'},
    
          // ]


        },
        {
          date: "JUL 2023 - NOW",
          title: "AI-Related Projects",
          isAI: true,
          tools: ["ChatGPT"],
          // desc: "All projects relate to AI：",
          features: [
            {
              name: "Dynamic Shceduler",
              desc: " ChatGPT powered application with modern CSS and HTML5 animation. AI-envolved wizard design to reach the most latest technology for user.",
            },
            {
              isLineBreak: true
            },
            {
              name: "Dynamic Former",
              desc: " With the acknowledge of natural language, ChatGPT is the best assistant for building business-logics related form.",
            },
            {
              isLineBreak: true
            },
            {
              name: "HubnChain Assistant",
              desc: " 'Shift Arranger', 'Campaign Planner', 'KPI Analyzer', 'Bookwarm' are the 4 main features of the HubnChain platform assistant. Those Assistants are ChatGPT powered AI that can help you to arrange the shift, plan the campaign, and analyze the KPI.",
            }
            // {
            //   name: "Eternal Memorial Hall Program",
            //   isSideProject: true,
            //   desc: " A selfish idea about bringing my lovely auntie Miga back from dead. The state-of the-art technology LLM Implementation, ChatGPT releases a latest feature for afterward training: Fine-tuning. Training data would be the messages her left in phone, maybe those and Line bot will make her come back to us again…",
            // },
            
            
          ],
          links: [
            {
              title: "Scheduler",
              url: "https://land.hywebcloud20.com/demo/#/demo/scheduler",
            },
            {
              title: "Former",
              url: "https://land.hywebcloud20.com/demo/#/demo/dynamicFormer",
            },
          ],
          // refs:[
          //   // { url: 'https://www.facebook.com/taiwaninbelize/photos/a.1103643516690107/2004550023266114/'},
          //   // { url: 'https://www.facebook.com/taiwaninbelize/photos/a.1103643516690107/2004550023266114/'},
      
          // ]


        },
        {
          date: "JAN 2022 - NOW",
          title: "Impact Frontier Lab, Impact Hub",
          subTitle: "New Flags Supermarket POS",
          tools: ["Vue.js", "element-ui", "Vuetify"],
          desc: "This project localed in Belize, South America, empowered by ICDF TAIWAN. To help local supermarket building cutting-edge POS software in store. Having 6000+ members in system. ",
          features: [
            {
              name: "Web Crawler",
              desc: " a tiny Windows Service tool based on  ",
            },
            { name: "Electron", desc: " which is a " },
            {
              name: "Node.js",
              desc: " software that serve the POS machine with google image for each commodity to avoid uploading millions of image manullay and enhance local printing ablitilty from web page. ",
            },
            {
              name: "PWA",
              desc: " is used for offline capability and to have the web page installable.",
            },
          ],
          links: [
            {
              title: "Client PWA",
              url: "https://newflagsbelize.shop/posWebApp",
            },
            { title: "Office", url: "https://newflagsbelize.shop", pw: { account: 'demo01', password: '123456' } },
          ],
          refs:[
            { url: 'https://www.facebook.com/taiwaninbelize/photos/a.1103643516690107/2004550023266114/'},
            { url: 'https://www.facebook.com/taiwanicdf/posts/pfbid0N8xdYSGzMgCUPjgXTQgp3w1Hzx236ipZZXJ8JG4KCkRLakakVkwa2YxJfBZVzYdwl'},
            { url: 'https://www.facebook.com/newflagscayo/photos/a.245054479353883/1161665244359464/'},
            { url: 'https://www.facebook.com/newflagscayo/photos/a.264830307376300/1198788663980455/'},
            { url: 'https://www.facebook.com/taiwanicdf/photos/pcb.5068468143218035/5068461989885317'},
          ],
          images: [
            // 'https://lh3.googleusercontent.com/drive-viewer/AKGpihbTIL90Na9AJ6aFKhpHzYTIJe3CxpAM2FtyLHgioq29kS8y4mjcSgUmIZ28lTpAPZsvjFwm6GYczxvtcPHVDh8WahSmE7G1vqk=s1600-rw-v1',
            // 'https://lh3.googleusercontent.com/drive-viewer/AKGpihZrM1pAD9r80Y8X1JYNNTH_KAW0Sb3Pc35Sd9z77IC2agL0myzEy5MeWKn5t05RvNTvspeYqMYr43NASvgFrPP7dQ5EQhX8sg=s1600-rw-v1',
            // 'https://lh3.googleusercontent.com/drive-viewer/AKGpihZ-9uNlLoufF8O9TRYtAo_YicYWaI7giKF4Vym6UMf0YCzUCKsivQbf3eSQfC-N6DMct4bGsfCe-t7vF5VdN_mv9oT-SFzaM0s=s1600-rw-v1'
            './images/newflags1.jpg',
            './images/newflags2.jpg',
            './images/newflags3.jpg',
          ],


        },
        {
          date: "JUN 2020 - NOW",
          title: "Formosa Cafe Membership program",
          tools: ["Vue.js", "element-ui", "Vuetify", "Swift"],
          desc: "Settled in Cayo, Belize which owned by a Taiwanese. Building the membership system including back office, Membership App on both iOS and Android platform with modern front end technology to bring user fresh experience. ",
          links: [
            {
              title: "iOS App",
              url: "https://apps.apple.com/tw/app/formosa-cafe-belize/id1525173642",
            },
            {
              title: "Android",
              url: "https://play.google.com/store/apps/details?id=com.hyweb.formosa.memberapp",
            },
            { title: "Office", url: "http://146.71.77.32:8082" },
          ],
          features: [
            {
              name: "",
              desc: "The coupon feature in system is using ",
            },
            {
              name: "Sheet.js",
              desc: " to let web open and read data from an Excel file which was pre-generated from customer.",
            },
            { name: "Swift", desc: " for native iOS development. " },
            {
              name: "Lottiefiles",
              desc: " brings brilliant SVG animation to UI.",
            },
          ],
          refs:[
            { url: 'https://www.facebook.com/FormosaCafeBelize/photos/a.3531506990273745/4046193425471763/'},
            { url: 'https://www.facebook.com/FormosaCafeBelize/photos/a.721008691323603/3421370397954072/'},
          ],
          images: [
            // 'https://lh3.googleusercontent.com/drive-viewer/AKGpihalI8LH5r7i3rvhnGd0CJNrxnkiV5gz1PY9xLy7O3nLG6GZchTlkdzB6kLT_NnG9usefy0ABJgXoL1oJhNTvVK1TMALLgOOQg=s1600-rw-v1'
            './images/formsacafe1.jpeg',
          ]



        },
        {
          date: "DEC 2019",
          title: "YunLantern",
          isSideProject: true,
          tools: ["ESP8266", 'Zigbee', "Swift", "CSS"],
          desc: "To be updated...",
          features: [
            // {
            //    desc: "Utilizing the ",
            // },
            // {
            //   name: "Web Crawler",
            //   desc: "  tech to make reservations right on cloud, beyond thousands of “inlined” netizen. Just left your info, dine right soon.",
            // },
            
          ],
          links: [
            {
              title: "Mockup",
              url: "https://www.figma.com/file/7mkhySniS0j3cuoAv90foC/%E5%B9%AB%E4%BD%A0%E8%A8%82-%2F-%E9%82%A6%E5%B0%BC%E8%A8%82-bunny-booking-(Copy)?type=design&mode=design&t=SaikPWW0cg9gTO0Q-1",
            },
            {
              title: "Tech Stack",
              url: "https://drive.google.com/uc?export=view&id=1RbBkJau8KV14zRDEQ67WgzFMIAdRwB7s",
            },
            
            
          ],
          images: [
            // 'https://lh3.googleusercontent.com/drive-viewer/AKGpihZ19qE37R6RigsZfrtyTgm6UXOv4TrB10Ad-EaCgBNIUJshypct1Oqq8p1nkL5Pwl-6g36weHCsm57GYaxYmKMBiJ9am09Bhuk=s1600-rw-v1',
            // 'https://lh3.googleusercontent.com/drive-viewer/AKGpihaU_3m6tESWKfjid-zur64C6P6lZsV15i-sFpOUD0FAM50nborL128B3WASXIggk8UbEPiz-SBLgdyG6rXeBZ_ijXZ50aKSQBY=s1600-rw-v1',
            // 'https://lh3.googleusercontent.com/drive-viewer/AKGpihY9ZqFg84rzyya5Qr7fNTCnbJL-k9Xt78bnID_g8q-pDxdIf2rJwCREhKL6rABlOHg3DoM3MxuVKKcArAcKJLxLhjIHqcQPog=s1600-rw-v1',
            // 'https://lh3.googleusercontent.com/drive-viewer/AKGpihZRW_HKqlOqkWkvXWw0w_aE4voJJTwKnwyqesBHddAcS903MQI4GtaVVkq7fhxAWGA91kDy1PUmObilVivq2Z5ytd9x73UYMQ=s1600-rw-v1'
            './images/yun1.png',
            './images/yun2.png',
            './images/yun3.png',
            './images/yun4.png',
          ]
          // refs:[
          //   { url: 'https://drive.google.com/uc?export=view&id=1RbBkJau8KV14zRDEQ67WgzFMIAdRwB7s'},
    
          // ]


        },
        {
          date: "JUN 2023 - NOW",
          title: "esp homekit - HAA",
          isSideProject: true,
          tools: ['HomeKit', 'ESP32'],
          desc: "An Open-Source Firmware designed to integrate native Apple HomeKit functionality and personalized setups into any ESP32-based device, encompassing all ESP-IDF WiFi-compatible chips, as well as ESP8266 microcontrollers.",
          features: [
            {
              name: 'Heater Breaker',
               desc: " A basic on/off HomeKit breaker to control shower heater.",
            },
            {
              name: "WatchMinion",
              desc: "  combination of TV and RGB light bulb homekit accessory types to make the minion alive for home security. ",
            },
            
          ],
          links: [
            {
              title: "Mockup",
              url: "https://www.figma.com/file/7mkhySniS0j3cuoAv90foC/%E5%B9%AB%E4%BD%A0%E8%A8%82-%2F-%E9%82%A6%E5%B0%BC%E8%A8%82-bunny-booking-(Copy)?type=design&mode=design&t=SaikPWW0cg9gTO0Q-1",
            },
            {
              title: "Tech Stack",
              url: "https://drive.google.com/uc?export=view&id=1RbBkJau8KV14zRDEQ67WgzFMIAdRwB7s",
            },
            
            
          ],
          images: [
            // 'https://lh3.googleusercontent.com/drive-viewer/AKGpihbgVV5EDgBRq3HKcjCI752QB0_OXCj_vCAaCL2YJIRQdQ5kPtAOrKclXbQEOpX2CyDe8HAGJ0czprTx1rkaqygDjbhyhh1h2w=s1600-rw-v1',
            // 'https://lh3.googleusercontent.com/drive-viewer/AKGpihZ4bgXxcjCd-MxYobF7Vnra-B5zWeroOmM9SagzK2TlSH_H7mPqAASr4-pck0c2XgjtNNToWm-x7AbKXaNFHBzAR8EBkZXSQA=s1600-rw-v1',
            // 'https://lh3.googleusercontent.com/drive-viewer/AKGpihZyKXaeEdLEkdl5-Hw5zcmoaXaYqe9zdz4mAi1P0lbFB6SsOWhBAX6nkry4HjhmU56goqhiBtnIG2KrLLHl_Xx7LiGk6OJjkb8=s1600-rw-v1'
            './images/esp32-1.gif',
            './images/esp32-2.gif',
            './images/esp32-3.jpeg',
          ]
          // refs:[
          //   { url: 'https://drive.google.com/uc?export=view&id=1RbBkJau8KV14zRDEQ67WgzFMIAdRwB7s'},
    
          // ]


        },
        
        
        {
          date: "FEB 2023 - AUG 2023",
          title: "新北市府觀旅局 業務支援系統",
          tools: ["Express", "ffmpeg", "Vue.js", 'Vuetify'],
          // desc: "A basic web page featuring application form and result with custom policy logics implementation. With automatic approved as service in the back-end.",
          features: [
            {
               desc: "Corporated with New Taipei City Government, with ",
            },
            { name: "PWA", desc: " client application and some basic form creation. Also, we build a CCTV streaming platform to integrate the real-time camera with RTSP protocol for the system that currently unsupported by the modern web technology." },
 
          ],
          links: [
            { title: "Client PWA", url: "https://newtaipeitravel.bss.ntpc.gov.tw/#/landing/cleaningReport/1234/CUS" },
            { title: "Office", url: "https://newtaipeitravel.bss.ntpc.gov.tw" },
          ],
        },
        {
          date: "AUG 2023 - OCT 2023",
          title: "水利署 國會水利議題資料庫",
          tools: [ "THREE.js", "Wysiwyg", "Vue.js", 'Vuetify'],
          // desc: "A basic web page featuring application form and result with custom policy logics implementation. With automatic approved as service in the back-end.",
          features: [
            {
               desc: "A common business system but got a magical feature of directly exporting the Word document as ",
            },
            { name: "Wysiwyg", desc: "(What You See Is What You Get) on system which is more time-saving and straightforward.　　　　　" },
            { name: "THREE TAIWAN", desc: " A 3D Taiwan Map which serializes NLSC districts coordinates data using THREE.js, which visualize each legislators zone." },
 
          ],
          links: [
            { title: "Office", url: "https://land.hywebcloud20.com/wraAdmin/" },
          ],
        },
        {
          date: "DEC 2022 - NOW",
          title: "Enline",
          isSideProject: true,
          tools: ["AWS", "Lambda", "Puppeteer", 'Parse'],
          desc: "An AWS serverless functions service, Lambda powered service which is on top of the famous online restaurant reservation app, inline.com.",
          features: [
            {
               desc: "Utilizing the ",
            },
            {
              name: "Web Crawler",
              desc: "  tech to make reservations right on cloud, beyond thousands of “inlined” netizen. Just left your info, dine right soon.",
            },
            
          ],
          links: [
            {
              title: "Mockup",
              url: "https://www.figma.com/file/7mkhySniS0j3cuoAv90foC/%E5%B9%AB%E4%BD%A0%E8%A8%82-%2F-%E9%82%A6%E5%B0%BC%E8%A8%82-bunny-booking-(Copy)?type=design&mode=design&t=SaikPWW0cg9gTO0Q-1",
            },
            {
              title: "Tech Stack",
              url: "./enline.pdf",
            },
            
            
          ],
          // refs:[
          //   { url: 'https://drive.google.com/uc?export=view&id=1RbBkJau8KV14zRDEQ67WgzFMIAdRwB7s'},
    
          // ]


        },
        {
          date: "JAN 2022 - NOW",
          title: "HigherCloud BP",
          tools: ["Puppeteer", "Vue.js", "element-ui", "highchart"],
          desc: " A customized system based on AWS billing management platform, as a dashboard gathering billing data.",
          features: [
            {  desc: "We connect the " },
            {
              name: "AWS",
              desc: " management API to visualize data and extract the only information looks into. The challenging part is, for the unreleased AWS API, we utilized the ",
            },
            { name: "Web Crawler", desc: " tool, " },
            { name: "Puppeteer", desc: " to real-time get data on the management console page and integrated into the system to make API ours." },
           
          ],
          links: [
            { 
              title: "Office",
              url: "http://54.199.153.187",
              // pw: { account: 'demo01', password: '123456' }
            },
          ],
          refs:[
            { url: 'https://www.highercloud.com.tw'},
           
          ]


        },
        {
          date: "APR 2021 - AUG 2021",
          title: "桶後林道系統",
          tools: ["Vue 3", "Vuetify", "PrimeVue"],
          desc: "A basic web page featuring application form and result with custom policy logics implementation. With automatic approved as service in the back-end.",
          features: [
            {
              name: "PrimeVue",
              desc: " as the second UI framework that supports date selection in calendar component to support web a11y.",
            },
            { name: "", desc: "The first project that use latest " },

            { name: "Vue 3", desc: " as production build." },
          ],
          links: [
            { title: "Client", url: "https://tonhoonline.hyweb.com.tw/" },
            { title: "Office", url: "https://tonhoonline.hyweb.com.tw/admin" },
          ],
        },
      ],
    });

    const dynamicColor = (tool) => {
      switch (tool) {
        case "Swift":
          return ["orange-darken-2", "https://developer.apple.com/swift/"];
          break;
        case "Vue 3":
          return ["green-darken-4", "http://vuejs.org"];
          break;
        case "Vue.js":
          return ["green", "https://v2.vuejs.org"];
          break;
        case "PrimeVue":
          return ["green", "https://www.primefaces.org/primevue/"];
          break;

        case "element-ui":
          return ["blue-lighten-2", "https://element.eleme.io/"];
          break;
        case "Vuetify":
          return ["blue-darken-3", "https://vuetifyjs.com/"];
          break;
        case "JavaScript":
          return ["yellow-darken-3", ""];
          break;
        case "SQL Server":
          return [
            "purple-darken-3",
            "https://www.microsoft.com/zh-tw/sql-server/sql-server-2019",
          ];
          break;
        case "PWA":
          return ["primary", "https://web.dev/progressive-web-apps/"];
          break;
        case "Electron":
          return ["primary", "https://www.electronjs.org"];
          break;
        
        case "Web Crawler":
          return ["primary", "http://node-crawler.org"];
          break;
        case "Sheet.js":
          return ["primary", "https://sheetjs.com"];
          break;
        case "Lottiefiles":
          return ["primary", "https://lottiefiles.com"];
          break;
        case "Node.js":
          return ["green-darken-2", "https://nodejs.org"];
          break;
        case "Puppeteer":
          return ["green-lighten-2", "https://pptr.dev"];
          break;
        case "JAVA":
          return ["red", null];
          break;
        case "AWS":
          return ["orange-darken-3", null];
          break;
        case "Lambda":
          return ["orange", 'https://aws.amazon.com/lambda/'];
          break;
        case "Parse":
          return ["blue", "https://parseplatform.org"];
          break;
        case "ChatGPT":
          return ["teal-accent-3", "https://openai.com/blog/chatgpt"];
          break;
        case "Express":
          return ["gray-darken-1", "https://expressjs.com"];
          break;
        case "ffmpeg":
          return ["green-darken-1", "https://ffmpeg.org"];
          break;
        case "Wysiwyg":
          return ["green-lighten-1", "https://www.vue2editor.com"];
          break;
        case "Zigbee":
          return ["red-lighten-1", null];
          break;
        case "HomeKit":
          return ["orange-darken-1", null];
          break;
        case "THREE.js":
          return ["black-darken-1", 'https://threejs.org'];
          break;

        default:
          return ["primary", ""];
          break;
      }
    };

    const onIntersect = (entries, observer) => {
        // More information about these options
        // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      
         ctx.emit('showTiger', entries)
    }

    const hashReverse = (str) => {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
          const char = str.charCodeAt(i);
          hash = ((hash << 5) - hash) + char;
          hash |= 0; // Convert to 32bit integer
      }
      console.log(Math.abs(hash) % 2);
      return Math.abs(hash) % 2;
    }

    return { onSwiper, onSlideChange, show, data, dynamicColor, onIntersect, hashReverse, keywords };
  }, //*
};
</script>

<template>
  <div>
    <v-row>
      <v-col cols="12" sm="4">
        <v-row class="pa-12">
          <v-img
            class="rounded-circle"
            :aspect-ratio="1"
            src="https://lh3.googleusercontent.com/a-/AOh14GhU8CUJYnjjmfTglszUxLKlW0pF47zRf_2t8S0kRg=s576-p-no"
          ></v-img>
        </v-row>
        <v-card
          class="mx-auto mt-8 elevation-0"
          max-width="344"
          color="transparent"
        >
          <v-card-title>
            <div>
              <div class="text-overline mb-1">WEB ENGINEER</div>
              <div 
                class="text-h4 mb-1"
                v-intersect="{
                  handler: onIntersect,
                  options: {
                    threshold: [0, 0.5, 1.0]
                  }
                }"
              >
                Tiger Liu
              </div>
            </div>
          </v-card-title>

          <v-list-item class="mt-8">
            <template v-slot:prepend>
              <v-icon color="primary" icon="mdi-phone" size="small"></v-icon>
            </template>
           
            <v-list-item-title>
              <v-list-item-subtitle><a class="text-darkgrey" href="tel:+886928436278">(+886) 928436278 </a></v-list-item-subtitle>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <template v-slot:prepend>
              <v-icon color="primary" icon="mdi-at"  size="small"></v-icon>
            </template>
           
            <v-list-item-title>
              <v-list-item-subtitle
                ><a class="text-darkgrey" href="mailto:tiger93064@hotmail.com"
                  >tiger93064@hotmail.com</a
                ></v-list-item-subtitle
              >
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <template v-slot:prepend>
              <v-icon color="primary" icon="mdi-home"  size="small"></v-icon>
            </template>
            
            <v-list-item-title>
              <v-list-item-subtitle>Hsinchiu/ Taichung</v-list-item-subtitle>
            </v-list-item-title>
          </v-list-item>

          <v-list-item two-line class="mt-6">
          
              <v-list-item-title>PROFILE</v-list-item-title>
              <div class="text-caption mt-1">
                With <span class="text-primary font-weight-bold">4 years+</span> experience in <span class="text-primary font-weight-bold">full stack</span> development, I am in
                charging of design and well-developing modern SPA web application,
                major in <span class="text-primary font-weight-bold">Vue.js</span> framework and familiar with Agile.
              </div>
         
          </v-list-item>

          <v-list-item two-line class="mt-6">
            <v-list-item-title>
              <v-list-item-title>EDUCATION</v-list-item-title>
              <div class="text-caption mt-1 font-weight-bold">
                BS in<br />
                Computer Science
                <div class="float-right font-weight-regular">2016 - 2020</div>
              </div>
              <div class="text-caption mt-1">
                National Yunlin University of Science and Tech
              </div>
            </v-list-item-title>
          </v-list-item>

          <v-list-item two-line class="mt-6">
            <v-list-item-title>
              <v-list-item-title class="mb-2">LICENSE</v-list-item-title>
              <div
                class="text-caption"
                v-for="(i, id) in [
                  'iPAS物聯網應用工程師 初級',
                  'iPAS行動應用程式設計師(iOS) 初級',
                  'iPAS行動應用程式設計師(Android) 初級',
                  '電腦硬體裝修 乙級',
                  'TOEIC   860pt',
                ]"
                :key="id"
              >
                {{ i }}
              </div>
            </v-list-item-title>
          </v-list-item>

          <v-list-item three-line class="mt-6">
               <v-list-item-title>SKILLS</v-list-item-title>
              <!-- <v-list-item-subtitle> -->
                <v-chip
                  v-for="(skill , id) in data.skills"
                  :key="id"
                  class="ma-2 ml-0"
                  close
                  :color="dynamicColor(skill.name)[0]"
                  label
                  text-color="white"
                  :href="dynamicColor(skill.name)[1]"
                  target="_blank"
                >
                  <v-icon
                    v-if="skill.icon != ''"
                    start
                    :icon="skill.icon"
                  ></v-icon>
                  {{ skill.name }}
                </v-chip>
              <!-- </v-list-item-subtitle> -->
           </v-list-item>
          <div class="mt-12 ml-2">
            <v-btn
             v-for="(sm, id) in data.socialMedia"
             :key="id"
              class="mr-2"
              icon
              variant="text"
              target="_blank"
              :href="sm.url"
              color="primary"
              size="large"
            >
              <v-icon>{{sm.icon}}</v-icon>
            </v-btn>
            <!-- <v-btn
              v-for="sm in data.socialMedia"
              class="mb-3"
              width="12em"
              variant="outlined"
              block
             
              >{{ sm.name }}</v-btn
            ><br /> -->
          </div>
        </v-card>

        <v-row> </v-row>
      </v-col>

      <v-col cols="12" sm="8">
        
        <v-list-item three-line class="mt-8">
          <v-list-item-title>
            <v-list-item-title class="text-h5 font-weight-black mb-1 "
              >WORK EXPERIENCE</v-list-item-title
            >
          </v-list-item-title>
        </v-list-item>

        <v-divider inset></v-divider>
        <v-list-item three-line class="mt-8">
          <v-list-item-title>
            <v-list-item-title class="mb-1"
              >SENIOR ENGINEER（4 yrs）</v-list-item-title
            >
            <v-list-item-subtitle>
              <a
                class="text-primary"
                target="_blank"
                href="https://www.hyweb.com.tw/about-hyweb/intro"
                >@Hyweb Tech.</a>
               Since FEB 2020</v-list-item-subtitle
            >
          </v-list-item-title>
        </v-list-item>

        <!-- <v-alert class="mt-2" type="warning"> Updating ...</v-alert> -->
         <!-- {{ keywords }} -->
        <v-chip-group
          v-model="keywords"
          column
          multiple
          class="mb-n4 mt-5"
        >
         
          <div class="ma-2"><v-icon color="primary">mdi-filter</v-icon></div>
          <v-chip color="primary">ALL</v-chip>
          <v-chip
            v-for="(skill , id) in data.skills.filter(s => s.isTech)"
            :text="skill.name"
             label
            color="primary"
            filter
          ></v-chip>

          
        </v-chip-group>
        

        <v-card
          color="white"
          class="mt-8 rouned-lg"
          v-for="(project, index) in data.project"
          :key="index"
          width="100%"
        >
          
          <!-- <v-card-title> -->
            <div class="py-3 px-6">
              <div class="text-overline mb-1">{{ project.date }}</div>
              <div class="text-h4 mb-1 ">
                <span :class="{ 'glowingText' : project.isAI }">{{ project.title }}</span>
                <v-chip color="info" label class="float-right mt-3 mr-2" v-show="project.isSideProject">Side Project</v-chip>

               </div>
            </div>
           <!-- </v-card-title> -->
          <v-card-subtitle v-if="project.subTitle" >
            <span class="pl-3">{{ project.subTitle }}</span>
          </v-card-subtitle>
          <v-card-text class="text-black">
            <v-row :class="{ 'flex-row-reverse': hashReverse(project.title) }">
              <v-col v-if="project.title === '水利署 國會水利議題資料庫'" cols="12" md="6">
               <tw></tw> 
              </v-col>
              <v-col v-else-if="project.images" cols="12" md="6">
                <v-carousel color="primary" height="400" show-arrows="hover" cycle hide-delimiter-background >
                  <v-carousel-item
                    v-for="(url, i) in project.images"
                    :key="i"
                  >
                    <v-sheet color="transparent" height="100%" >
                      <div class="d-flex fill-height justify-center align-center">
                        <v-img
                          class="rounded-lg"
                          aspect-ratio="16/9"
                          cover
                          :src="url"
                        ></v-img>
                        
                      </div>
                    </v-sheet>
                  </v-carousel-item>
                </v-carousel>
              </v-col>
              <v-col cols="12" :md="(project.images||project.title === '水利署 國會水利議題資料庫')?6:12" class="px-6">
                <v-chip
                  v-for="(tool, index1) in project.tools"
                  :key="index1"
                  class="ma-2 ml-0"
                  close
                  :color="dynamicColor(tool)[0]"
                  :href="dynamicColor(tool)[1]"
                  target="_blank"
                  text-color="white"
                  size="small"
                >
              <!-- <v-icon start icon="mdi-twitter"></v-icon> -->
              {{ tool }}
                </v-chip>
                <div></div>
                <span class="text-h4"> </span>
                <div class="">
                  {{ project.desc }}
                </div>
                <div class="mt-4">
                  <span v-for="(f,id) in project.features" :key="id" >
                    <div v-if="f.isLineBreak"><br></div>
                    <span v-else>
                      <v-chip
                        size="x-small"
                        v-if="f.name && f.name !== ''"
                        :href="dynamicColor(f.name)[1]"
                        target="_blank"
                      >
                        <span :class="{ 'glowingText font-weight-bold': f.isAI }">{{ f.name }}</span>
                      </v-chip>
                      </span
                    >
                    <v-chip
                        size="x-small"
                        v-if="f.isSideProject"
                        label
                        color="info"
                        class="ml-2"
                      >Side Project</v-chip><span>
                    
                      
                      {{ f.desc }}</span></span
                  >
                </div>

                <div class="mt-4 font-weight-medium"><v-icon v-show="project.refs" class="mr-1" size="small" color="info" >
                      mdi-link
                    </v-icon>
                  <v-btn variant="text" class="mr-1" size="x-small" color="info" target="_blank" v-for="(h, index) in project.refs" :key="index" :href="h.url"
                    >Ref{{index+1}}</v-btn
                  >
                </div>
              </v-col>
            </v-row>
            
          </v-card-text>

          <v-divider class="mt-6"></v-divider>
          <v-btn
            variant="text"
            class="mt-2 ml-2"
            color="black-accent-4"
            disabled
            size="small"
            @click=";"
          >
            LIVE PREVIEW </v-btn
          ><br />

          <div class="px-3 pb-2">
                <template  v-for="(link, index) in project.links" :key="index">
                  <v-btn
                    color="primary"
                    variant="text"
                    class="mr-2"
                    flat
                    append
                    :href="link.url"
                     target="_blank"
                    >{{ link.title
                    }}<v-icon class="ml-1" large color="green-lighten-2">
                      mdi-open-in-new
                    </v-icon></v-btn
                  >
                  <v-tooltip text="Tooltip"  location="top" :disabled="!link.pw">
                    <template v-slot:activator="{ props }">
                    <v-btn
                      v-bind="props"
                      icon
                      variant="text"
                      size="small"
                      class="ml-n2"
                      color="primary"
                      v-if="link.pw"
                    >
                      <v-icon>mdi-information</v-icon>
                    </v-btn>
                    </template>
                    <span v-if="link.pw">{{link.pw.account}}/{{link.pw.password}}</span>
                  </v-tooltip>
                </template>
                
             
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<style lang="scss" scoped>
.mySwiper {
  width: 1440px;
  height: 680px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff0;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.glowingText{
    user-select: none;
    
    color: white;
    background: repeating-linear-gradient(-45deg, red 0%, yellow 7.14%, rgb(0,255,0) 14.28%,
                rgb(0,255,255) 21.4%, cyan 28.56%, blue 35.7%, magenta 42.84%, red 50%);
    background-size: 50vw 50vw;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    animation: slide 120s linear infinite forwards;

    &.fast{
      animation: slide 30s linear infinite forwards;
    }
  }
  @keyframes slide {
    0%{
      background-position-x: 0%;
    }
    100%{
      background-position-x: 600vw;
    }
  }
</style>

