<template>
  <div class="layout">
    <cod-header></cod-header>
    <cod-main>
      <router-view/>
    </cod-main>
    <cod-footer></cod-footer>
  </div>
</template>

<script>
import CodHeader from "../../../../components/header/header";
import CodMain from "../../../../components/main/main";
import CodFooter from "../../../../components/footer/footer";
export default {
  name: "layout",
  components: {
    "cod-header": CodHeader,
    "cod-main": CodMain,
    "cod-footer": CodFooter
  }
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
