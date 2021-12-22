<template>
  <div class="root">
    <ino-fab icon="add" />

    <div class="checkbox-group">
      <ino-checkbox
        class="unchecked"
        :checked="checked1"
        @checkedChange="checked1 = !checked1"
      >
        Unchecked
      </ino-checkbox>
      <ino-checkbox
        class="checked"
        :checked="checked2"
        @checkedChange="checked2 = !checked2"
      >
        Checked
      </ino-checkbox>
      <ino-checkbox
        class="indeterminate"
        :checked="checked3"
        indeterminate
        @checkedChange="checked3 = !checked3"
      >
        Indeterminated
      </ino-checkbox>
    </div>

    <ino-card>
      <div slot="content">
        <div class="card-content">
          <ino-icon-button
            icon="close"
          />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat.</p>
          <ino-button fill="outline">
            Apply
          </ino-button>
        </div>
      </div>
    </ino-card>

    <ino-tab-bar
      :active-tab="tab"
      @activeTabChange="e => tab = e.detail"
    >
      <ino-tab
        label="Label1"
        icon="employee"
      />
      <ino-tab
        label="Label2"
        icon="info"
      />
      <ino-tab
        label="Label3"
        icon="settings"
      />
      <ino-tab
        label="Label4"
        icon="star"
      />
    </ino-tab-bar>

    <ino-input label="Input field" />

    <ino-switch
      :checked="switchState"
      @checkedChange="e => switchState = e.detail"
    >
      Customizable Switch
    </ino-switch>

    <div class="button-group">
      <ino-button class="standard">
        Primary
      </ino-button>
      <ino-button
        fill="outline"
        class="outline"
      >
        Outlined
      </ino-button>
      <ino-button>
        <ino-icon icon="filter" slot="icon-leading"></ino-icon>
        BUTTON ICON LEFT
      </ino-button>
    </div>

    <ino-datepicker
      :value="date"
      date-format="Y-m-d"
      @valueChange="e => date = e.detail"
    />

    <ino-chip
      label="Employee"
    >
      <ino-icon slot="icon-leading" icon="employee"></ino-icon>
    </ino-chip>
    <ino-chip
      label="Onboarding"
    >
      <ino-icon slot="icon-leading" icon="onboarding"></ino-icon>
    </ino-chip>

    <ino-header title="TEAM" />
  </div>
</template>

<script>

export default {
  name: 'IvxUiComponentsSection',
  data () {
    return {
      today: '',
      checked1: false,
      checked2: true,
      checked3: false,
      tab: 0,
      switchState: false,
      date: undefined
    }
  },
  mounted () {
    setTimeout(() => {
      const allUiComponents = this.$el.querySelectorAll('.root > *')

      allUiComponents.forEach(child => {
        const timeout = Math.random() * 1100
        setTimeout(() => {
          child.style.transform = 'translateY(0)'
          child.style.opacity = 1
        }, timeout)
      })
      this.$el.querySelector('ino-datepicker').value = new Date().toISOString().split('T')[0]

      setTimeout(() => this.letComponentsFlow(allUiComponents), 1300)
    }, 600)
  },
  methods: {
    letComponentsFlow (uiComponents) {
      uiComponents.forEach(child => {
        child.style['animation-timing-function'] = 'ease-in-out'
        child.style['animation-iteration-count'] = 'infinite'
        child.style['animation-delay'] = Math.random() + 's'
        child.style['animation-duration'] = Math.random() + 3 + 's'
      })
    }
  }
}
</script>

<style scoped>
.root > * {
  display: inline-block;
  margin: 25px;
  transition: all 0.2s;
  transform: translateY(100%);
  opacity: 0;
  /* name must be set here because css is scoped */
  animation-name: flow;
}
@keyframes flow {
  0% { transform: translateY(-2px); }
  50% {transform: translateY(2px); }
  100% { transform: translateY(-2px); }
}
ino-card {
  width: 400px;
}
@media screen and (max-width: 650px) {
  ino-card {
    margin-left: -50px !important;
  }
}
ino-card .card-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

ino-checkbox {
  display: inline-block;
}
ino-checkbox.checked {
  transform: translate(0, 20px);
}
ino-checkbox.indeterminate {
  transform: translate(0, -15px);
}
@media screen and (max-width: 650px) {
  ino-checkbox, ino-checkbox.checked, ino-checkbox.indeterminate {
    transform: translate(0, 0);
  }
}

@media screen and (max-width: 650px) {
  ino-tab-bar {
    margin-left: -50px !important;
  }
}

ino-select {
  position: relative;
  width: 250px;
  z-index: 10;
}

ino-button {
  margin-left: 4px;
}

ino-button.standard {
  transform: translate(0, 0);
}
ino-button.outline {
  transform: translate(0, -30px);
}
@media screen and (max-width: 650px) {
 ino-button.outline {
   margin-top: 15px;
  transform: translate(40px, 0);
}
}
ino-button[ino-icon] {
  transform: translate(-40px, 20px)
}

ino-chip {
  margin: 10px !important;
}

ino-datepicker {
  width: 250px;
}
ino-header {
  width: 250px;
}
@media screen and (max-width: 650px) {
  ino-header {
    margin-left: -20px !important;
  }
}
</style>
