<template>
  <div>
    <h1>La página que busca no está disponible</h1>
    <button @click="home">Volver al inicio</button>
  </div>
</template>
<script>
export default {
  name: 'NotFound',
  methods: {
    home(){
      this.$router.push('/')
    }
  },
}
</script>