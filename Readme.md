

# inovex elements &#8203; [&#x1f517;](https://elements.inovex.io)
An inovex project containing awesome and reusable components based on native web components. :fire:

> Please note: We are at the beginning of the inovex elements library. Things may break without giving any deprecation notice. Join the project slack channel #proj-inovex-elements to be up to date.

> This is a monorepository based on [lerna](https://github.com/lerna/lerna). We provide packages for the library and integrations in react as well as angular. See the `packages/*` folders for more technical details.


## Background
As we all know, new frontends often go along with redundant tasks like developing inputs, selects or more complex elements like tooltips. Since the rise of web components is finally happening with native browser support in all major browsers, we should take this opportunity to make our all lives easier!

This project provides a set of small and generic components to be used in the inovex project of your choice. The fundamental elements having a high interoperability with major frameworks like Angular, React, Vue.js and more.

The advantages are faster development times and fewer maintaining resources. Native elements in the inovex brand increase the consistency of our projects and decrease the redundancy.


## Getting started

Make sure you have yarn installed. Run `yarn install`.

These are the necessary scripts:

* `yarn start` launches `@inovex/core` components in development mode
* `yarn test` run tests in all packages
* `yarn build` build all packages
* `yarn build.local` build and publish packages to yalc store
* `yarn lint` run ts linting in all packages
* `yarn clean` removes node_modules from root and all packages as well as the packages artifacts. 

To use the components refer to the proper packages:

* [@inovex/elements](packages/core/readme.md)
* [@inovex/elements-angular](packages/elements-angular/elements/README.md)
* [@inovex/elements-react](packages/react/README.md)


## Framework providers
However, if you use Angular or React, please see the respective `@inovex/elements-angular` and `@inovex/elements-react` packages and the description within it. These package are a thin layer on top of our Web Components to achieve a better framework integration.