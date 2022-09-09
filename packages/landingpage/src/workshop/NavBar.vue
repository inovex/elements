<template>
  <header class="header">
    <img class="icon" slot="logo" width="30" src="../assets/logos/elements.svg">
    <div class="tab-bar">
      <ino-tab-bar>
        <ino-tab id="test-1">Design</ino-tab>
        <ino-popover for="test-1" placement="bottom" distance="0" interactive attach-to-body color-scheme="transparent">
          <ino-list>
            <ino-list-item text="Portfolio"></ino-list-item>
            <ino-list-item text="Guidelines"></ino-list-item>
            <ino-list-item text="Colors"></ino-list-item>
          </ino-list>
        </ino-popover>
        <ino-tab>Components</ino-tab>
        <ino-tab>Develop</ino-tab>
      </ino-tab-bar>
    </div>
  </header>
  <main>
    <p>If the creator of this web page knew what to put here, they would probably not have to paste text like this here
      at
      all. The text that you are reading is only to fill the space visually. You are currently reading Honest Ipsum, the
      placeholder text that needs no explanation. </p>
    <p>If the creator of this web page knew what to put here, they would probably not have to paste text like this here
      at
      all. The text that you are reading is only to fill the space visually. This text isn’t going to remain here
      because
      it doesn't pertain to the web page. </p>
  </main>
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
  padding: 5px 10px 0 20px;
}

.header {
  display: flex;
  align-items: center;
  width: 100vw;
  height: 48px;
  border-bottom: 1px solid lightgrey;
}

.tab-bar {

}
</style>
