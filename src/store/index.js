import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    
    chartData : [],
    timesOfCoin: 0,

    isEmpty: true



}

const mutations = {

   addCoin(state, coin){
        const symbol = coin[0]
        
         
        var exists = state.chartData.find(el => el[0] === symbol);

        if (exists) {
                state.timesOfCoin++
                exists[1] = state.timesOfCoin*coin[1]

                console.log(state.chartData)
                state.timesOfCoin === 0 
                
   
            } else{
            
            state.chartData.push(coin)
            state.timesOfCoin === 0 
        }
        
    },
    removeCoin(state, index){
        state.chartData.splice(index, 1)
},

        refreshData(state, coin){
            state.chartData.push(coin)
            state.chartData.pop()
            console.log("deneme")
        }

    
    }


const actions = {
    updatePortfolio({commit}, coin){
        commit("addCoin", coin)
    },

    removeFromPortfolio({commit}, index){
        commit("removeCoin", index)
    },
    refreshData({commit}, coin){
        commit("refreshData", coin)
    }
   
}



const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store