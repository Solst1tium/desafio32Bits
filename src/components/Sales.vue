<template>
  <div>
    <h1>Ventas</h1>
     <li> Cantidad de juegos con stock {{availableGames.length}} </li>
    <GameList :games="availableGames" :displayButton='true'  @emit-sale="initSale"></GameList>
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
import GameList from './GameList'
export default {
  components:{
    GameList,
   
  },
  computed: {
 
    ...mapGetters(['availableGames']),
    
  },
  methods: {//procesa la venta 
   ...mapActions (['processSale']),
    initSale(game){
      this.processSale(game)
      
    }
   
  },

}
</script>