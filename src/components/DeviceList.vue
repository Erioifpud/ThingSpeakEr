<template>
  <div class="list">
    <DeviceCard title="Device 1"></DeviceCard>
  </div>
</template>

<script>
import DeviceCard from '@/components/DeviceCard'

export default {
  name: 'DeviceList',
  components: {
    DeviceCard
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
