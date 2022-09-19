<template>
  <div class="app">
    <header class="header">
      <a href="/">
        <img class="icon" slot="logo" width="30" src="../assets/logos/elements.svg">
      </a>
      <div class="tab-bar">
        <ino-tab-bar>
          <ino-popover placement="bottom" distance="0" interactive attach-to-body color-scheme="transparent">
            <ino-tab slot="popover-trigger">
              Design
            </ino-tab>
            <ino-list>
              <ino-list-item text="Portfolio"></ino-list-item>
              <ino-list-item text="Guidelines"></ino-list-item>
              <ino-list-item text="Colors"></ino-list-item>
            </ino-list>
          </ino-popover>
          <ino-popover placement="bottom" distance="0" interactive attach-to-body color-scheme="transparent">
            <ino-tab slot="popover-trigger">
              Components
            </ino-tab>
            <ino-list>
              <ino-list-item text="Showcase"></ino-list-item>
              <ino-list-item text="Docs"></ino-list-item>
            </ino-list>
          </ino-popover>
          <ino-tab>Develop</ino-tab>
        </ino-tab-bar>
      </div>
    </header>
    <main class="main"></main>
  </div>
</template>

<script>
import {InoList, InoListItem, InoPopover, InoTab, InoTabBar} from "@inovex.de/elements-vue";

export default {
  name: "NavBar",
  components: {
    InoList, InoListItem, InoPopover, InoTabBar, InoTab
  }
}
</script>

<style scoped>
.icon {
  cursor: pointer;
  padding: 5px 10px 0 20px;
}

.app {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  border-bottom: 1px solid lightgrey;
}

.main {
  background-color: whitesmoke;
  height: 100%;
  width: 100%;
}
</style>
