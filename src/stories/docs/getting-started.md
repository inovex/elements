# Storybook

The storybook is a UI showcase tool for the inovex elements.

For every component we provide:

* All the use cases
* A live demo
* Public API (properties, methods, events)
* A full textual description

### Explore

You can expand the sidebar link for each component to get an understanding how they work and what you can do with it. Simply copy the given `html` snippets and start working.

## Known issues

* With lazy-loading we have FOUC (Flash of unstyled content) for now. To solve that you can use `Promise<> customElements.whenDefined(name);` (https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/whenDefined) to show a loading spinner.
