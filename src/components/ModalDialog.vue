<template>
  <div class="bg" v-if="opening">
    <div class="modal">
      <p class="title">
        {{ title }}
      </p>
      <p class="desc" v-if="desc">
        {{ desc }}
      </p>
      <slot name="content"></slot>
      <div class="sep"></div>
      <button @click="$emit('cancel')" class="cancel">
        Cancel
      </button>
      <button @click="$emit('ok')" class="confirm">
        OK
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalDialog',
  props: {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String
    },
    opening: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}

* {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.modal {
  position: absolute;
  width: 60vw;
  top: 50%;
  left: 50%;
  background-color: #dce0e1;
  border-radius: 10px;
  transform: translate(-50%, -50%);
}

.sep {
  border-bottom: solid 1px #c1c1c1;
}

.confirm, .cancel {
  display: inline-block;
  margin: auto;
  padding: 0;
  width: 29vw;
  font-size: 18px;
  padding: 5px;
  /* border: solid 1px #c1c1c1; */
  color: #2086df;
  outline: none;
}

.confirm {
  font-weight: 500;
}

.title {
  margin: 10px 0;
  font-weight: 600;
  font-size: 18px;
}

.desc {
  margin: 10px 0;
  font-weight: bold;
  font-size: 20px;
}
</style>
