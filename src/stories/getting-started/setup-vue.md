# Integrate with Vue.js

> This instructions are based on Vue.js v2.5.2

## Prerequisites

* You setup your Vue.js project via the official CLI or similar

If you're on a greenfield, just follow this guide: https://vuejs.org/v2/guide/installation.html#CLI

## Prepare your project

First of all you should make sure your current setup without the components work. If that's the case
you can start preparing.

### 1) Import component loader + ignore non-vue elements

Open `src/main.js` and add this somewhere on the first lines:

```
// src/main.js

import Vue from 'vue'
// ...

import '../vendor/ino-components/components' // import the web components loader

Vue.config.ignoredElements = [
  /^ino-/ // ignore all web components starting with "ino-"
]
```

> So Vue will not recognize these tags as Vue components and let
the browser do the custom element upgrading process.

### 2) Configure Webpack

Next you have to configure the Webpack config files.

#### webpack.dev.conf.js

```
// src/build/webpack.dev.conf.js

// ...
devServer: {
  clientLogLevel: 'warning',
  historyApiFallback: {
    rewrites: [
      {
        from: /^\/components\/.*$/,
        to: function (context) {
          return path.posix.join(config.dev.assetsPublicPath, 'static', context.parsedUrl.pathname)
        }
      },
      // ...
    ]
  },
  // ...
},
plugins: [
    // ...

    // copy custom static assets
    new CopyWebpackPlugin([
      // ...
      {
        from: path.resolve(__dirname, '../vendor/ino-components/components'),
        to: path.posix.join(config.dev.assetsSubDirectory, 'components'),
        ignore: ['.*']
      }
    ])
  ]
```

> The `rewrite` part configures the dev server you use in development. This maps all requests from the browser to `/components/*` to `/static`. The `/components/*` call originates from the `ino-componets` lazy-loading part mechanism.

> To serve the files from `/static/components` you need to make sure the components are located under `/static`. This is what the copy part does.

#### webpack.prod.conf.js

Here you only need the copy part.

```
plugins: [
    // ...

    // copy custom static assets
    new CopyWebpackPlugin([
      // ...
      {
        from: path.resolve(__dirname, '../vendor/ino-components/components'),
        to: path.posix.join(config.build.assetsSubDirectory, 'js', 'components'),
        ignore: ['.*']
      }
    ])
  ]
```

### 3) Intermediate step: Download components

As we don't have a running artifactory (comes very soon!) you can simply download the provided zip file, extract it locally and place the content e.g. under `vendor/ino-components`.

> When we have a working artifactory you can directly use `yarn add` and manage the dependencies the common way.

### 4) Use the components

You can use the components now in your Vue.js project in the same way as you would use any native HTML elements.

Here is an example of how to use a inovex element in your Vue.js template:

```html
<template>
  <div>
    <ino-input
      ino-icon="user"
      :ino-placeholder="userPlaceholder"
      :ino-value="userValue"
      @ioChange="printUsername($event.detail)"
      ino-type="text"
    ></ino-input>
  </div>
</template>

<script>
export default {
  name: 'TestComponent',
  data () {
    return {
      userValue: 'Freaky Fox',
      userPlaceholder: 'Username'
    }
  },
  methods: {
    printUsername: function(newUsername) {
      alert(`New username is: ${newUsername}`)
    }
  }
}
</script>
```
