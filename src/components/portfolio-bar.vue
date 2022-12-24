<template>
  <div class="portfolio-main">
    <h1>List Of Portfolio</h1>
    <div v-for="(elem, index) in chartData" :key="`stock-${index}`">

      <portfolio-el :title="elem[0]"  :price="elem[1]" :data="chartData" >
      </portfolio-el>
    </div>
  </div>
</template>
  
  <script>
import portfolioElementVue from "./portfolio-el.vue";
import { mapState } from "vuex";

export default {
  name: "portfolio-bar",
  components: {
    "portfolio-el": portfolioElementVue,
  },

  computed:{
    ...mapState([
      "listData", "chartData"
    ]),

    },
    methods:{
    }
    
}

</script>
  
  <style  scoped>
div.portfolio-main {
  text-align: center;
  align-content: center;
  margin: 5vh;
  height: 70vh;
  width: 45vh;
  border-right: 2px solid black;

  flex-grow: 1;
}
</style>