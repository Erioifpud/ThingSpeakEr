<template>
  <div class="list">
    <DeviceCard
      v-for="(val, key) in filterKeys(/field\d/)"
      :key="key"
      :title="`[${val[5]}] ${getTitle(val)}`"
      :type="getType(val)"
      :data="getDataByKey(val)"
      :field="val"
    >

    </DeviceCard>
  </div>
</template>

<script>
import DeviceCard from '@/components/DeviceCard'

export default {
  name: 'DeviceList',
  data () {
    return {
      devicesData: []
    }
  },
  methods: {
    filterKeys (pattern) {
      var keys = []
      var obj = this.channelData.channel
      for (var key in obj) {
        if (obj.hasOwnProperty(key) && pattern.test(key)) {
          keys.push(key)
        }
      }
      return keys
    },
    getType (key) {
      var fullName = this.channelData.channel[key]
      var names = fullName.split('|')
      if (names.length !== 1) {
        return names[0]
      } else {
        return undefined
      }
    },
    getTitle (key) {
      var type = this.getType(key)
      var name = this.channelData.channel[key].split('|')
      if (type) {
        return name[1]
      } else {
        return name[0]
      }
    },
    getLastData () {
      var results = []
      var feeds = this.channelData.feeds
      feeds.forEach(obj => {
        for (var i of [0, 1, 2, 3, 4, 5, 6, 7]) {
          var field = `field${i + 1}`
          if (!obj.hasOwnProperty(field)) {
            break
          }
          var val = obj[field]
          if (val) {
            results[i] = val
          }
        }
      })
      this.devicesData = results
    },
    getDataByKey (key) {
      var idx = parseInt(key.replace('field', ''))
      return this.devicesData[idx - 1]
    }
  },
  components: {
    DeviceCard
  },
  props: {
    channelData: {
      type: Object,
      required: true
    }
  },
  watch: {
    channelData: function (newVal, oldVal) {
      this.getLastData()
    }
  }
}
</script>

<style scoped>
.list {
  /* background-color: gold; */
  width: 100vw;
  height: calc(100vh - 60px);
  padding: 5px;
  box-sizing: border-box;
}
</style>
