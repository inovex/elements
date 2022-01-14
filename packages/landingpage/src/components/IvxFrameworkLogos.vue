<template>
  <div>
    <div class="wrapper">
      <img
        class="logo angular"
        src="../assets/logos/angular-logo.svg"
      >
      <img
        class="logo vue"
        src="../assets/logos/vue-logo.svg"
      >
      <img
        class="logo react"
        src="../assets/logos/react-logo.svg"
      >
      <img
        class="logo js"
        src="../assets/logos/js-logo.svg"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'IvxFrameworkLogos'
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
.logo {
  width: 6em;
  height: 6em;
  background: var(--ivx-primary);
  border: 5px solid white;
  padding: 10px;
}

.angular {
  transform: translate(110%, 0);
}
.vue {
  transform: translate(0, -50%);
}
.react {
  transform: translate(120%, -70%);
}
.js {
  transform: translate(10%, -100%);
}
</style>
