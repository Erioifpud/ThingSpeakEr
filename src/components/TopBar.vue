<template>
  <div class="topbar">
    <div class="left">
      <ion-icon
        class="back-icon"
        name="arrow-round-back"
        @click="handleBack()"
      >
      </ion-icon>
    </div>
    <div class="mid">
      <label class="title">{{ title }}</label>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  data () {
    return {

    }
  },
  methods: {
    handleBack () {
      this.$router.back()
    }
  },
  props: {
    title: {
      type: String,
      default: 'UNDEFINED'
    }
  }
}
</script>

<style scoped>
.topbar {
  width: 100vw;
  height: 60px;
  /* background-color: gold; */
  color: #6d787b;
  line-height: 60px;
  box-shadow: 0 1px 5px #acacac;
}

.left {
  float: left;
}

.right {
  float: right;
}

.mid {
  margin: auto;
  text-align: center;
}

.title {
  position: absolute;
  margin: 0;
  left: 50%;
  font-size: 20px;
  transform: translateX(-50%);
}

.back-icon {
  margin: 5px;
  font-size: 32px;
}
</style>
