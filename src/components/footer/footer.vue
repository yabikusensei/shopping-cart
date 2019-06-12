<template>
  <footer class="footer">
    <div class="container">
      <p>Todos los derechos reservados | 2019</p>
      <span>Creado por <a><b>Codigo</b></a></span>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'cod-footer'
  }
</script>

<style lang="scss" scoped>
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px 0;
    border-top: 1px solid #e8e8e8;
    background: white;

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
