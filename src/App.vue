<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <VideoJSRecord />
  </div>
</template>

<script>
import VideoJSRecord from './components/VideoJSRecord.vue'

export default {
  name: 'App',
  components: {
    VideoJSRecord
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
