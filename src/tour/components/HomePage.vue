<template>
  <div class="container">
    <div class="collection" v-for="(item, index) in footprints" v-bind:key="index" v-on:click="goDetail(item.id)">
      <img v-bind:src="item.previewImg">
      <div class="cover-top"></div>
      <div class="cover-bottom"></div>
      <div class="title">{{item.title}}</div>
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
      footprints: [
        {
          title: 'HK',
          previewImg: 'static/preview/hk.jpg',
          id: 'hk'
        },
        {
          title: 'にほんこ',
          previewImg: 'static/preview/jp.jpg',
          id: 'jp'
        },
        {
          title: '渝',
          previewImg: 'static/preview/cq.jpg',
          id: 'cq'
        }
//        ,
//        {
//          title: '沪',
//          previewImg: 'static/preview/hk_1.jpg'
//        },
//        {
//          title: '杭',
//          previewImg: 'static/preview/hk_1.jpg'
//        },
//        {
//          title: '魔都',
//          previewImg: 'static/preview/hk_1.jpg'
//        },
//        {
//          title: '鹏城',
//          previewImg: 'static/preview/hk_1.jpg'
//        }
      ],
      globalData
    }
  },
  methods: {
    goDetail: function (id) {
      this.$router.push({name: 'Pictures', params: {id}})
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
