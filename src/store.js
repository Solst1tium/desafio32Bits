import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    title:"32 bits",
    subtitle: "Juegos de Pc Y Consolas",
    sales: [],
    games: [
      {id: '0001', name: 'Sekiro', stock: 100, price: 30000, color: 'red', sale: true},
      {id: '0002', name: 'Fifa 21', stock: 100, price: 25000, color: 'blue', sale: false},
      {id: '0003', name: 'Gears of War 4', stock: 100, price: 15000, color: 'green', sale: true},
      {id: '0004', name: 'Mario Tennis Aces', stock: 100, price: 35000, color: 'yellow', sale: false},
      {id: '0005', name: 'Bloodborne', stock: 100, price: 10000, color: 'blue', sale: false},
      {id: '0006', name: 'Forza Horizon 4', stock: 100, price: 20000, color: 'red', sale: true}
      ]
  },

  getters: {
    findGame: (state) => (id) => {
      return state.games.filter((prod) =>{
       return prod.id == id
      })
    },
    availableGames(state){
      return state.games.filter((game) =>{
        return game.stock > 0
      })
    }
  },
  mutations: {

    DEDUCT_STOCK (state, game) {
     let selectedGame = state.games.find((gam) => {
       return gam.id == game.id
     })
      selectedGame.stock--
    },
    ADD_SALE (state, game){
      state.sales.push(game)
    }
  },
  actions: {
    processSale({commit}, game){
      if(game.stock>0){
        setTimeout(() =>{
          commit('DEDUCT_STOCK', game)
          setTimeout(() => {
            commit('ADD_SALE', {id:game.id, name: game.name, price: game.price}) 
            alert("Venta realizada")
          }, 1500);
        }, 2000)      
      }
    }
  }
})

export default store;
