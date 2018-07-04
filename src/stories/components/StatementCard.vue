<template>
  <ino-card>
    <div class="icon-wrapper">
      <slot name="icon"></slot>
    </div>
    {{ statement }}
  </ino-card>
</template>

<script>
export default {
  name: 'StatementCard',
  props: {
    statement: String
  },
  data () {
    return {
      hovered: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ino-card {
  text-align: center;
  width: 175px;
}

.icon-wrapper {
  text-align: center;
}
</style>
