<template>
  <div>
    <cod-search-bar></cod-search-bar>
    <router-view/>
  </div>
</template>

<script>
import CodSearchBar from '../search-bar/search-bar'
export default {
  name: "cod-productslayout",
  components: {
    'cod-search-bar': CodSearchBar
  }
};
</script>

<style lang="scss" scoped>
</style>
