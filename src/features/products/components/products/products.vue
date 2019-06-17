<template>
  <div class="products">
    <cod-search-bar></cod-search-bar>
    <div class="products__list">
      <template v-if="$attrs.type === 'men'">
        <card v-for="item in menProducts" v-bind:product="item" v-bind:key="item.id"></card>
      </template>
      <template v-if="$attrs.type === 'women'">
        <card v-for="item in womenProducts" v-bind:product="item" v-bind:key="item.id"></card>
      </template>
      <template v-if="$attrs.type === 'children'">
        <card v-for="item in childrenProducts" v-bind:product="item" v-bind:key="item.id"></card>
      </template>
      <template v-if="$attrs.type === 'all'">
        <card v-for="item in allProducts" v-bind:product="item" v-bind:key="item.id"></card>
      </template>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import Card from "../card/card";
import CodSearchBar from "../search-bar/search-bar";

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
      allProducts: (state) => state.products.allProducts
    })
  },
  watch: {
    $attrs(type) {
      this.getProducts(type)
      // this.setProducts(type)
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
      switch(type) {
        case 'men':
          this.getProductsMen()
          break;
        case 'women':
          this.getProductsWomen()
          break;
        case 'children':
          this.getProductsChildren()
          break;
        case 'all':
          this.getAllProducts()
          break;
        default:
          this.getAllProducts()
          break;
      }
    },
    // setProducts({type}) {
    //   switch(type) {
    //     case 'men':
    //       this.products = this.menProducts;
    //       break;
    //     case 'women':
    //       this.products = this.womenProducts;
    //       break;
    //     case 'children':
    //       this.products = this.childrenProducts;
    //       break;
    //     case 'all':
    //       this.products = this.allProducts;
    //       break;
    //     default:
    //       this.products = this.allProducts;
    //       break;
    //   }
    // }
  },
  mounted() {
    this.getProducts(this.$attrs);
    // this.setProducts(this.$attrs)
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
