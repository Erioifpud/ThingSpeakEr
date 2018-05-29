<template>
  <div class="card" :class="{ 'power-on': power }">
    <div class="content">
      <p class="title">
        {{ title }}
      </p>
      <p class="desc">
        {{ desc }}
      </p>
    </div>
    <div class="right power-btn" @click="power = !power">
      <ion-icon class="power-icon" name="power"></ion-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeviceCard',
  data () {
    return {
      power: false
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      default: '...'
    }
  }
}
</script>

<style scoped>
.card {
  background-color: #fff;
  /* width: 100vw; */
  height: 100px;
  border-radius: 10px;
  margin: 15px 10px;
  box-sizing: border-box;
  box-shadow: 0 1px 5px #acacac;
  transition: all 0.2s ease-in-out;
}

.power-btn {
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #fff;
  margin: 25px 15px;
  box-shadow: 0 2px 5px #acacac;
  transition: all 0.2s ease-in-out;
}

.content {
  position: absolute;
  padding: 5px 10px;
  text-align: left;
}

.title {
  color: #707b7e;
  font-size: 20px;
  font-weight: bold;
  margin: 10px 5px;
}

.desc {
  color: #7f8586;
  font-size: 18px;
  margin: 10px 5px;
}

.right {
  float: right;
}

.power-on .title {
  color: #fff;
}

.power-on .desc {
  color: rgb(240, 240, 240);
}

.power-on {
  background-color: #35baf1;
  box-shadow: none;
}

.power-on .power-btn {
  box-shadow: none;
}

.power-icon {
  position: absolute;
  font-size: 32px;
  top: 50%;
  left: 50%;
  color: #6e7a7d;
  transform: translate(-50%, -50%);
}
</style>
