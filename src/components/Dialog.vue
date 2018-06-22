<template>
  <div v-if="display" >
    <div class="cover" @click="hide()">
    </div>
    <div class="img-container" @click="hide()">
      <img v-bind:src="url">
    </div>
  </div>
</template>

<script>
export default {
  name: 'vDialog',
  data () {
    return {
      display: false
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
  top:0;
  right: 0;
  bottom: 0;
  left: 0;
  background: none;
  z-index: 10001;
  text-align: center;
}

.img-container img {
  position: fixed;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width:  60%;
  max-height: 90%;
}

</style>
