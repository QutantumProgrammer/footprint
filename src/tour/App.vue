<template>
  <div id="app">
    <Header></Header>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import globalData from './components/global-data'
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    Header
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
  background: #0a0a0a;
  color: #ffffff;
}
</style>
