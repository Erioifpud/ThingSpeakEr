<template>
  <input class="switch" type="checkbox" v-model="checked">
</template>

<script>
export default {
  name: 'SwitchButton',
  data () {
    return {
      checked: false
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.switch {
  margin: 5px 15px;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  display: inline-block;
  cursor: pointer;
  width: 60px;
  height: 30px;
  position: relative;
  border: 1px solid #bfc0c0;
  background-color: #fff;
  border-radius: 30px;
  /* box-shadow: 0 1px 10px #92a0aa; */
  user-select: none;
  transition: background-color 0.4s, border 0.4s, box-shadow 0.4s;
}

.switch:checked {
  border-color: #53d769;
  background-color: #53d769;
  /* box-shadow: 0 1px 10px #27ae60; */
  transition: background-color 0.4s, border 0.4s, box-shadow 0.4s;
}

.switch::before {
  content: '';
  left: 0;
  width: 28px;
  height: 28px;
  border-radius: 28px;
  position: absolute;
  background-color: #fff;
  box-shadow: 0 1px 5px #92a0aa;
  transition: left 0.4s;
}

.switch:checked:before {
  left: 30px;
  box-shadow: 0 1px 5px #27ae60;
  transition: left 0.4s;
}

.switch::after {
  content: 'Switch';
  position: absolute;
  font-size: 18px;
  color: #000;
  left: 65px;
  font-weight: 400;
}

.switch:checked:after {
  content: 'Sensor';
}
</style>
