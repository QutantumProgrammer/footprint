<template>
  <div class="header">
    <div class="head-icon" v-on:click="goHome()">
      <img src="../assets/head-icon.jpg">
      <span>Footprint</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    goHome: function (id) {
      this.$router.push({name: 'HomePage'})
    }
  }
}
</script>

<style scoped>

  @media (max-width: 800px) {
    .header .head-icon {
      margin: 40px auto 0 auto!important;
    }
  }

  .header {
    user-select: none;
    height: 200px;
    overflow: hidden;
  }

  .header .head-icon {
    cursor: pointer;
    position: relative;
    margin: 40px 0 0 150px;
    width: 100px;
    font-size: 20px;
    text-align: center;
  }

  .header .head-icon :after {
    position: absolute;
    top: 30px;
    right: 0;
    content: ' ';
    border-top: solid 40px transparent;
    border-right: solid 40px #0a0a0a;
  }

  .header .head-icon img {
    width: 70px;
    border-radius: 4px;
  }

</style>
