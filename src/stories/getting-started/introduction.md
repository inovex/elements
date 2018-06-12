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

### 1) Prerequisites

- Import the components in your `index.html` or equivalent:

```
<script src="vendor/stencil-components/components.js"></script>
```

This preloader will only lazy load components you use. So if you only use `<ino-button>`, the script will just load the button for you when needed. Nothing more.

> This won't work with `file://` protocoll. So make sure to always serve your web app from a webserver.

### 2) Use

You can expand the sidebar link for each component to get an understanding how they work and what you can do with it. Simply copy the given `html` snippets and start working.

## Known issues

* With lazy-loading we have FOUC (Flash of unstyled content) for now. To solve that you can use `Promise<> customElements.whenDefined(name);` (https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/whenDefined) to show a loading spinner.

<!-- STORY -->
