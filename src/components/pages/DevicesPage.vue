<template>
  <div class="page">
    <TopBar title="Devices">
      <div class="new-device" slot="right">
        <ion-icon class="add-icon" name="add"></ion-icon>
        <!-- <label>New</label> -->
      </div>
    </TopBar>
    <DeviceList></DeviceList>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar'
import DeviceList from '@/components/DeviceList'

export default {
  components: {
    TopBar,
    DeviceList
  },
  mounted () {
    var id = this.$route.params.id
    if (!id) {
      this.$router.go({ path: '/' })
    }

    var readKey = this.$store.state.channelKeys[id].read
    this.$http.get(`https://api.thingspeak.com/channels/${id}/feeds.json?api_key=${readKey}`)
      .then(r => {
        console.log(r.data)
      })
  }
}
</script>

<style scoped>
.page {
  background-color: #fff;
  width: 100vw;
  height: 100vh;
}

.new-device {
  font-size: 20px;
  line-height: 60px;
  margin: 5px;
  font-weight: bold;
}

.add-icon {
  font-size: 30px;
}
</style>
