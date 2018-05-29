<template>
  <div class="page">
    <img class="logo" src="https://thingspeak.com/assets/thingspeak_logo_white.png" alt="logo">
    <HistoryInput ref="input" />
    <button @click="handleConfirm()" class="confirm-btn">Confirm</button>
  </div>
</template>

<script>
import HistoryInput from '@/components/HistoryInput'

export default {
  components: {
    HistoryInput
  },
  methods: {
    handleConfirm () {
      var key = this.$refs.input.currentKey
      if (key !== '') {
        this.$store.commit('setMainKey', key)
        this.$router.push({ name: 'Channels' })
        var storage = window.localStorage
        var list = storage.getItem('history').split(',').slice(0, 4)
        if (list.length !== 0 && key !== list[0]) {
          storage.setItem('history', `${key},${list.join(',')}`)
        }
      }
    }
  }
}
</script>

<style scoped>
.page {
  background-color: #2db3eb;
  width: 100vw;
  height: 100vh;
}

.logo {
  margin-top: 60px;
}

.confirm-btn {
  position: absolute;
  width: 80vw;
  height: 40px;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 5px #08587a;
  font-size: 22px;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: #5f6b6e;
}
</style>
