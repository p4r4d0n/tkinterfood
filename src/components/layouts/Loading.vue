<template>
  <div class='loading-component'>
    <i class="fa fa-refresh fa-spin fa-3x fa-fw" aria-hidden="true"></i>
    <span class="sr-only">Refreshing...</span>
  </div>
</template>

<script>
  export default {
    name: 'loading-component',
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .loading-component {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>
