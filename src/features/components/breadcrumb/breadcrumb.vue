<template>
  <ul class="breadcrumb">

    <li>
      <router-link to="/products" class="card__link">products</router-link>
    </li>
    <li>></li>
    <li>
      <router-link to="/confirm-purchase" class="card__link">confirm-purchase</router-link>
    </li>
    <li>></li>
    <li class="is-active">checkout</li>
    
  </ul>
</template>

<script>
export default {
  name: "cod-breadcrumb",
  data() {
    return {
      counter: 0
    };
  },
  watch: {
    counter(current, old) {
      this.$emit("sendInput", current);
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
