<template>
  <div class="head" v-bind:class="{'eva': globalData.evaTheme}">
    <div class="container">
      <div class="left-line">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <!--<div>-->
      <!--<span class="top-short-line"></span>-->
      <!--<span class="top-short-line"></span>-->
      <!--<span class="top-short-line"></span>-->
      <!--<span class="top-short-line"></span>-->
      <!--</div>-->

      <img src="../assets/nerv.png" v-if="!globalData.evaTheme" @click="changeCurrentTheme()"/>
      <img src="../assets/magic8.png" v-if="globalData.evaTheme" @click="changeCurrentTheme()"/>

      <div>
        <span class="bottom-short-line"></span>
        <span class="bottom-short-line"></span>
        <span class="bottom-short-line"></span>
        <span class="bottom-short-line"></span>
      </div>

    </div>
  </div>
</template>

<script>
import globalData from './GlobalData.js'
export default {
  data () {
    return {
      globalData
    }
  },
  methods: {
    changeCurrentTheme: function () {
      this.globalData.evaTheme = !this.globalData.evaTheme
    }
  }
}
</script>

<style scoped>
  .head {
    box-sizing: border-box;
    position: fixed;
    top: 0;
    z-index: 9999;
    padding: 4px;
    width: 100%;
    background: #ff6535;
  }

  .eva {
    background: #260000;
  }

  .container {
    position: relative;
    color: #ffad00;
    font-size: 24px;
    height: 100px;
    line-height: 100px;
  }

  .eva .container {
    background: #300000;
  }

  .eva .top-short-line {
    position: absolute;
    top: 5px;
    height: 8px;
    width: 2px;
    background: #ff7800;
  }

  .eva .bottom-short-line {
    position: absolute;
    bottom: 5px;
    height: 8px;
    width: 2px;
    background: #ff7800;
  }

  .left-line {
    display: none;
  }

  .eva .left-line {
    display: block;
    position: absolute;
    top: 5px;
    bottom: 5px;
    left: 10px;
  }

  .left-line > div:nth-child(1) {
    width: 2px;
    height: 8px;
    margin-bottom: 5px;
    background: #ff7800;
  }

  .left-line > div:nth-child(2) {
    width: 2px;
    height: 20px;
    background: #ff7800;
  }

  .left-line > div:nth-child(3) {
    width: 8px;
    height: 2px;
    background: #ff7800;
    transform: translateY(-12px);
  }

  .left-line > div:nth-child(4) {
    width: 2px;
    height: 50px;
    margin-top: 5px;
    background: #84d904;
  }

  .top-short-line:nth-child(1) {
    left: 20%;
  }

  .top-short-line:nth-child(2) {
    left: 40%;
  }

  .top-short-line:nth-child(3) {
    left: 60%;
  }

  .top-short-line:nth-child(4) {
    left: 80%;
  }

  .bottom-short-line:nth-child(1) {
    left: 20%;
  }

  .bottom-short-line:nth-child(2) {
    left: 40%;
  }

  .bottom-short-line:nth-child(3) {
    left: 60%;
  }

  .bottom-short-line:nth-child(4) {
    left: 80%;
  }

  .head img {
    display: inline-block;
    margin-left: 50px;
    width: 60px;
    vertical-align: middle;
    cursor: pointer;
  }

  .eva .head img {
    animation: opacity 2s infinite linear;
  }

  /*.head img:hover{*/
  /*animation: rotate 2s infinite linear!important;*/
  /*}*/

  @keyframes opacity {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

</style>
