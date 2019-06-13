<template>
  <div class="products">
    count{{count}}{{name}}
    <button v-on:click="increment">increment</button>
    <cod-search-bar></cod-search-bar>
    <div class="products__list">
      <card v-for="(item, index) in 12" v-bind:id="index" v-bind:key="index"></card>
    </div>
  </div>
</template>

<script>
import Card from "../card/card";
import CodSearchBar from "../search-bar/search-bar";
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

import store from "vuex";
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
    comInfo1() {
      return this.info1;
    },
    ...mapState({
      // arrow functions can make the code very succinct!
      count: state => state.count,
      name: state => state.name,
      products: state => state.products
    }),
    ...mapGetters({
      // map `this.doneCount` to `this.$store.getters.doneTodosCount`
      getId: "getTodoById"
    })
  },
  methods: {
    increment() {
      // this.$store.dispatch("sincrement", 2);
      this.add(2)
      //this.$store.commit('increment', 10)
    },
     ...mapActions({
      add: 'increment' // map `this.add()` to `this.$store.dispatch('increment')`
    })
  },
  mounted() {
    // console.log('mounted!!!')
    // console.log('store', this.$store.state.count)
    // console.log("store", this.$store.getters.getTodoById(1));
    // console.log("getId", this.getId(0));
    console.log('products', this.products.shopping)
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
