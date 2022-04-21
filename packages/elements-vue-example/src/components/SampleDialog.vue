<template>
  <ino-dialog open @close="this.$emit('close')">
    <div>
      <div class="ino-dialog-header">
        <div class="ino-dialog-title">
          <h3>{{ title }} {{ name }}</h3>
        </div>
        <ino-icon-button icon="close" data-ino-dialog-action="close" />
      </div>
      <div class="ino-dialog-content">
        <p>{{ message }}</p>
      </div>
      <div class="ino-dialog-footer">
        <ino-fab
          label="Close"
          mini
          tooltip-placement="right"
          edge-position="none"
          data-ino-dialog-action="cancel"
        >
          <ino-icon icon="add" slot="icon-leading" />
        </ino-fab>
      </div>
    </div>
  </ino-dialog>
</template>

<script>

import { InoDialog, InoFab, InoIcon, InoIconButton } from "@inovex.de/elements-vue";

const dummyText =
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, ' +
    'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ' +
    'At vero eos et accusam et justo duo dolores et ea rebum.';

export default {
  name: "SampleDialog",
  components: {
    InoDialog, InoFab, InoIcon, InoIconButton
  },
  props: {
    title: {
      type: String,
      default: () =>  'Mr.'
    },
    name: {
      type: String,
      default: () => 'Robot'
    },
    birthday: {
      type: String,
      default: () => '0001-01-01'
    },
    message: {
      type: String,
      default: () => dummyText
    }
  }
}
</script>
