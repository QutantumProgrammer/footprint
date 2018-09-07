<template>
  <div class="container">
    <div class="collection" v-for="(item, index) in imgs" v-bind:key="index" v-on:click="zoom(item.url)">
      <img v-bind:src="item.url">
    </div>
    <img-dialog ref="zoomImg"></img-dialog>
  </div>
</template>

<script>
  import imgDialog from '../components/ImgDialog.vue'
  import globalData from '../components/global-data'
  import imgUrl from '../components/url-config/img-url'

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
      zoom: function (url) {
        this.$refs.zoomImg.show(url)
      }
    },
    mounted: function () {
      this.imgs = imgUrl[this.$route.params.id]
    }
  }
</script>

<style scoped>
  @media (max-width: 1366px) {
    .container {
      column-count: 3 !important;
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
