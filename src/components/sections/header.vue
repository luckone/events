<template>
  <header class="header">
    <div class="header-overlay"></div>
    <div class="header-nav"></div>
    <h1 class="header-title" v-if="loaded">BOOK YOUR INFINITY SESSION TODAY</h1>
  </header>
</template>

<script>
export default {
  name: "header-app",
  data () {
    return {
      loaded: false
    }
  },
  mounted () {
    this.loaded = true
  }
}
</script>

<style lang="scss">
  @import "../../assets/styles/index";
  .header {
    min-height: 400px;
    max-height: 50vh;
    height: 50vh;
    width: 100%;
    padding: 85px 230px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 10px solid $border-color;
    background-color: #ebebeb;
    &-overlay {
      z-index: 1;
      background-image: url("/static/applause-audience-band-196652.jpg");
      background-position: 50% 80%;
      background-repeat: no-repeat;
      background-size: cover;
      filter: blur(5px);
      position: absolute;
      width: 100%;
      left: 0;
      top: 0;
      transform: scaleX(1.1);
      min-height: 400px;
      max-height: 50vh;
      height: 50vh;
    }
    &-title {
      text-shadow: 2px 4px 3px rgba(0,0,0,0.2);
      z-index: 2;
      color: #fff;
      font-size: 2.9rem;
      filter: blur(0px);
      animation: fadeBlure 1s ease-in-out;
    }
  }

  @keyframes fadeBlure {
    0% {
      filter: blur(10px);
    }
    100% {
      filter: blur(0px);
    }
  }

</style>
