<template>
  <div class="card" :class="{ 'power-on': power }">
    <div class="content">
      <p class="title">
        {{ title }}
        <ion-icon v-if="isOtherType" class="icon-alert" name="alert"></ion-icon>
      </p>
      <p class="desc">
        {{ desc }}
      </p>
    </div>
    <template v-if="isSwitch">
      <div class="right power-btn" @click="handleSwitchClick()">
        <ion-icon class="power-icon" name="power"></ion-icon>
      </div>
    </template>
    <template v-else>
      <div class="right value-btn">
        {{ data }}
      </div>
    </template>
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
  methods: {
    handleSwitchClick () {
      var id = this.$route.params.id
      var key = this.$store.state.channelKeys[id].write
      this.$http.post('https://api.thingspeak.com/update.json', {
        api_key: key,
        [this.field]: this.power ? '0' : '1'
      }).then(r => {
        if (r.data instanceof Object) {
          this.power = r.data[this.field] === '0'
        }
      })
    }
  },
  computed: {
    isSensor: function () {
      return this.type === 'Sensor'
    },
    isSwitch: function () {
      return this.type === 'Switch'
    },
    isOtherType: function () {
      return this.type !== 'Sensor' && this.type !== 'Switch'
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
    },
    type: {
      type: String,
      default: undefined
    },
    data: {
      type: String,
      default: undefined
    },
    field: {
      type: String,
      required: true
    }
  },
  mounted () {
    if (this.isSwitch) {
      this.power = this.data && this.data !== '0'
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

.value-btn {
  position: relative;
  width: 100px;
  height: 50px;
  border-radius: 50px;
  background-color: #fff;
  margin: 25px 15px;
  box-shadow: 0 2px 5px #acacac;
  transition: all 0.2s ease-in-out;
  line-height: 50px;
  font-size: 20px;
  color: #707b7e;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
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
