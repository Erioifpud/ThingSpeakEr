<template>
  <div>
    <input
      v-model="currentKey"
      @blur="isExpanded = false"
      @focus="isExpanded = true"
      class="main-key-input"
      type="text"
      placeholder="Main Key"
    >
    <!-- <template> -->
      <ul v-if="isExpanded">
        <li
          class="item"
          v-for="(val, key) in histories"
          :key="key"
          @click="handleItemClick"
          >
          {{val}}
        </li>
      </ul>
    <!-- </template> -->
  </div>
</template>

<script>
export default {
  name: 'HistoryInput',
  data () {
    return {
      currentKey: '',
      isExpanded: false
    }
  },
  methods: {
    handleItemClick (e) {
      this.currentKey = e.target.innerHTML.trim()
    }
  },
  computed: {
    histories () {
      var val = window.localStorage.getItem('history')
      if (val) {
        return val.split(',')
      }
      return []
    }
  }
}
</script>

<style scoped>
.main-key-input {
  position: relative;
  width: 80vw;
  height: 40px;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 1px 5px #08587a;
  /* top: 30%; */
  top: 30px;
  text-align: center;
  padding: 0 5px;
  box-sizing: border-box;
  /* transform: translateX(-50%); */
  caret-color: #2db3eb;
  z-index: 1;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.item:first-child {
  border-radius: 5px 5px 0 0;
}

.item:last-child {
  border-radius: 0 0 5px 5px;
}

.item {
  position: relative;
  width: 80vw;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  margin: auto;
  top: 40px;
  padding: 0 5px;
  font-size: 18px;
  box-sizing: border-box;
  border-bottom: solid 1px #d2d6d6;
}
</style>
