<template>
  <header class="header">
    <div class="container">
      <div class="header__left">
        <router-link to="/" class="header__logo">Shopping-Cart</router-link>
        <nav class="header__nav-main">
          <ul>
            <li>
              <router-link to="/products/men">Caballeros</router-link>
            </li>
            <li>
              <router-link to="/products/women">Damas</router-link>
            </li>
            <li>
              <router-link to="/products/children">Niños</router-link>
            </li>
            <li>
              <router-link to="/products">Todo</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <nav class="header__nav-list">
        <ul class="header__list">
          <li class="header__list__item header__list__item--cart">
            <router-link to="/confirm-purchase" class="card__link">
              <i class="fas fa-shopping-cart"></i>
              <span class="total">{{shopping}}</span>
            </router-link>
          </li>
          <li class="header__list__item header__list__item--user">
            <router-link to="/login" class="card__link">
              <i class="fas fa-user-circle"></i>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "cod-header",
  computed: {
    ...mapState({
      shopping(state) {
        return this.getTotal(state.products.shopping)
      }
    })
  },
  watch: {
    shopping(shopping) {
      return this.getTotal(shopping)
    }
  },
  methods: {
    getTotal(shopping) {
      if(shopping.length) {
        return shopping.reduce(((ant, act) => {
          return ant + act.total
        }), 0);
      }
      return 0;
    }
  },
  mounted() {

  }
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid #e8e8e8;
  background: white;
  box-shadow: 0px 0px 10px 0px #e8e8e8;
  background-color: white;
  z-index: 1;

  &__logo {
    font-size: 28px;
    font-weight: bold;
    color: black;
    line-height: 100%;
    margin-top: -4px;
  }

  &__list {
    display: flex;
    align-items: center;

    &__item {
      font-size: 20px;
      height: 100%;
      border-left: 1px solid #e8e8e8;

      a {
        display: block;
        padding: 15px;
        position: relative;

        &.router-link-active {
          background: #f0f9ff;
          color: #293880;
          cursor: default;
        }
      }

      &--user {
        font-size: 19px;
        border-right: 1px solid #e8e8e8;
      }

      &--cart {
        font-size: 17px;
      }

      &:hover {
        background: #f0f9ff;
        color: #293880;
      }
    }

    .total {
      position: absolute;
      background: red;
      color: white;
      font-size: 10px;
      width: 15px;
      height: 15px;
      border-radius: 100%;
      text-align: center;
      line-height: 15px;
      top: 8px;
    }
  }

  &__nav-main {
    ul {
      display: flex;
      align-items: center;
      margin-left: 60px;
    }

    li {
      margin-right: 40px;
    }

    a {
      color: #293880;
      font-size: 16px;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__left {
    display: flex;
    align-items: center;
  }

  .container {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
