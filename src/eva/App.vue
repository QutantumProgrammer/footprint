<template>
  <div id="app" v-bind:class="{'eva': globalData.evaTheme}">
    <div class="bg"></div>
    <top></top>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import top from './components/top.vue'
import globalData from './components/GlobalData.js'
export default {
  name: 'App',
  components: {
    top
  },
  data () {
    return {
      globalData
    }
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: consolas;
  font-size: 0;
}

.bg {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-color: #161616;
}

.eva .bg {
  background-image: url(assets/bg-black.png);
  background-attachment: fixed;
  background-repeat: repeat;
  background-size: 550px;
}

#app {
  font-family: consolas, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  z-index: 999;
  width: 1000px;
  margin: 125px auto 0 auto;
}
</style>
