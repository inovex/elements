<template>
  <div
    class="root"
    :class="{ active }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'IvxCard',
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 250px;
  height: auto;
  background: #FFFFFF;
  padding: 76px 32px;
  margin: 50px !important;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
}
.active {
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
  padding: 80px 42px;
}
</style>
