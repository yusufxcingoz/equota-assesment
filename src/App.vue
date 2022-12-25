<template>
  <div id="app">
    <top-bar></top-bar>
    <div id="sub">
      <portfolioBarVue />
      <myChartVue />
    </div>
  </div>
</template>

<script>
import topBar from "./components/top-bar.vue";
import portfolioBarVue from "./components/portfolio-bar.vue";
import myChartVue from "./components/my-chart.vue";

export default {
  name: "App",
  components: { "top-bar": topBar, portfolioBarVue, myChartVue },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#sub {
  display: flex;
}
</style>
