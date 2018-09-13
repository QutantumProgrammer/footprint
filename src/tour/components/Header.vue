<template>
  <div class="header">
    <div class="head-icon">
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
  methods: {}
}
</script>

<style scoped>
  .header {
    height: 200px;
    overflow: hidden;
  }

  .header .head-icon {
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
