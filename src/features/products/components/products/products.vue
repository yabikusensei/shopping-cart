<template>
  <div class="products">
    <card v-for="(item, index) in 12" v-bind:id="index" v-bind:key="index"></card>
  </div>
</template>

<script>
import Card from "../card/card";
export default {
  name: "cod-products",
  components: {
    card: Card
  }
};
</script>

<style lang="scss" scoped>
.products {
  display: flex;
  flex-wrap: wrap;
}
</style>
