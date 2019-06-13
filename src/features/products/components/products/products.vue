<template>
  <div class="products">
    <cod-search-bar></cod-search-bar>
    <div class="products__list">
      <card v-for="(item, index) in 12" v-bind:id="index" v-bind:key="index"></card>
    </div>
  </div>
</template>

<script>
import Card from "../card/card";
import CodSearchBar from '../search-bar/search-bar'
export default {
  name: "cod-products",
  components: {
    'card': Card,
    'cod-search-bar': CodSearchBar
  }
};
</script>

<style lang="scss" scoped>
.products {

  &__list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
