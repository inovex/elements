<template>
  <MyComponent
    :data="items"
    :options="myOptions"
    :selectedItem="selectedItem"
    @itemClicked="(item) => this.selectedItem = item"
  >
    <MyDetailCmp v-if="selectedItem" :item="selectedItem"></MyDetailCmp>
  </MyComponent>
</template>

<script>
import MyComponent from "@/workshop/MyComponent.vue";
import MyDetailCmp from "@/workshop/MyDetailCmp.vue";
import posts from '../assets/posts.json'

export default {
  name: "Home",
  components: {
    MyComponent,
    MyDetailCmp,
  },
  data() {
    return {
      items: posts,
      myOptions: {
        text: 'title',
        id: 'id',
        secondaryText: null
      },
      selectedItem: null
    }
  }
}
</script>

<style scoped>

</style>
