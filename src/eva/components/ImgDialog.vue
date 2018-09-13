<template>
  <div v-if="display" >
    <div class="cover" @click="hide()">
    </div>
    <div class="img-container">
      <div class="close" @click="hide()"></div>
      <img v-bind:src="url">
      <div class="left" @click="prev()" v-bind:class="{'stop': index === 0}"></div>
      <div class="right" @click="next()" v-bind:class="{'stop': index === imgs.length -1}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'imgDialog',
  data () {
    return {
      display: false,
      index: 0,
      imgs: [],
      url: ''
    }
  },
  methods: {
    show: function (index, imgs) {
      this.index = index
      this.imgs = imgs
      this.url = imgs[index]
      this.display = true
    },
    hide: function () {
      console.log(this)
      this.display = false
    },
    prev: function () {
      console.log(this)
      if (this.index === 0) {
        return
      }
      this.index--
      this.url = this.imgs[this.index]
      console.log(this.url)
    },
    next: function () {
      console.log(this)
      if (this.index >= this.imgs.length - 1) {
        return
      }
      this.index++
      this.url = this.imgs[this.index]
    }
  }
}
</script>

<style scoped>
.cover{
  position: fixed;
  top:0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
  background: #000000;
  opacity: 0.8;
}

.img-container{
  position: fixed;
  z-index: 10004;
  top:50%;
  left: 50%;
  width: 70%;
  height: 80%;
  padding: 20px 0;
  text-align: center;
  background: #000000;
  border-radius: 5px;
  transform: translate(-50%, -50%);
}

.img-container .close{
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

.img-container .left{
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  cursor: url(../assets/left.png), auto;
}

.img-container .right{
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  cursor: url(../assets/right.png), auto;
}
.stop {
  cursor: url(../assets/stop.png), auto!important;
}

</style>
