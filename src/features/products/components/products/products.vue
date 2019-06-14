<template>
  <div class="products">
    <cod-search-bar></cod-search-bar>
    <div class="products__list">
      <card v-for="item in products" v-bind:product="item" v-bind:key="item.id"></card>
    </div>
  </div>
</template>

<script>
import Card from "../card/card";
import CodSearchBar from "../search-bar/search-bar";
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "cod-products",
  components: {
    card: Card,
    "cod-search-bar": CodSearchBar
  },
  data() {
    return {
      info1: ""
    };
  },
  computed: {
    ...mapState({
      products: state => state.products.allProducts
    }),
    ...mapGetters({
    })
  },
  methods: {
     ...mapActions({
      getAllProducts: 'getAllProducts'
    })
  },
  mounted() {
    this.getAllProducts()
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
