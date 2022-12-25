<template>
  <div class="main-port">
    <div class="main-port-elem">
      <h2>{{ title }}</h2>
      <p>Amount</p>
      <h2>{{ price }}</h2>
      <button class="port-btn" @click="updateVault(data[0])">kaldır</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: {
    title: String,
    price: Number,
    data: [],
  },
  computed: {
    ...mapState(["chartData"]),
  },
  methods: {
    ...mapActions(["updatePortfolio", "removeFromPortfolio"]),
    updateVault(index) {
      this.removeFromPortfolio(index);
    },
  },
};
</script>
  
  
  <style>
div.main-port-elem {
  padding: 20px;
  text-align: center;
  align-content: center;
  align-items: center;

  display: flex;
  justify-content: space-between;
  height: 8vh;
  margin-right: 5vh;
  margin-top: 1vh;
  border: 1px solid black;
  border-radius: 15px;
}

.port-btn {
  border-radius: 4px;
  border: 0;
  background-color: #be86bf;

  width: 8vh;
  height: 4vh;
}
</style>