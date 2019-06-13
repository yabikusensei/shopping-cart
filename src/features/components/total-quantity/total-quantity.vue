<template>
  <div class="total-quantity">
    <button v-if="counter <= 0" class="fas fa-trash-alt btn"></button>
    <button v-else v-on:click="down()" class="btn">-</button>
    <input v-model="counter" class="shadow" type="text">
    <button v-on:click="up()" class="btn">+</button>
  </div>
</template>

<script src="https://kit.fontawesome.com/b5c2584110.js"></script>
<script>
export default {
  name: "cod-total-quantity",
  data() {
    return {
      counter: 0
    };
  },
  watch: {
    counter(current, old) {
       this.$emit("quantity", current);
    }
  },
  methods: {
    up: function() {
      this.counter++;
    },
    down: function() {
      if (this.counter <= 0) {
        this.counter = 0;
      }
      this.counter--;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
