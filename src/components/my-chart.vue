<template>
  <div class="app">

    <div class="chart-main">
      <h1 class="header">Portfolio</h1>
      
      <pieChartVue />
    </div>
  </div>
</template>
  
  <script>
import pieChartVue from "./pie-chart.vue";

export default {
  name: "MyChart",
  components: { pieChartVue },
};
</script>
  <style>
  .app{
    flex-grow: 1;
  }
div.chart-main {
  
  align-items: center;
  margin: 5vh;
  height: 70vh;

  
}
.header{
  margin-bottom:10vh;
}

</style>