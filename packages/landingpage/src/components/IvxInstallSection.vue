<template>
  <div class="root">
    <div class="switch_pkgManager_wrapper">
      <button
        class="switch_pkgManager__npm"
        :class="{ active: pkgManager === 'npm' }"
        @click.prevent="pkgManager = 'npm'"
      >
        npm
      </button>
      |
      <button
        class="switch_pkgManager__yarn"
        :class="{ active: pkgManager === 'yarn' }"
        @click.prevent="pkgManager = 'yarn'"
      >
        yarn
      </button>
    </div>

    <div class="language-cards">
      <ivx-card class="card angular">
        <img
          class="logo angular"
          src="../assets/logos/angular-logo.svg"
        >
      </ivx-card>

      <ivx-card
        class="card"
        active
      >
        <img
          class="logo"
          src="../assets/logos/js-logo.svg"
        >
        <transition name="slide_fade">
          <div
            v-if="pkgManager === 'yarn'"
            class="code-block"
          >
            <code
              class="script"
            >$ yarn add @inovex.de/elements</code>
          </div>
        </transition>
        <transition name="slide_fade">
          <div
            v-if="pkgManager === 'npm'"
            class="code-block"
          >
            <code
              class="script"
            >
              $ npm install @inovex.de/elements <span class="code_save">--save</span>
            </code>
          </div>
        </transition>

        <a
          class="btn-getting-started"
          href="https://elements.inovex.io/dist/latest/storybook/?path=/story/docs-framework-integration--javascript"
          target="_blank"
        >
          <ino-button>
            Get Started
          </ino-button>
        </a>
      </ivx-card>

      <ivx-card class="card react">
        <img
          class="logo react"
          src="../assets/logos/react-logo.svg"
        >
      </ivx-card>
    </div>

    <div>
      <div class="stackblitz-wrapper">
        <div class="stackblitz-image" />

        <div class="stackblitz-iframe-wrapper">
          <iframe
            v-if="showIframe"
            class="iframe-code-demo"
            src="https://stackblitz.com/edit/ino-elements-js-example?embed=1&amp;file=index.js"
            @load="iframeLoaded = true"
          />
        </div>

        <div class="stackblitz-button-wrapper">
          <ino-button
            v-if="!iframeLoaded"
            :loading="iframeLoading"
            fill="solid"
            @click="showIframe = true; iframeLoading = true"
          >
            Load example from StackBlitz.com
          </ino-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IvxCard from './IvxCard'

export default {
  name: 'IvxInstallSection',
  components: {
    IvxCard
  },
  data () {
    return {
      pkgManager: 'npm',
      iframeLoaded: false,
      showIframe: false,
      iframeLoading: false
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 830px) {
  .card.angular, .card.react {
    display: none;
  }
}
.switch_pkgManager_wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.switch_pkgManager__npm, .switch_pkgManager__yarn {
  background: none;
  color: var(--light);
  font-size: 1.3em;
  margin: 10px;
  border: none;
  cursor: pointer;
}
.switch_pkgManager__npm:hover, .switch_pkgManager__yarn:hover {
  color: var(--ivx-primary-light);
}
button.active {
  color: var(--ivx-primary);
}

.language-cards {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  line-height: 26px;
}

.card {
  flex: 1 1 25%;
}
.card.active {
  flex: 0 0 50%;
  min-width: 50%;
}
@media screen and (max-width: 650px) {
  .language-cards {
    flex-wrap: wrap;
  }
  .card {
    flex: 1 1 80%;
  }
  .card.active {
    flex: 0 0 80%;
    min-width: 80%;
  }
}

.logo {
  width: 100px;
  height: auto;
}

.btn-getting-started {
  margin-top: 80px;
}

.code-block {
  background-color: #172D4C;
  color: white;
  padding: 8px;
  margin-top: 30px;
  position: absolute;
}
@media screen and (max-width: 650px) {
  .code-block {
    left: 12px;
    right: 12px;
  }
}
.code_save {
  white-space: nowrap;
}

ino-button {
  margin-top: 130px;
}

.iframe-code-demo {
  border-width: 0;
  width: 100%;
  height: 100%;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide_fade-enter-active {
  transition: all .25s ease;
}
.slide_fade-leave-active {
  transition: all .25s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide_fade-enter, .slide_fade-leave-to
/* .slide_fade-leave-active below version 2.1.8 */ {
  transform: translateY(40%);
  opacity: 0;
}

.stackblitz-wrapper {
  margin-top: 100px;
  position: relative;
  height: 50vh;
  max-height: 800px;
}

.stackblitz-iframe-wrapper {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}

.stackblitz-image {
  background: url(/public/assets/stackblitz.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  height: 100%;
  width: 100%;
  filter: blur(5px);
}

.stackblitz-button-wrapper {
  position: absolute;
  width: 100%;
  margin: 0 auto;
  top: 100px;
}
</style>
