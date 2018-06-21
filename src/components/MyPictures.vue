<template>
  <div class="container">
    <div v-for="(item, index) in records" v-bind:key="index" class="panel">
      <div class="title">
        {{item.title}}
      </div>
      <div v-for="(url, subIndex) in item.imgs" v-bind:key="subIndex" class="img-container" @click="zoom(url)">
        <img v-bind:src="url"/>
      </div>
    </div>

    <v-dialog ref="zoomImg"></v-dialog>
  </div>
</template>

<script>
import globalData from './GlobalData'
import vDialog from './Dialog.vue'
export default {
  name: 'MyPictures',
  components: {
    vDialog
  },
  data () {
    return {
      globalData,
      msg: 'Welcome to Your Vue.js App',
      records: [
        {
          title: '日本之行',
          imgs: [
            '/static/JP/jp_1.JPG',
            '/static/JP/jp_2.JPG',
            '/static/JP/jp_3.JPG',
            '/static/JP/jp_4.JPG',
            '/static/JP/jp_5.JPG',
            '/static/JP/jp_6.JPG',
            '/static/JP/jp_7.JPG',
            '/static/JP/jp_8.JPG',
            '/static/JP/jp_9.JPG'
          ]
        },
        {
          title: '香港之行',
          imgs: [
            '/static/HK/hk_1.JPG',
            '/static/HK/hk_2.JPG',
            '/static/HK/hk_3.JPG',
            '/static/HK/hk_4.JPG',
            '/static/HK/hk_5.JPG',
            '/static/HK/hk_6.JPG',
            '/static/HK/hk_7.JPG',
            '/static/HK/hk_8.JPG',
            '/static/HK/hk_9.JPG'
          ]
        }
      ]
    }
  },
  methods: {
    zoom: function (url) {
      this.$refs.zoomImg.show(url)
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
  /*border-radius: 5px;*/
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
