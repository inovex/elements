<template>
  <section class="container">
    <slot />
  </section>
</template>

<script>
export default {
  name: 'IvxContent'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  padding: var(--container-padding-vertical) var(--container-padding-horizontal);
}
</style>
