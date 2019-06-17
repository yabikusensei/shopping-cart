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
      products : []
    };
  },
  computed: {
    ...mapState({
      menProducts: state => state.products.menProducts,
      womenProducts: state => state.products.womenProducts,
      childrenProducts: state => state.products.childrenProducts,
      allProducts: state => state.products.allProducts
    })
  },
  watch: {
    $attrs(value) {
      this.getProducts(value)
    }
  },
  methods: {
     ...mapActions({
      getProductsMen: 'getProductsMen',
      getProductsWomen: 'getProductsWomen',
      getProductsChildren: 'getProductsChildren',
      getAllProducts: 'getAllProducts'
    }),
    getProducts({type}) {
      console.log('type', type)
    }
  },
  mounted() {
    this.getProducts(this.$attrs)
    //this.getAllProducts()
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
