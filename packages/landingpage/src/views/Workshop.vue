<template>
  <ino-nav-drawer class="customizable-drawer" open="true" anchor="left" variant="docked">
    <div slot="header">
      <img slot="logo" width="50" src="../assets/logos/elements.svg">
      <p>elements Workshop</p>
    </div>
    <ino-list slot="content">
      <MyNav v-for="route in this.routes" v-bind:key="route.id" :id="route.id" :label="route.label"/>
    </ino-list>
    <main slot="app" class="main-content">
      <div v-if="!$route.params.id" style="margin-top: 20vw" >
        <p>To get started create a component in workshop/ and it to the workshop/components.js file</p>
      </div>
      <div v-for="route in this.routes" v-bind:key="route.id">
        <component v-if="$route.params.id === route.id" :is="route.component"></component>
      </div>
    </main>
  </ino-nav-drawer>
</template>

<script>

import {InoList, InoNavDrawer} from "@inovex.de/elements-vue";
import MyNav from "@/workshop/MyNav.vue";
import {components} from "@/workshop/components";

export default {
  name: 'WorkshopView',
  components: {
    InoNavDrawer,
    InoList,
    MyNav,
  },
  computed: {
    routes() {
      return components
    }
  }
}
</script>

<style scoped>

.customizable-drawer {
}

.main-content {
  width: 100%;
  height: 100vh;
}
</style>
