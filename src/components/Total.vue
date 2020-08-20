<template>
  <div>   
    <ul v-if="sales.length > 0">
     
      <li v-for="(sale, index) in sales" :key="index"> {{sale.id}} | {{sale.name}} | {{sale.price}}</li>
    </ul>
    <h2 v-else>No hay ventas registradas</h2>
      <h1>Ventas Totales: {{totalSales}}</h1>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(['sales']),
    totalSales(){
      const reducer = function (accumulator, currentSale) {
        return accumulator + currentSale.price     
      }
      return this.sales.reduce(reducer, 0)
    }
  }
}
</script>