<template>
  <div id="modal" class="modal" >
    <div class="modal__content">
      <div class="modal__header ">
        <h1>Please Type Coin Name</h1>
        
        <span class="close-btn" @click="hide()">&times;</span>

        
      </div>
      <div class="modal__body">
        <input class="src-box" type="text" v-model="query">
        <button class="src-item">Search</button>

        
        <p v-if="isLoading"> Loading</p>
        <searchItemsVue v-if="query"  :stocks="filteredStocks" />
      </div>
    </div>
  </div>
</template>

<script>
import searchItemsVue from './search-items.vue';
export default {

  props:["visible"],
  components:{searchItemsVue},

  data (){
    return {
      query: '',
      showItems: false ,
   stocks: [],
    }
  },
  

  


 methods:{

    hide(){
      const modal = document.getElementById("modal")
      modal.classList.remove("show")


    },
    show(){
      const modal = document.getElementById("modal")
      modal.classList.add("show")



    },
    
 },

  

  created() {
    fetch("https://api2.binance.com/api/v3/ticker/24hr")
    .then((res) => {return res.json()})
    .then((res) => {this.stocks = res.splice(0,10)})

    
    
  },

  
  computed: {
    filteredStocks(){
      return this.stocks.filter(stock => stock.symbol.toLowerCase().includes(this.query.toLowerCase()))

      
    },

    


    
  },
}

</script>

<style >
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 
}
  .modal {
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: rgba(0, 0, 0, 0.4);
    align-items: center;
    visibility: hidden;
    opacity: 0;
    transition: opacitiy 0.4 ease-in-out, transform 0.4 ease-in-out;
    
  }
  .modal.show{
    visibility: visible;
    opacity: 1;
  }
  .modal__content{
    
    width: 800px;
    background: #fff;
    margin: auto;
    margin-top: 15vh;
    height: 500px;
    border-radius: 25px;


  }

  .modal__header{
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 5vh;
  }

  .close-btn{
    cursor:pointer
  }

  .src-item{
    border-radius: 4px;
    border: 0;
    background-color: #be95bf;
  width:8vh;
  height: 4vh;
  }

  .src-box{
    height: 4vh;
  }
</style>

