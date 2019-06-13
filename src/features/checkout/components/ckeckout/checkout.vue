<template>
  <div>
    <cod-breadcrumb></cod-breadcrumb>
    <h1 class="title">
      <span>Checkout</span>
    </h1>
  </div>
</template>

<script>
import CodBreadcrumb from "../../../components/breadcrumb/breadcrumb";
export default {
  name: "cod-checkout",
  components: {
    "cod-breadcrumb": CodBreadcrumb
  }
};
</script>

<style lang="scss" scoped>
</style>
