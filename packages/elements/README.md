# @inovex.de/elements

This is the core package containing all the inovex Elements as pure Web Components.

> You can integrate the inovex Elements into Angular, React, Vue or JavaScript projects. See below for instructions.

## Installation

See [instructions](https://github.com/inovex/elements/tree/master/packages/storybook/src/stories/docs/framework-integration) how to integrate it into your project.

## Contributing

Please refer to the top level [README at GitHub](https://github.com/inovex/elements) to see the available script commands.


## 🧪 Testing Strategy

inovex elements uses two complementary testing approaches:

### Unit Tests (Stencil / Jest)
> `packages/elements/src/components/**/*.spec.ts`

Use unit tests for anything that can be verified by inspecting the rendered DOM in isolation:

- **Property → class/attribute mapping**: does setting `disabled="true"` add the right CSS class?
- **Event emission**: does clicking fire the expected custom event?
- **Event stopping**: is an internal event stopped from propagating?
- **Conditional rendering**: are elements added/removed based on props?

Unit tests use `newSpecPage` from `@stencil/core/testing` and run in JSDOM via Jest. They are fast, self-contained, and require no running browser or server.

```ts
// Example
const page = await newSpecPage({ components: [MyComponent], html: `<my-component/>` });
myEl.setAttribute('disabled', 'true');
await page.waitForChanges();
expect(myEl.querySelector('button')).toHaveClass('is-disabled');
```

**Do NOT use unit tests** when the behaviour depends on a real browser layout engine, actual CSS rendering, or third-party JS that breaks in JSDOM (e.g. MDC JS interactions, animation callbacks, focus management).

### E2E Tests (Playwright)
> `packages/storybook/src/stories/**/*.spec.ts`

Use Playwright tests for anything that requires a real browser or interaction with a fully rendered story:

- **Visual / layout behaviour**: element visibility, dimensions, CSS transitions.
- **User interaction flows**: click sequences, keyboard navigation, focus trapping.
- **Third-party JS integration**: components backed by MDC that rely on JS lifecycle hooks (e.g. drawer open/close driven by `MDCDrawer`).
- **Cross-component behaviour**: interactions that involve multiple components working together.

Playwright tests run against the running Storybook dev server (`pnpm start:storybook`) and use the `goToStory` helper to navigate to a specific story.

```ts
// Example
await goToStory(page, ['Structure', 'ino-nav-drawer', 'default']);
await page.getByRole('button', { name: 'Toggle Navigation' }).click();
await expect(page.getByText('Home')).toBeHidden();
```

**Rule of thumb**: start with a unit test. Only reach for Playwright when you need real browser behaviour.


## Technologies used

### Stencil

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool. Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements
v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all.

### Storybook

[Storybook](https://github.com/storybooks/storybook) is a development environment for UI components. It allows us to browse the inovex Elements, view the different states of each component, and interactively develop and test inovex components.

The Storybook is part of the development process and used to test the components as well as to show the most common use cases. We work with it and provide it as our documentation for consuming developers.

![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)
