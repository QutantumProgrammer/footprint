<template>
  <div class="wrapper">
    <div class="black" v-bind:class="{'end':this.end }"></div>
    <div class="white" v-bind:class="{'end':this.end }"></div>
    <div class="jing" v-bind:class="{'end':this.end }">杨同学: 平淡的日子也会泛着亮光</div>
    <div class="chen" v-bind:class="{'end':this.end }">我们的相遇让这亮光缤纷多彩 :赵老师</div>
  </div>
</template>

<script>

export default {
  name: 'Chat',
  data () {
    return {
      end: false,
    }
  },
  mounted: function () {
    setTimeout(() => {
      this.end = true
    }, 20)
  }
}
</script>

<style scoped>

.wrapper {
  width: 100%;
}

.black {
  position: fixed;
  width: 200%;
  height: 200%;
  top: -240%;
  right: -60%;
  background-color: #000000;
  transform: rotate(-45deg);
  transition: all .6s;
}
.black.end {
  top: -130%;
}

.white {
  position: fixed;
  width: 200%;
  height: 200%;
  left: -60%;
  bottom: -240%;
  background-color: rgba(255, 255, 255, 0.99);
  transform: rotate(-45deg);
  transition: all .6s;
}

.white.end {
  bottom: -130%;
}

.jing {
  font-size: 18px;
  position: fixed;
  top: -40%;
  left: 10%;
  transition: all 1.2s;
  color: #888888;
}

.jing.end {
  top: 40%;
}

.chen {
  font-size: 18px;
  position: fixed;
  bottom: -40%;
  right: 10%;
  transition: all 1.2s;
  color: #888888;
}

.chen.end {
  bottom: 40%;
}

</style>
