//
<template>
  <div id="app">
    <ino-nav-drawer
      :open="isNavOpen"
      anchor="left"
      @openChange="({detail}) => isNavOpen = detail"
    >
      <ino-list slot="content">
        <ino-nav-item
          text="My Todo List"
          @click="changeTab(0)"
        >
          <ino-icon icon="menu" />
        </ino-nav-item>
        <ino-nav-item
          text="My V-Card"
          @click="changeTab(1)"
        >
          <ino-icon icon="user" />
        </ino-nav-item>
        <ino-nav-item
          text="Contact me"
          @click="changeTab(2)"
        >
          <ino-icon icon="onboarding" />
        </ino-nav-item>
        <ino-nav-item
          text="Gallery"
          @click="changeTab(3)"
        >
          <ino-icon icon="camera" />
        </ino-nav-item>
      </ino-list>

      <main slot="app">
        <ino-tab-bar
          class="tab-bar"
          :active-tab="currentTab"
          @activeTabChange="({detail}) => currentTab = detail"
        >
          <ino-tab
            icon="menu"
            label="My Todo List"
          />
          <ino-tab
            icon="user"
            label="My V-Card"
          />
          <ino-tab
            icon="onboarding"
            label="Contact me"
          />
          <ino-tab
            icon="camera"
            label="Gallery"
          />
        </ino-tab-bar>

        <ToDoList v-show="currentTab === 0" />
        <VCard v-show="currentTab === 1" />
        <ContactForm
          v-show="currentTab === 2"
          @submit="onContactFormSubmit"
        />
        <ImageGallery v-show="currentTab === 3" />
      </main>
    </ino-nav-drawer>

    <SampleDialog
      v-if="contractFormData"
      :title="contractFormData.title"
      :name="contractFormData.name"
      :birthday="contractFormData.birthday"
      :message="contractFormData.message"
      @close="() => contractFormData = undefined"
    />
    <ino-snackbar
      v-if="showSnackbar"
      message="
        Welcome to the elements example project for Vue.js.
        Have fun by exploring the element components!"
      stay-visible-on-hover
      @hideEl="() => showSnackbar = false"
    />
  </div>
</template>

<script>

import { InoIcon, InoList, InoNavDrawer, InoNavItem, InoSnackbar, InoTab, InoTabBar } from "@inovex.de/elements-vue";
import ContactForm from "./components/ContactForm";
import ImageGallery from "@/components/ImageGallery";
import VCard from "@/components/VCard";
import ToDoList from "@/components/ToDoList";
import SampleDialog from "@/components/SampleDialog";

export default {
  name: 'ExampleApp',
  components: {
    InoSnackbar,
    InoNavDrawer,
    InoNavItem,
    InoTabBar,
    InoTab,
    InoIcon,
    InoList,
    ImageGallery,
    ContactForm,
    VCard,
    ToDoList,
    SampleDialog
  },
  data: () => ({
    currentTab: 0,
    contractFormData: undefined,
    isNavOpen: true,
    showSnackbar: true
  }),
  methods: {
    onTabChange({detail}) {
      this.changeTab(detail);
    },
    changeTab(tabId) {
      this.currentTab = tabId;
    },
    onContactFormSubmit(data) {
      this.contractFormData = data;
    }
  }
};
</script>

<style>
#app {
  font-family: 'Lato', Helvetica, Verdana, sans-serif;
  text-align: center;
}

.tab-bar {
  display: block;
  margin-bottom: 1rem;
}

main {
  margin: 2vh 7vw 5vh 3vw
}
</style>
