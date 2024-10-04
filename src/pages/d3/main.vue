<template>
  <div >
    <v-row >
   
      <v-col cols="12" sm="4">
       1234
       <svg ref="svg" ></svg>
      </v-col>
 
    </v-row>
  </div>
</template>
<script>
import { ref, reactive, onMounted } from "vue";
import * as d3 from "d3" ;

 export default {
  name: "Home",
  components: {
     
  },
  setup(props, ctx) {
    onMounted(() => {
      initWorld()
    });

    const show = ref(true);
    const svg = ref(null)
    const data = reactive({
      skills: [
        { name: "Vue.js", icon: "mdi-vuejs" },
        { name: "Vuetify", icon: "mdi-vuetify" },
        { name: "element-ui", icon: "" },
      
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
       

        default:
          return ["primary", ""];
          break;
      }
    };

    const initWorld = () => {
      console.log("initWorld");

      // Declare the chart dimensions and margins.
      const width = 640;
      const height = 400;
      const marginTop = 20;
      const marginRight = 20;
      const marginBottom = 30;
      const marginLeft = 40;

      // Declare the x (horizontal position) scale.
      const x = d3.scaleUtc()
          .domain([new Date("2023-01-01"), new Date("2024-01-01")])
          .range([marginLeft, width - marginRight]);

      // Declare the y (vertical position) scale.
      const y = d3.scaleLinear()
          .domain([0, 100])
          .range([height - marginBottom, marginTop]);



      d3.select(svg.value)
        .attr("width", width)
        .attr("height", height)
        .append("g").attr("transform", `translate(0,${height - marginBottom})`).call(d3.axisBottom(x))
        .append("g").attr("transform", `translate(${marginLeft},0)`).call(d3.axisLeft(y));

    }
 

    return { show, data, dynamicColor, svg  };
  }, //*
};
</script>


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

