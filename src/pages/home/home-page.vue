<script>
import { ref, reactive, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import news from "./news-page.vue";
import route from "./route-page.vue";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
SwiperCore.use([Pagination, Autoplay]);

export default {
  name: "Home",
  components: {
    Swiper,
    SwiperSlide,
    news,
    route,
  },
  setup() {
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
        { name: "Vue.js", icon: "mdi-vuejs" },
        { name: "Vuetify", icon: "mdi-vuetify" },
        { name: "element-ui", icon: "" },
        { name: "PWA", icon: "" },
        { name: "Swift", icon: "mdi-language-swift" },
        { name: "JavaScript", icon: "" },
        { name: "C#", icon: "" },
        { name: "JAVA", icon: "" },
        { name: "SQL Server", icon: "" },
        { name: "Agile", icon: "" },
      ],
      project: [
        {
          date: "JAN 2022 - NOW",
          title: "New Flags Supermarket POS",
          tools: ["Vue.js", "element-ui", "Vuetify"],
          desc: "This project localed in Belize, South America, empowered by ICDF TAIWAN. To help local supermarket building cutting-edge POS software in store. Having 3000+ members in system.",
          features: [
            {
              name: "Web Crawler",
              desc: " a tiny Windows Service tool bases on  ",
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
              url: "https://newflagsbelize.shop:8443/posWebApp",
            },
            { title: "Office", url: "https://newflagsbelize.shop:8443" },
          ],
          refs:[
            { url: 'https://www.facebook.com/newflagscayo/photos/a.245054479353883/1161665244359464/'},
            { url: 'https://www.facebook.com/newflagscayo/photos/a.264830307376300/1198788663980455/'},
            { url: 'https://www.facebook.com/taiwanicdf/photos/pcb.5068468143218035/5068461989885317'},
          ]


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
          ]



        },
        {
          date: "APR 2021 - AUG 2021",
          title: "桶後林道系統建置案",
          tools: ["Vue 3", "Vuetify", "PrimeVue"],
          desc: "A basic web page featuring application form and result with custom policy logics implementation. With automatic approved as service in the back-end.",
          features: [
            {
              name: "PrimeVue",
              desc: " as the second UI framework that supports date selection in calendar component.",
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
          return ["blue-darken-3", "https://next.vuetifyjs.com/"];
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
        case "Node.js":
          return ["primary", "https://nodejs.org/en/about/"];
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

        default:
          return ["primary", ""];
          break;
      }
    };

    return { onSwiper, onSlideChange, show, data, dynamicColor };
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
          <v-card-header>
            <div>
              <div class="text-overline mb-1">FRONT END ENGINEER</div>
              <div class="text-h4 mb-1">Tiger Liu</div>
            </div>
          </v-card-header>

          <v-list-item class="mt-8">
            <v-list-item-avatar start>
              <v-icon color="primary" icon="mdi-phone" size="small"></v-icon>
            </v-list-item-avatar>
            <v-list-item-header>
              <v-list-item-subtitle>(+886) 928436278</v-list-item-subtitle>
            </v-list-item-header>
          </v-list-item>

          <v-list-item>
            <v-list-item-avatar start>
              <v-icon color="primary" icon="mdi-at"  size="small"></v-icon>
            </v-list-item-avatar>
            <v-list-item-header>
              <v-list-item-subtitle
                ><a class="text-darkgrey" href="mailto:tiger93064@hotmail.com"
                  >tiger93064@hotmail.com</a
                ></v-list-item-subtitle
              >
            </v-list-item-header>
          </v-list-item>

          <v-list-item>
            <v-list-item-avatar start>
              <v-icon color="primary" icon="mdi-home"  size="small"></v-icon>
            </v-list-item-avatar>
            <v-list-item-header>
              <v-list-item-subtitle>Hsinchiu/ Taichung</v-list-item-subtitle>
            </v-list-item-header>
          </v-list-item>

          <v-list-item two-line class="mt-6">
            <v-list-item-header>
              <v-list-item-title>PROFILE</v-list-item-title>
              <div class="text-caption mt-1">
                With 2 years+ experience in full stack development, I am in
                charging of design and well-developing modern SPA web system,
                major in Vue.js framework and familiar with Agile.
              </div>
            </v-list-item-header>
          </v-list-item>

          <v-list-item two-line class="mt-6">
            <v-list-item-header>
              <v-list-item-title>EDUCATION</v-list-item-title>
              <div class="text-caption mt-1 font-weight-bold">
                BA in<br />
                Computer Science
                <div class="float-right font-weight-regular">2016 - 2020</div>
              </div>
              <div class="text-caption mt-1">
                National Yunlin University of Science and Tech
              </div>
            </v-list-item-header>
          </v-list-item>

          <v-list-item two-line class="mt-6">
            <v-list-item-header>
              <v-list-item-title class="mb-2">LICENSE</v-list-item-title>
              <div
                class="text-caption"
                v-for="i in [
                  'iPAS物聯網應用工程師 初級',
                  'iPAS行動應用程式設計師(iOS) 初級',
                  'iPAS行動應用程式設計師(Android) 初級',
                  '電腦硬體裝修 乙級',
                  'TOEIC   715',
                ]"
              >
                {{ i }}
              </div>
            </v-list-item-header>
          </v-list-item>

          <v-list-item three-line class="mt-6">
            <v-list-item-header>
              <v-list-item-title>SKILLS</v-list-item-title>
              <v-list-item-subtitle>
                <v-chip
                  v-for="skill in data.skills"
                  class="ma-2"
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
              </v-list-item-subtitle>
            </v-list-item-header>
          </v-list-item>
          <div class="mt-12 ml-2">
            <v-btn
             v-for="sm in data.socialMedia"
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
          <v-list-item-header>
            <v-list-item-title class="text-h5 font-weight-black mb-1"
              >WORK EXPERIENCE</v-list-item-title
            >
          </v-list-item-header>
        </v-list-item>

        <v-divider inset></v-divider>
        <v-list-item three-line class="mt-8">
          <v-list-item-header>
            <v-list-item-title class="mb-1"
              >FULL STACK ENGINEER</v-list-item-title
            >
            <v-list-item-subtitle>
              <a
                class="text-primary"
                target="_blank"
                href="https://www.hyweb.com.tw/about-hyweb/intro"
                >@Hyweb Tech.
              </a>
              (Feb 2020 - NOW)</v-list-item-subtitle
            >
          </v-list-item-header>
        </v-list-item>

        <v-card
          color="white"
          class="mt-8 rouned-lg"
          v-for="(project, index) in data.project"
          :key="index"
        >
          <v-card-header>
            <div>
              <div class="text-overline mb-1">{{ project.date }}</div>
              <div class="text-h4 mb-1">{{ project.title }}</div>
            </div>
          </v-card-header>
          <v-card-text class="text-black">
            <v-chip
              v-for="(tool, index1) in project.tools"
              :key="index1"
              class="ma-2"
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
              <span v-for="f in project.features"
                ><span
                  ><v-chip
                    size="x-small"
                    v-show="f.name !== ''"
                    :href="dynamicColor(f.name)[1]"
                    target="_blank"
                  >
                    {{ f.name }}
                  </v-chip></span
                ><span>{{ f.desc }}</span></span
              >
            </div>

            <div class="mt-4 font-weight-medium"><v-icon v-show="project.refs" class="mr-1" size="small" color="info" >
                  mdi-link
                </v-icon>
              <v-btn variant="text" class="mr-1" size="x-small" color="info" target="_blank" v-for="(h,index) in project.refs" :href="h.url"
                >Ref{{index+1}}</v-btn
              >
            </div>
          </v-card-text>

          <v-divider class="mt-6"></v-divider>
          <v-btn
            variant="text"
            class="mt-2 ml-2"
            color="black-accent-4"
            disabled
            size="small"
            @click=""
          >
            LIVE PREVIEW </v-btn
          ><br />

          <v-card-actions class="ml-1">
            <v-btn
              v-for="link in project.links"
              color="primary"
              variant="contained-text"
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
          </v-card-actions>
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
</style>

