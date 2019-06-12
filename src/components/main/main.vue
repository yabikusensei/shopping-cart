<template>
  <main class="main">
    <div class="container">
      <slot></slot>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'cod-main'
  }
</script>

<style lang="scss" scoped>
  .main {
    flex: 1;
    padding: 73px 0 76px;
  }
</style>
