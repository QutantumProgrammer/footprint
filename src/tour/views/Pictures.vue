<template>
  <div class="container">
    <div class="collection" v-for="(item, index) in imgs" v-bind:key="index" v-on:click="zoom(item.url, index)">
      <img v-bind:src="item.previewUrl">
    </div>
    <img-dialog ref="zoomImg" :imgs="imgs"></img-dialog>
  </div>
</template>

<script>
import imgDialog from '../components/ImgDialog.vue'
import globalData from '../components/global-data'
import imgUrl from '../components/img-url'

export default {
  name: 'Pictures',
  components: {
    imgDialog
  },
  data () {
    return {
      globalData,
      imgs: []
    }
  },
  methods: {
    zoom: function (url, index) {
      this.$refs.zoomImg.show(url, index)
    }
  },
  mounted: function () {
    this.imgs = imgUrl[this.$route.params.id]
    console.log(this.$route.params.id)
  }
}
</script>

<style scoped>
  @media (max-width: 1366px) {
    .container {
      column-count: 3 !important;
    }
  }

  @media (max-width: 800px) {
    .container {
      width: calc(100% - 20px)!important;
      column-gap: 8px!important;
    }

    .container .collection {
      margin-bottom: 8px!important;
    }
  }

  .container {
    width: 90%;
    margin: 0 auto;
    font-size: 16px;
    column-count: 4;
    column-gap: 20px;
    column-rule-width: 0;
  }

  .container .collection {
    display: inline-block;
    box-sizing: border-box;
    margin-bottom: 20px;
    cursor: url(../assets/zoom-in.png), auto;
  }

  .container .collection img {
    width: 100%;
  }
</style>
