<template>
  <div class="app">
    <header class="header flex-row">
      <div class="header__leading flex-row">
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
      </div>
      <ino-button dense>
        Register now
      </ino-button>
    </header>
    <main class="main"></main>
  </div>
</template>

<script>
import {InoButton, InoList, InoListItem, InoPopover, InoTab, InoTabBar} from "@inovex.de/elements-vue";

export default {
  name: "NavBarIcons",
  components: {
    InoButton, InoList, InoListItem, InoPopover, InoTabBar, InoTab
  }
}
</script>

<style scoped>

.flex-row {
  display: flex;
  flex-direction: row;
}

.header__leading {
  align-items: center;
}

.icon {
  cursor: pointer;
  padding: 5px 10px 0 0;
}

.app {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  justify-content: space-between;
  align-items: center;
  height: 48px;
  border-bottom: 1px solid lightgrey;
  padding-left: 20px;
  padding-right: 20px;
}

.main {
  background-color: whitesmoke;
  height: 100%;
  width: 100%;
}
</style>
