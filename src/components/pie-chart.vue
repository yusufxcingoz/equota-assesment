<template>
  <div id="app">

    <pie-chart   width="800px" height="500px" :donut="false" :data="chartData"></pie-chart>
    
  </div>
</template>

<script>
import {mapState} from 'vuex'


export default{
  data (){
    return {
     show: false
   
    }
  },

  name: "chartPage",
  



  computed :{
    ...mapState([
      'chartData', 'isEmpty'
    ])
  },

  methods:{
    updateData(){
      console.log(this.chartData.lenght)
    }
  }
 
}

</script>