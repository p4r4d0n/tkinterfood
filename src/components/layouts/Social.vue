<template>
  <div class='social'>
    <a href="https://line.me/R/ti/p/%40tkinterfood">
      <img src="/static/social/line.png" width="40" height="40">
    </a>
    <a href="http://m.me/tkinterfoodth">
      <img src="/static/social/fb.png" width="40" height="40">
    </a>
  </div>
</template>

<script>
  export default {
    name: 'social-component',
    data() {
      return {}
    }
  }
</script>

<style scoped>

  .social {
    right: 1%;
    bottom: 1%;
    position: fixed;
    z-index: 999;
  }
</style>
