<template>
  <div class="container">
    <div class="collection" v-for="(item, index) in footprints" v-bind:key="index"
         @click="goDetail(item.id)"
         @touchstart="focus()"
         @touchend="leave()">
      <img v-bind:src="item.previewImg">
      <div class="cover-top" v-bind:class="{'active': hover}"></div>
      <div class="cover-bottom" v-bind:class="{'active': hover}"></div>
      <div class="title" v-bind:class="{'active': hover}">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
import globalData from './global-data'
export default {
  name: 'HomePage',
  components: {},
  data () {
    return {
      hover: false,
      footprints: [
        {
          title: 'HK',
          previewImg: '../static/preview/hk.jpg',
          id: 'hk'
        },
        {
          title: 'にほんこ',
          previewImg: '../static/preview/jp.jpg',
          id: 'jp'
        },
        {
          title: '渝',
          previewImg: '../static/preview/cq.jpg',
          id: 'cq'
        }
      ],
      globalData
    }
  },
  methods: {
    goDetail: function (id) {
      this.$router.push({name: 'Pictures', params: {id}})
    },
    focus: function () {
      this.hover = true
    },
    leave: function () {
      this.hover = false
    }
  }
}
</script>

<style scoped>
  @media (max-width: 1000px) {
    .container {
      width: 100% !important;
      margin: 0 !important;
    }

    .container .collection {
      padding: 0 !important;
    }
  }

  .container {
    font-size: 0;
    width: 60%;
    margin: 10px auto;
  }

  .container .collection {
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    display: inline-block;
    width: 50%;
    padding: 10px;
    cursor: pointer;
  }

  .container .collection .title {
    position: absolute;
    left: 50%;
    top: 50%;
    display: inline-block;
    font-size: 24px;
    color: #ffffff;
    opacity: 0;
    transform: translate(-50%, -50%);
    transition: all .5s;
    user-select: none;
  }

  .container .collection .cover-top {
    box-sizing: border-box;
    position: absolute;
    top: -150%;
    left: 0;
    width: 130%;
    height: 100%;
    background: rgb(0, 0, 0);
    opacity: .7;
    transform: rotate(26.56deg);
    transition: all .5s;
  }

  .container .collection .cover-bottom {
    box-sizing: border-box;
    position: absolute;
    top: 150%;
    left: -20%;
    width: 130%;
    height: 100%;
    background: rgb(0, 0, 0);
    opacity: .7;
    transform: rotate(26.56deg);
    transition: all .5s;
  }

  .container .collection .cover-bottom.hover {
    top: 52% !important;
  }

  .container .collection .cover-bottom.hover {
    top: -42% !important;
  }

  .container .collection .title.hover {
    opacity: 1 !important;
  }

  .container .collection:hover .title {
    opacity: 1 !important;
  }

  .container .collection:hover .cover-top {
    top: -42% !important;
  }

  .container .collection:hover .cover-bottom {
    top: 52% !important;
  }

  .container .collection img {
    width: 100%;
    border-radius: 1px;
  }
</style>
