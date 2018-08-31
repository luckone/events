<template>
    <nav class="navigation"></nav>
</template>

<script>
export default {
  name: "navigation"
}
</script>

<style lang="scss">
  @import "../../assets/styles/index";
  .navigation {
    width: 100%;
    background-color: #fff;
    height: 90px;
    border-bottom: 1px solid rgba($text-secondary, .3);
    z-index: 3;
  }
</style>
