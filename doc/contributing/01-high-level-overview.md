# High Level Overview

To provide you a better understanding what this mono repo contains and how things relate to each other.

## The Repository Structure

This is a mono repository based on Lerna. Lerna is a tool for managing JavaScript projects with multiple packages. Visit the [Lerna GitHub repository website](https://github.com/lerna/lerna) to learn more about Lerna.

Each package provides a separate README and is distributed as self contained package through npm. These packages are a thin layer on top of our Web Components to achieve a better framework integration. Please refer to the subfolder of the corresponding package to get more information about the package itself:

> You can follow the link on the package name to directly go to the repository location.

| <div style="width:220px">**Package**</div> | <div style="width:200px">**Description**</div> | **Primary Usage Intention** |
| --- | --- | --- |
| [@inovex/elements](https://gitlab.inovex.de/inovex-elements/core/-/tree/master/packages/elements)|Native Web Components|Websites, WebApps and Microfrontends without a framework.|
| [@inovex/elements-angular](https://gitlab.inovex.de/inovex-elements/core/-/tree/master/packages/elements-angular)|Angular integration layer|WebApps based on [Angular](https://github.com/angular).|
| [@inovex/elements-react](https://gitlab.inovex.de/inovex-elements/core/-/tree/master/packages/elements-react)|React integration layer|WebApps based on [React](https://github.com/facebook/react).|
| [@inovex/elements-storybook](https://gitlab.inovex.de/inovex-elements/core/-/tree/master/packages/storybook)|Storybook documentation|API reference and guide for developers.|

### Elements Core

This package contains our components written with [Stencil](https://stenciljs.com/) and wires up the code of [Googles Material Design Components for the Web](https://github.com/material-components/material-components-web/) (MDC) as our foundation layer as well as additional third party dependencies like [flatpickr](https://flatpickr.js.org/).

The output of this package is what Stencil produces. Read more on Stencil below.

#### Stencil

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool. Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements
v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all.

#### Google Material Design Components for the Web

We use [Googles Material Design Components for the Web](https://github.com/material-components/material-components-web/) to speed up the development. This is also a good foundation as the major functionality is already implemented. We often only need to tweak and change some bits to match our behaviour.

Each component is published on npm as separate package. So in theory we can upgrade single components and use them in different versions. The repo is structured in a nice way. Each component has its own README. You can find the [list of all MDC components in the GitHub repo](https://github.com/material-components/material-components-web/blob/master/packages). It feels a bit like back in the days when the [Twitter Bootstrap](https://getbootstrap.com/) framework came out. You go to the documentation, copy a piece of HTML markup into your template and import the SASS mixin into your sass Stylesheet and only modify those parts you want to make dynamic.

When creating a new element, always check for a respective material design implementation. We losely follow these rules:

- Abstract the features of the material design components to the need of our inovex element.
- Provide a link to the material component in the documentation.
- If the element comes with js, instantiate the `MDCFactory` in the `componentDidLoad` method and call the `destroy` method in `componentWillUnLoad`.

### Angular Integration Layer

> Package `@inovex/elements-angular`

This project is just a normal Angular Library which consumes the core package and outputs Directives for other Angular projects to consume.

Everytime you run `yarn start` or `yarn build` from within the root of this repo, Lerna builds first the core package, then the Directives in this package. The core package is just a dependeny of this Angular Library. This project does only provide a wrapper Directive to map the Custom Elements attributes and events to the @Input and @Output values in the Angular world.

You only need to change this package if you add a new or remove an existing component from the core. As well as you want to support `ngModel`. To learn more on this, refer to the [README](https://gitlab.inovex.de/inovex-elements/core/-/blob/master/packages/elements-angular/elements/README.md) of `@inovex/elements-angular`.

### React Integration Layer

> Package `@inovex/elements-react`

This project is just a normal React project which consumes the core package and outputs React components for other React projects to consume.

Everytime you run `yarn start` or `yarn build` from within the root of this repo, Lerna builds first the core package, then the React components in this package. The core package is just a dependeny of this React project. This project does only provide a wrapper component to map the Custom Elements attributes and events to the props in the React world.

You should never have to make changes to this package. To learn more on this, refer to the [README](https://gitlab.inovex.de/inovex-elements/core/-/blob/master/packages/elements-react/README.md) of `@inovex/elements-react`.

### Storybook

> Package `@inovex/elements-storybook`

[Storybook](https://github.com/storybooks/storybook) is a development environment for UI components. It allows us to browse the inovex elements, view the different states of each component, and interactively develop and test inovex components.

The Storybook is part of the development process and used to test the components as well as to show the most common use cases. We work with it and provide it as our documentation for consuming developers.
