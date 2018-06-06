<template>
  <div id="app">
    <top></top>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import top from './components/top.vue'
export default {
  name: 'App',
  components: {
    top
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: consolas;
  font-size: 0;
  background-color: #000000;
  background-image: url(./assets/bg-black.png);
  background-repeat: repeat;
  background-size: 550px;
}

#app {
  font-family: consolas, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

.content {
  width: 1000px;
  margin: 105px auto 0 auto;
}
</style>
