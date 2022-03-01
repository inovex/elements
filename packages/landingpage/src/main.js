import '@inovex.de/elements' // import the web components loader
import { applyPolyfills, defineCustomElements } from '@inovex.de/elements/dist/loader'
import { addIcons } from '@inovex.de/elements/dist/collection/util/icons'
import { ICON_PATHS } from '@inovex.de/elements/dist/inovex-elements/ino-icon/index.esm.js'
import './global.css'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

addIcons(ICON_PATHS)

Vue.config.productionTip = false

// Tell Vue to ignore all components defined in the @inovex/elements package.
Vue.config.ignoredElements = [/ino-\w*/]

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements(window)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
