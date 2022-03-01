<template>
  <div class="container">
    <div class="headline">
      <slot name="headline" />
    </div>

    <div class="description">
      <slot name="description" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IvxHeroBanner'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  min-height: 280px;
  text-align: left;
  background-color: var(--primary-light);
  padding: var(--container-padding-vertical) var(--container-padding-horizontal);
  display: flex;
  justify-content: center;
}

.headline,
.description {
  color: var(--inovex);
}

.headline {
  font-size: 42px;
  line-height: 1.3em;
  margin-bottom: 30px;
}

.description {
  font-size: 18px;
  line-height: 1.3em;
}
</style>
