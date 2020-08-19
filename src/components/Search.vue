<template>
  <div>    
    <li> Cantidad de juegos totales {{games.length}} </li>
    <input v-model="search" type="text" placeholder="buscar">
    <GameList :games='filterGames'></GameList>
  </div>
</template>
<script>
import {mapState, mapGetters} from 'vuex'
import GameList from './GameList'

export default {
 data(){
   return {
     search: null
   }
 },
  components:{
    GameList
  },

  computed:{
    ...mapState(['games']),
    ...mapGetters(['findGame']),
  
  
  filterGames(){
    if (this.search){
     return this.findGame(this.search)
    }else{
      return this.games
    }
  }
  }
}
</script>