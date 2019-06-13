<template>
  <div>
    <ul class="breadcrumb">
      <li><router-link to="/products" class="card__link">products</router-link></li>
      <li>></li>
      <li><router-link to="/confirm-purchase" class="card__link">confirm-purchase</router-link></li>
      <li>></li>
      <li class="is-active">checkout</li>
    </ul>
    <h1 class="title"><span>Checkout</span></h1>
  </div>
</template>

<script>
  export default {
    name: 'cod-checkout'
  }
</script>

<style lang="scss" scoped>

</style>
