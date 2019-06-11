<template>
  <header class="header">
    <div class="container">
      <div class="header__left">
        <a class="header__logo" href="/">Shopping-Cart</a>
        <nav class="header__nav-main">
          <ul>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">Caballeros</a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">Damas</a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">Niños</a>
            </li>
          </ul>
        </nav>
      </div>
      <nav class="header__nav-list">
        <ul class="header__list">
          <li class="header__list__item header__list__item--user">
            <i class="fas fa-user-circle"></i>
          </li>
          <li class="header__list__item header__list__item--cart">
            <i class="fas fa-shopping-cart"></i>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "cod-header"
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

  &__logo {
    font-size: 24px;
    font-weight: bold;
    color: black;
  }

  &__list {
    display: flex;
    align-items: center;

    &__item {
      font-size: 20px;
      height: 100%;
      border-left: 1px solid #e8e8e8;
      padding: 15px;
      cursor: pointer;

      &--user {
        font-size: 19px;
      }

      &--cart {
        font-size: 17px;
        border-right: 1px solid #e8e8e8;
      }

      &:hover {
        background: #f0f9ff;
        color: #293880;
      }
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
