<template>
  <div class="container">
    <div v-for="(item, index) in records" v-bind:key="index" class="panel">
      <div class="title">
        {{item.title}}
      </div>
      <div v-for="(url, subIndex) in item.imgs" v-bind:key="subIndex" class="img-container" @click="zoom(subIndex, item.imgs)">
        <img v-bind:src="url"/>
      </div>
    </div>

    <img-dialog ref="zoomImg"></img-dialog>
  </div>
</template>

<script>
import globalData from './GlobalData'
import imgDialog from './ImgDialog.vue'
export default {
  name: 'MyPictures',
  components: {
    imgDialog
  },
  data () {
    return {
      globalData,
      msg: 'Welcome to Your Vue.js App',
      records: [
        {
          title: 'JP',
          imgs: [
            'static/jp/jp_1.JPG',
            'static/jp/jp_2.JPG',
            'static/jp/jp_3.JPG',
            'static/jp/jp_4.JPG',
            'static/jp/jp_5.JPG',
            'static/jp/jp_6.JPG',
            'static/jp/jp_7.JPG',
            'static/jp/jp_8.JPG',
            'static/jp/jp_9.JPG'
          ]
        },
        {
          title: 'HK',
          imgs: [
            'static/hk/hk_1.JPG',
            'static/hk/hk_2.JPG',
            'static/hk/hk_3.JPG',
            'static/hk/hk_4.JPG',
            'static/hk/hk_5.JPG',
            'static/hk/hk_6.JPG',
            'static/hk/hk_7.JPG',
            'static/hk/hk_8.JPG',
            'static/hk/hk_9.JPG'
          ]
        }
      ]
    }
  },
  methods: {
    zoom: function (index, imgs) {
      this.$refs.zoomImg.show(index, imgs)
    }
  }
}
</script>

<style scoped>
.container {
  font-size: 16px;
}

.eva .container {
}

.panel {
  padding-bottom: 30px;
  margin-bottom: 30px;
  background: #ffffff;
  border-radius: 5px;
  overflow: hidden;
}

.eva .panel {
  background: #300000;
}

.panel .title{
  padding:30px 0;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #000000;
  background: #ff6535;
}

.eva .panel .title{
  color: #84d904;
}

.panel .img-container{
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  width: 317px;
  height: 333px;
  margin: 8px;
  vertical-align: top;
  background: #000000;
  border: 1px solid #a9a9a9;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
}

.panel img{
  position: absolute;
  top:50%;
  display: inline-block;
  width: 100%;
  vertical-align: middle;
  transform: translateY(-50%);
}

</style>
