<template>
  <div id="app" v-bind:class="{'scroll-lock': globalData.scrollLocked}">
    <Header v-if="this.$route.path !== '/chat'"></Header>
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
  },
  mounted: function () {
    console.log(this.$route.path)
  }
}
</script>

<style>
  body {
    margin: 0;
    font-family: consolas;
    font-size: 0;
    background: rgb(19, 19, 19);
    color: #ffffff;
    user-select: none;
  }

  #app {
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
  }

  .scroll-lock {
    overflow: hidden!important;
  }
</style>
