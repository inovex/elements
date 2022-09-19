<template>
  <p>
    {{ item.body }}
  </p>
</template>

<script>
export default {
  name: "MyDetailCmp",
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
