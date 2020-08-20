<template>
  <div>
    <ul>
      
      <li :style="{'background-color':game.color}" v-for="(game, index) in games" :key="index">Codigo: {{game.id}}|Nombre: {{game.name}}|Stock: {{game.stock}}|Precio: {{game.price}} 
        <button @click="emitSale(game)" v-if="displayButton" type="text">Vender</button></li>
    </ul>
    
  </div>
</template>
<script>
export default {
  props: {
    games: {
      type: Array,
      required: true
   },
   displayButton: {
     type: Boolean,
     default: false
   }
  },
  methods: {
    emitSale(game){
      this.$emit('emit-sale', game)
    }
  },
}
</script>