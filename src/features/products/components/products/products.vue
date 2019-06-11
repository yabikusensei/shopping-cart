<template>
  <div class="products">
    <card v-for="n in 10"></card>
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
  justify-content: center;
}
</style>
