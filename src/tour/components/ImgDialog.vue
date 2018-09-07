<template>
  <div v-if="display">
    <div class="cover" @click="hide()">
    </div>
    <div class="img-container">
      <div class="close" @click="hide()"></div>
      <img v-bind:src="url">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'imgDialog',
    data () {
      return {
        display: false,
        url: ''
      }
    },
    methods: {
      show: function (url) {
        this.url = url
        this.display = true
      },
      hide: function () {
        this.display = false
      }
    }
  }
</script>

<style scoped>
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
    position: fixed;
    z-index: 10004;
    top: 50%;
    left: 50%;
    width: 70%;
    height: 80%;
    padding: 20px 0;
    text-align: center;
    background: #000000;
    border-radius: 5px;
    transform: translate(-50%, -50%);
  }

  .img-container .close {
    position: absolute;
    z-index: 10001;
    top: 20px;
    right: 20px;
    width: 24px;
    height: 24px;
    background-image: url(../assets/close.png);
    cursor: pointer;
  }

  .img-container img {
    max-width: 100%;
    max-height: 100%;
    user-select: none;
  }

</style>
