<template>
  <div class="page">
    <TopBar title="Channels">
      <div class="new-channel" slot="right" @click="handleAddChannel()">
        <ion-icon class="add-icon" name="add"></ion-icon>
        <!-- <label>New</label> -->
      </div>
    </TopBar>
    <!-- <DeviceList></DeviceList> -->
    <ChannelList :channels="channels"></ChannelList>
    <ModalDialog :opening="modalOpen">
      <div slot="content">
        <input type="text" placeholder="Name">
      </div>
    </ModalDialog>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar'
import ChannelList from '@/components/ChannelList'
import ModalDialog from '@/components/ModalDialog'

export default {
  data () {
    return {
      channels: [],
      modalOpen: false
    }
  },
  methods: {
    handleAddChannel () {
      this.modalOpen = !this.modalOpen
    }
  },
  components: {
    TopBar,
    ChannelList,
    ModalDialog
  },
  mounted () {
    var key = this.$store.state.mainKey
    this.$http
      .get(`https://api.thingspeak.com/channels.json?api_key=${key}`)
      .then(r => {
        console.log(r.data)
        this.channels = r.data
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

.new-channel {
  font-size: 20px;
  line-height: 60px;
  margin: 5px;
  font-weight: bold;
}

.add-icon {
  font-size: 30px;
}

input {
  box-sizing: border-box;
  width: 54vw;
  font-size: 18px;
  border: solid 1px #c1c1c1;
  margin: 10px 0;
  margin-top: 0;
  border-radius: 5px;
  padding: 5px;
}
</style>
