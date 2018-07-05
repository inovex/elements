# inovex elements

The Storybook is a UI showcase tool for the inovex elements.

For every component we provide:

* All the use cases
* A live demo
* Public API (properties, methods, events)
* A full textual description

> Please note: We are at the very beginning of the inovex elements. Things may break without giving any deprecation notice.

> Over all we follow the [SemVer](https://semver.org/) specs for versioning.

## How to use

There are two ways to add inovex elements to your project - by loading them via `script` tag from a central server or by
downloading them via npm and adding them to your build process. Both ways have advantages and disadvantages, if you are
building a single page application, integration with your build process makes sense, if you are just playing around, use
the central server.

### Load from central server

Just add the following snippet to your html file

```
<script src="https://elements.inovex.io/master/inovex-elements.js"></script>
```

This preloader will only lazy load components you use. So if you only use `<ino-button>`, the script will just load the
button for you when needed. Nothing more.

The first part of the path defines the loaded version of the inovex elements. `master` always contains the most current
state and may receive breaking changes. To load a stable version like `0.1.0`, use `https://elements.inovex.io/v0.1.0/inovex-elements.js`.

### Download via npm

Inovex elements are delivered via a private npm registry hosted at `https://registry.elements.inovex.io`. First, you have to configure
your local environment to use this registry. To do so, execute the following npm commands:

Username and password are both `inovex`.

```
npm set registry https://registry.elements.inovex.io
npm adduser --registry https://registry.elements.inovex.io
npm config set always-auth true
```

Now you are ready to add the `@inovex/elements` dependency to your project using `yarn` or `npm`:
```
yarn add @inovex/elements
npm i @inovex/elements
```

### Integrate into build process

For integration with various frameworks, take a look at the `stencil-in-vuejs`, `stencil-in-react` and `stencil-in-angular`
example projects in the [`inovex-elements` gitlab project](https://gitlab.inovex.de/inovex-elements).

In most cases, the `dist` folder inside the `inovex-elements` dependency has to be copied into the assets folder.
Inovex elements components are lazy loaded, which means you have to import the main js file `dist/inovex-elements.js` containing the component
registry and everything else will be handled on the fly.

If you are using webpack and provide your own webpack config file, you can use the provided `webpack-plugin.js` as a plugin
and the elements will be provided automatically. You just have to import the component registry as part of your main bundle:

```
// webpack.config.js

module.exports = {
    //...
    plugins: [ /* ... */, require('@inovex/elements/webpack-plugin')()]
}


// entrypoint file

import '@inovex/elements';
```

If the final javascript bundle is not located in the root of the web root, you have to specify the path as the first parameter,
e.g. if your javascript bundle is located in `static/js`, use `require('@inovex/elements/webpack-plugin')('static/js')`.

### Explore

You can expand the sidebar link for each component to get an understanding how they work and what you can do with it. Simply copy the given `html` snippets and start working.

## Known issues

* With lazy-loading we have FOUC (Flash of unstyled content) for now. To solve that you can use `Promise<> customElements.whenDefined(name);` (https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/whenDefined) to show a loading spinner.

<!-- STORY -->
