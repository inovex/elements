<template>
  <ino-nav-item
    :text="this.label"
    :activated="$route.params.id === this.id"
    @click="this.$router.push(`/workshop/${this.id}`)">
  </ino-nav-item>
</template>
<script>
import {InoNavItem} from "@inovex.de/elements-vue";

export default {
  name: 'MyNav',
  components: {
    InoNavItem
  },
  props: ['label', 'id'],
}
</script>
