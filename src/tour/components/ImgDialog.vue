<template>
  <div class="scope-root">
    <div class="cover" @click="hide()" v-if="display">
    </div>
    <div class="loading" v-if="display">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="img-container" @click="hide()" v-bind:class="{'show': display && !loading}">
        <img @touchstart="moveStart"
             @touchmove="moving"
             @touchend="moveEnd"
             v-bind:src="url"
             v-bind:style="{ left: 'calc(' + offsetPercentX + '% + ' + offsetX + 'px)'}"
             v-bind:class="{'img-move-transition': switchingImg}"
             v-on:transitionend="afterLeave">
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
      loading: true,
      switchingImg: false,
      touchStartX: 0,
      offsetX: 0,
      offsetPercentX: 50,
      imgIndex: 0,
      url: ''
    }
  },
  props: ['imgs'],
  methods: {
    show: function (url, imgIndex) {
      this.offsetPercentX = 50
      let img = new Image()
      img.src = url
      img.onload = () => {
        this.url = url
        this.loading = false
        this.imgIndex = imgIndex
      }

      this.display = true
      this.globalData.scrollLocked = true
    },
    hide: function () {
      this.url = null
      this.loading = true
      this.display = false
      this.globalData.scrollLocked = false
    },
    moveStart: function (event) {
      if (this.switchingImg) return
      if (event.changedTouches.length != 1) return
      let touch = event.changedTouches[0]
      this.touchStartX = touch.clientX
      this.offsetPercentX = 50
    },
    moving: function (event) {
      if (this.switchingImg) return
      if (event.changedTouches.length != 1) return
      let touch = event.changedTouches[0]
      let currentX = touch.clientX
      this.offsetX = currentX - this.touchStartX
    },
    moveEnd: function (event) {
      if (this.switchingImg) return
      this.offsetX = 0
      if (event.changedTouches.length != 1) return

      let touch = event.changedTouches[0]
      let currentX = touch.clientX
      let diffX = currentX - this.touchStartX
      if (Math.abs(diffX) < 45) {
        return
      }

      if (diffX > 0 && this.imgIndex <= 0 ) return

      if (diffX < 0 && this.imgIndex >= this.imgs.length ) return

      this.offsetPercentX = diffX < 0 ? -100: 100
      diffX < 0 ? this.imgIndex++ : this.imgIndex--
      this.switchingImg = true
    },
    afterLeave: function () {
      this.switchingImg = false
      this.url = null
      this.loading = true
      this.show(this.imgs[this.imgIndex].url, this.imgIndex)
    }
  }
}
</script>

<style scoped>
  .scope-root {
    cursor: url(../assets/zoom-out.png), auto;
  }

  .img-move-transition {
    transition: all .3s!important;
    transform: translate(0, -50%)!important;
  }

  .loading {
    display: inline-block;
    position: fixed;
    width: 35px;
    height: 60px;
    z-index: 10001;
    background: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .loading span{
    background-color: #ffffff;
    width: 7px;
    position: absolute;
    top:20px;
    bottom: 20px;
    display: inline-block;
    vertical-align: middle;
  }

  .loading span:nth-child(1){
    animation: busy-animation .9s infinite alternate;
    left: 0;
  }

  .loading span:nth-child(2){
    animation: busy-animation .9s .3s infinite alternate;
    left: 14px;
  }

  .loading span:nth-child(3){
    animation: busy-animation .9s .6s infinite alternate;
    left: 28px;
  }

  @keyframes busy-animation
  {
    0%   {top: 0; bottom: 0;}
    55%  {top: 20px; bottom: 20px;}
    100% {top: 20px; bottom: 20px;}
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
    position: absolute;
    left: 50%;
    top: 50%;
    max-width: 100%;
    max-height: 100%;
    user-select: none;
    transform: translate(-50%, -50%);
  }

</style>
