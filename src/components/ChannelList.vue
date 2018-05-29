<template>
  <div class="list">
    <ul class="channel-list">
      <li
        v-for="channel in channels"
        :key="channel.id"
        class="channel-item"
        @click="handleClick(channel.id)"
      >
        <p class="title">
          <ion-icon :name="channel.public_flag ? 'unlock' : 'lock'"></ion-icon>
          {{ channel.name }}
        </p>
        <p class="content">
          {{ channel.description }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ChannelList',
  props: {
    channels: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleClick (id) {

    }
  }
}
</script>

<style scoped>
.list {
  /* background-color: gold; */
  width: 100vw;
  height: calc(100vh - 60px);
  padding: 5px 10px;
  box-sizing: border-box;
}

.channel-list {
  list-style: none;
  padding: 0;
}

.channel-item {
  text-align: left;
  padding: 0 10px;
  border-bottom: solid 1px #c5c5c5;
}

.title, .content {
  margin: 15px 0;
}

.title {
  font-size: 20px;
}
</style>
