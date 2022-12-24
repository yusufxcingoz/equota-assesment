<template>
  <div class="main">
    
    <div class="button-div">
      <modalPopupVue ref="modal" :visible="show" />
      
      
      
      <button class="add-btn" @click="openModal()">Add/Stock</button>
      <button class="add-btn"  @click="refresh([])" >Refresh</button>

    </div>
  </div>
</template>

<script>
import modalPopupVue from './modal-popup.vue';
import { mapState, mapActions } from 'vuex';


export default {
  name: "TopBar",
  
  components: {
    
   modalPopupVue
  },

  computed:{
        ...mapState([
            "chartData"
        ])
    },
  methods: {
    openModal(){
      this.$refs.modal.show()
    },

    ...mapActions([
        "refreshData"
    ]),
    refresh(index){
       this.refreshData(index)
       
    }, 

    
  },

  
};
</script>

<style scoped>
div.main {
  height: 15vh;
  border-bottom: 2px solid black;
  margin: 0vh 5vh 0vh 5vh;
}

div.button-div {
  display: flex;

  padding-top: 5vh;
}

.add-btn{
  margin: 10px;
  cursor: pointer;
  border-radius: 10px;
  width: 12vh;
  height: 6vh;
  border: 0;
  background-color: aqua;
}
</style>