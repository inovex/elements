<template>
  <form
    id="contact-form"
    @submit="showFormData"
  >
    <ino-radio-group :value="gender">
      <ino-radio
        value="m"
        @checkedChange="() => gender = 'm'"
      >
        male
      </ino-radio>
      <ino-radio
        value="f"
        @checkedChange="() => gender = 'f'"
      >
        female
      </ino-radio>
      <ino-radio
        value="o"
        @checkedChange="() => gender = 'o'"
      >
        other
      </ino-radio>
    </ino-radio-group>
    <ino-select
      :ino-outline="outlineStyle"
      :value="selectedTitle"
      label="Select your title"
      name="title"
      required
      @valueChange="({detail}) => selectedTitle = detail"
    >
      <ino-option
        v-for="(title, i) in availableTitles"
        :key="i"
        :value="title"
      >
        {{ title }}
      </ino-option>
    </ino-select>
    <ino-input
      v-model="name"
      :outline="outlineStyle"
      autofocus
      name="firstname"
      placeholder="Enter your name"
      required
      type="text"
      @valueChange="({detail}) => name = detail"
    >
      <ino-icon
        slot="icon-leading"
        icon="user"
      />
    </ino-input>
    <ino-datepicker
      v-model="birthday"
      :outline="outlineStyle"
      helper="Select your birthday"
      helper-persistent
      helper-validation
      label="Your birthday"
      twelf-hour-time
      type="date"
      name="birthday"
      required
      @valueChange="({detail}) => birthday = detail"
    />
    <ino-textarea
      v-model="message"
      :outline="outlineStyle"
      autogrow
      cols="100"
      label="Your message"
      maxlength="500"
      name="message"
      placeholder="Type your message here"
      required
      rows="3"
    />
    <div class="form-btn-bar">
      <ino-switch
        v-model="outlineStyle"
        name="outline-style"
        @checkedChange="({detail}) => outlineStyle = detail"
      >
        Use outline style
      </ino-switch>
      <ino-button type="submit">
        <ino-icon icon="onboarding" />
        Send message
        <ino-icon icon="offboarding" />
      </ino-button>
    </div>
  </form>
</template>

<script>
import {
  InoButton,
  InoDatepicker,
  InoIcon,
  InoInput,
  InoOption,
  InoRadio,
  InoRadioGroup,
  InoSelect,
  InoSwitch,
  InoTextarea
} from "@inovex.de/elements-vue";

export default {
  name: "ContactForm",
  components: {
    InoSwitch,
    InoButton,
    InoIcon,
    InoTextarea,
    InoInput,
    InoDatepicker,
    InoSelect,
    InoRadioGroup,
    InoRadio,
    InoOption,
  },
  data: () => ({
    name: 'ssss',
    gender: 'm',
    birthday: '',
    message: 'Hallo Welt',
    outlineStyle: false,
    selectedTitle: null,
    availableTitles: ['Mr.', 'Ms.', 'Mrs.', 'Dr.', 'Jr.'],
  }),
  methods: {
    showFormData(e) {
      e.stopImmediatePropagation();
      e.preventDefault();

      this.$emit('submit', {
        title: this.selectedTitle,
        name: this.name,
        birthday: this.birthday,
        message: this.message
      });
    },
  }
}
</script>

<style scoped>
#contact-form > * {
  margin: .5rem .5rem 1.5rem .5rem;
}

.form-btn-bar {
  display: flex;
  justify-content: space-between;
}
</style>
