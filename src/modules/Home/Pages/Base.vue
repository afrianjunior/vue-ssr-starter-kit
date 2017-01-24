<template>
  <div>
    <div class="opening">
      <div class="opening__box">
        <img src="../../../assets/logo.png" alt="Vue2 SSR"/>
        <div class="opening__title">Vue 2 Server Side Rendering</div>
        <div class="opening__suggest">
          <a href="https://github.com/afrianjunior" target="_blank">Github</a>
          <a href="https://github.com/afrianjunior/CSS-kit" target="_blank">CSS Kit</a>
        </div>
        <v-progress-linear v-bind:indeterminate="true" success></v-progress-linear>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        // data here
      }
    },
    mounted () {
      // first of all
    },
    computed: {},
    methods: {},
    components: {}
  }
</script>

<style>
  .opening {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .opening__box {
    text-align: center;
  }

  .opening__box > img {
    margin-bottom: 2em;
  }

  .opening__box > .opening__title {
    text-align: center;
    color: rgb(108, 108, 108);
    font-family: 'Open Sans', sans-serif;
    font-weight: 100;
    font-size: 40px;
  }

  .opening__box > .opening__suggest {
    font-family: 'Open Sans', sans-serif;
    margin: 1em 0 2em 0;
    font-size: 16px;
  }

  .opening__box > .opening__suggest a {
    color: rgb(29, 180, 62);
    text-decoration: none;
    margin-right: 20px;
  }

  .opening__box > .opening__suggest a:last-child {
    margin-right: 0;
  }
</style>
