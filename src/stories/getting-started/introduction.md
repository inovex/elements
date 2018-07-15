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

### Integrate into your project

For more details on integrating the inovex elements into your project via npm, please refer to the readme of the [gitlab repository](https://gitlab.inovex.de/inovex-elements/core).

### Explore

You can expand the sidebar link for each component to get an understanding how they work and what you can do with it. Simply copy the given `html` snippets and start working.

## Known issues

* With lazy-loading we have FOUC (Flash of unstyled content) for now. To solve that you can use `Promise<> customElements.whenDefined(name);` (https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/whenDefined) to show a loading spinner.

<!-- STORY -->
