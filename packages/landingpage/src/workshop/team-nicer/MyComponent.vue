<template>
  <div style="display: flex; flex-direction: row" :class="{ 'small-screen': smallScreen }">
    <section class="list">
      <ino-list>
        <ino-list-item
          v-for="i in data" :key="i?.[options.id]"
          :secondary-text="getSecondaryText(i)"
          :selected="selectedItem?.[options.id] === i?.[options.id]"
          @clickEl="$emit('itemClicked', i)"
        >
          <span style="text-overflow: ellipsis; text-wrap: none; overflow: hidden" slot="primary">
            {{ i?.[options.text] }}
          </span>
          <ino-icon-button slot="trailing" @click="openDeleteDialog(i)">
            <ino-icon icon="remove" style="--ino-icon-width: 16px; --ino-icon-height: 16px"/>
          </ino-icon-button>
        </ino-list-item>
      </ino-list>
    </section>
    <section class="detail" v-show="selectedItem">
      <h1 style="text-align: left">
        {{ selectedItem?.[options.text]}}
      </h1>
      <slot></slot>
    </section>
  </div>
  <ino-dialog :open="isDialogOpen" :dismissible="true" @close="isDialogOpen = false" style="--ino-dialog-width: 30%">
   <div style="padding: 15px; text-align: center;">
     <h2 style="margin: .5rem 0; text-align: center">Are you sure to delete? </h2>
     <strong style="font-style: italic">{{ dialogItem?.[options.text] }}</strong>
     <div style="margin-top: 1.25rem; display: flex; flex-direction: row; justify-content: space-between">
       <ino-button @click="isDialogOpen = false">No, I am not</ino-button>
       <ino-button @click="deleteItem">Yes, I am sure</ino-button>
     </div>
   </div>
  </ino-dialog>
</template>
<script>

import {InoButton, InoList, InoListItem, InoHeader, InoIconButton, InoIcon, InoDialog} from "@inovex.de/elements-vue";

export default {
  name: 'MyComponent',
  components: {
    InoButton,
    InoList,
    InoListItem,
    InoHeader,
    InoIconButton,
    InoIcon,
    InoDialog,
  },
  emits: ['itemClicked', 'deleteItem'],
  props: {
    options: {
      type: Object,
      default: {
        text: 'title',
        id: 'id',
        secondaryText: null
      }
    },
    data: {
      type: Array,
      default: []
    },
    selectedItem: {
      type: Object,
      default: null,
    }
  },
  data() {
    return {
      isDialogOpen: false,
      dialogItem: null,
      smallScreen: false,
    }
  },
  created() {
    window.matchMedia('(max-width: 1024px)').addEventListener('change', this.onScreenChange)
  },
  computed: {
    item() {
      return this.data.find(i => i.id === this.id)
    }
  },
  methods: {
    getSecondaryText(item) {
      return item?.[this.options.secondaryText]
    },
    openDeleteDialog(item) {
      this.dialogItem = item;
      this.isDialogOpen = true;
    },
    deleteItem() {
      this.$emit('deleteItem', this.dialogItem);
      this.isDialogOpen = false;
    },
    onScreenChange(e) {
      this.smallScreen = e.matches;
    }
  }
}
</script>

<style scoped>
.list {
  width: 30%;
}

.small-screen .list {
  width: 100%;
}
</style>
