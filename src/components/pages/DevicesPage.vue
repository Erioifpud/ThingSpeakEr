<template>
  <div class="page">
    <TopBar title="Devices">
      <div @click="openModal()" class="new-device" slot="right">
        <ion-icon class="add-icon" name="add"></ion-icon>
        <!-- <label>New</label> -->
      </div>
    </TopBar>
    <DeviceList :channelData="data"></DeviceList>
    <ModalDialog
      @cancel="closeModal()"
      @ok="confirmModal()"
      title="New/Edit Device"
      :opening="modalOpen"
    >
      <div slot="content">
        <input ref="nameInput" type="text" placeholder="Device Name*">
        <input ref="numInput" type="text" placeholder="Device Num (1~8)*">
        <!-- <input type="checkbox" value="123"> -->
        <SwitchButton ref="typeSwitch" />
      </div>
    </ModalDialog>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar'
import DeviceList from '@/components/DeviceList'
import ModalDialog from '@/components/ModalDialog'
import SwitchButton from '@/components/SwitchButton'

export default {
  data () {
    return {
      data: {},
      modalOpen: false
    }
  },
  methods: {
    openModal () {
      this.modalOpen = true
    },
    confirmModal () {
      this.createDevice()
      this.closeModal()
    },
    closeModal () {
      this.modalOpen = false
    },
    processDeviceName () {
      var name = this.$refs.nameInput.value.trim()
      var type = this.$refs.typeSwitch.checked ? 'Sensor' : 'Switch'
      var fullName = `${type}|${name}`
      return fullName
    },
    createDevice () {
      var id = this.$route.params.id
      var num = this.$refs.numInput.value.trim()
      var key = this.$store.state.mainKey
      var data = {
        api_key: key,
        [`field${num}`]: this.processDeviceName()
      }
      // data = Qs.stringify(data)
      this.$http.put(`https://api.thingspeak.com/channels/${id}.json`, data)
        .then(r => {
          this.getDevices()
        })
    },
    getDevices () {
      var id = this.$route.params.id
      var readKey = this.$store.state.channelKeys[id].read
      this.$http.get(`https://api.thingspeak.com/channels/${id}/feeds.json?api_key=${readKey}`)
        .then(r => {
          this.data = r.data
        })
    }
  },
  components: {
    TopBar,
    DeviceList,
    ModalDialog,
    SwitchButton
  },
  mounted () {
    // var id = this.$route.params.id
    // if (!id) {
    //   this.$router.go({ path: '/' })
    // }
    this.getDevices()
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

input[type="text"] {
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

/* input[type="checkbox"] {
  display: block;
  box-sizing: border-box;
  font-size: 16px;
  border: solid 1px #c1c1c1;
  margin: 10px 0;
  margin-top: 0;
  border-radius: 5px;
  padding: 5px;
  caret-color: #636fcc;
}

input[type="checkbox"]:checked::after {
  content: 'Sensor';
  margin: 15px;
}

input[type="checkbox"]::after {
  content: 'Switch';
  margin: 15px;
} */
</style>
