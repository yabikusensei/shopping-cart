<template>
  <form class="search-bar">
    <input placeholder="Buscar producto" type="text">
    <button class="btn">
      <i class="fas fa-search"></i>
    </button>
  </form>
</template>

<script>
export default {
  name: "cod-search-bar"
};
</script>

<style lang="scss" scoped>
.search-bar {
  display: flex;
  align-items: center;
  border: 1px solid #e8e8e8;
  padding: 5px;
  border-radius: 3px;
  margin-bottom: 20px;

  &.focus {
    
  }

  input {
    width: 100%;
    border: 0;
  }
}
</style>
