<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    mounted () {
      this.$vuetify.init()
    }
  }
</script>

<style>
  @import url('https://unpkg.com/vuetify/dist/vuetify.min.css');
</style>
