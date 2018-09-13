<template>
  <div class="scope-root" >
    <div class="cover" @click="hide()" v-if="display">
    </div>
    <div class="img-container" @click="hide()" v-bind:class="{'show': display}">
      <img v-bind:src="url">
    </div>
  </div>
</template>

<script>
import globalData from '../components/global-data'
export default {
  name: 'imgDialog',
  data () {
    return {
      globalData,
      display: false,
      url: ''
    }
  },
  methods: {
    show: function (url) {
      this.url = url
      this.display = true
      this.globalData.scrollLocked = true
    },
    hide: function () {
      this.display = false
      this.globalData.scrollLocked = false
    }
  }
}
</script>

<style scoped>
  .scope-root {
    cursor: url(../assets/zoom-out.png), auto;
  }

  .show {
    opacity: 1!important;
    transform: scale(1)!important;
  }
  .cover {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10000;
    background: #000000;
    opacity: 0.8;
  }

  .img-container {
    opacity: 0;
    position: fixed;
    z-index: 10004;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 20px 0;
    text-align: center;
    background: #000000;
    border-radius: 5px;
    transition: opacity .4s;
    transform: scale(0);
  }

  .img-container img {
    max-width: 100%;
    max-height: 100%;
    user-select: none;
  }

</style>
