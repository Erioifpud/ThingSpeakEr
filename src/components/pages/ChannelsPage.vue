<template>
  <div class="page">
    <TopBar title="Channels">
      <div class="new-channel" slot="right" @click="openModal()">
        <ion-icon class="add-icon" name="add"></ion-icon>
        <!-- <label>New</label> -->
      </div>
    </TopBar>
    <!-- <DeviceList></DeviceList> -->
    <ChannelList :channels="channels"></ChannelList>
    <ModalDialog
      @cancel="closeModal()"
      @ok="confirmModal()"
      title="New Channel"
      :opening="modalOpen"
    >
      <div slot="content">
        <input ref="nameInput" type="text" placeholder="Name*">
        <input ref="descInput" type="text" placeholder="Description">
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
    openModal () {
      this.modalOpen = true
    },
    closeModal () {
      this.modalOpen = false
    },
    confirmModal () {
      if (this.$refs.nameInput.value.trim() !== '') {
        this.closeModal()
        this.createChannel()
      }
    },
    getChannels () {
      var key = this.$store.state.mainKey
      this.$http
        .get(`https://api.thingspeak.com/channels.json?api_key=${key}`)
        .then(r => {
          this.channels = r.data
          this.$store.commit('setChannelKeys', r)
        })
    },
    createChannel () {
      var name = this.$refs.nameInput.value.trim()
      var desc = this.$refs.descInput.value.trim()
      var key = this.$store.state.mainKey
      this.$http
        .post('https://api.thingspeak.com/channels.json', {
          api_key: key,
          name: name,
          description: desc
        }).then(r => {
          if (r.status === 200) {
            this.getChannels()
          }
        })
    }
  },
  components: {
    TopBar,
    ChannelList,
    ModalDialog
  },
  mounted () {
    this.getChannels()
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

::placeholder {
  color: #d1d0d5;
}

input {
  box-sizing: border-box;
  width: 54vw;
  font-size: 16px;
  border: solid 1px #c1c1c1;
  margin: 10px 0;
  margin-top: 0;
  border-radius: 5px;
  padding: 5px;
  caret-color: #636fcc;
}
</style>
