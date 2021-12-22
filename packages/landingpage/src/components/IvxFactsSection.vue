<template>
  <div class="root">
    <ivx-card>
      <div class="number">
        46
      </div>
      <hr>
      Components
    </ivx-card>

    <ivx-card>
      <div class="number">
        4
      </div>
      <hr>
      Active Web Developers
    </ivx-card>

    <ivx-card>
      <div class="number-with-unit">
        <div class="number">
          2+
        </div>
        <div class="unit">
          years
        </div>
      </div>
      <hr>
      Expert Knowledge
    </ivx-card>
  </div>
</template>

<script>
import IvxCard from './IvxCard'

export default {
  name: 'IvxFactsSection',
  components: {
    IvxCard
  }
}
</script>

<style scoped>
.root {
  display: flex;
  justify-content: center;
  align-items: stretch;
  font-size: 20px;
  line-height: 26px;
  margin: 40px 0;
}
@media screen and (max-width: 650px) {
  .root {
    flex-wrap: wrap;
  }
}
.number {
  font-size: 54px;
  line-height: 70px;
}
.unit {
  font-size: 16px;
  margin-top: -6px;
}
.number-with-unit {
  display: flex;
  flex-direction: column;
}
hr {
  width: 100%;
  margin: 25px 0;
}
</style>
