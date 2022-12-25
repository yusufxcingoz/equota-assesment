<template>
<div >
   
    <div class="search-item" v-for="(stock, index) in stocks" :key="`stock-${index}`">
        <div class="search-content">


            <h1>
                
                {{ stock.symbol }}    
                
            </h1>
            <p>
                Price : 
                {{ stock.lastPrice.slice(0, 6) }}
            </p>
           
            <button class="add-btn" @click="updateVault(index)">Add</button>
            <button class="add-btn"  @click="refresh([])" >Refresh</button>
        </div>
    </div>

   
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default{

    props: ['stocks'],
    computed:{
        ...mapState([
            "chartData", "timesOfCoin"
        ])
    },
    
methods:{
    
    ...mapActions([
        "updatePortfolio", "refreshData"
    ]),
    updateVault(index){
       this.updatePortfolio([this.stocks[index].symbol, this.stocks[index].lastPrice])
    }, 
    
    refresh(index){
       this.refreshData(index)
       
    },

    

    
}
   
}

</script>

<style scoped>
div{

    z-index: 999;
    background-color: aqua;
    min-width: 400px;
    background: #fff;
    margin: auto;
    
}

.search-item{
    width: 50vh;
   
    
    
    margin-top: 1.5vh ;
}
.search-content{
    text-align: center;
  align-content: center;
  align-items: center;
    justify-content: space-between;
    display: flex;
    margin: auto;
}


.add-btn{
    border-radius: 4px;
    border: 0;
    background-color: #be86bf;
  width:8vh;
  height: 4vh;
}
</style>