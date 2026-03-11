# Don't use Shadow DOM everywhere

- **Status**: proposed
- **Deciders**: Daniel Eckelt, Alexander Gerlach, Patrick Hillert, Michael Janssen, Jan-Niklas Voß
- **Date**: 2020-05-08

Technical Story: https://github.com/inovex/elements/issues/55

## Context

The Shadow DOM API allows to encapsulate the DOM and the styles of a component. This means that we don't have to worry about the correct scoping of our CSS, nor about our internal DOM being disturbed by anything outside our component. Stencil provides the ability to enable the Shadow DOM for our components.

During the implementation of the Shadow DOM we encountered the following problems:

- It was necessary to rework the styling of all components where the Shadow DOM was activated
- We use the Material Design Components Web, which expect a defined structure of the DOM. However, the structure is hidden by the Shadow DOM, which means that some of the functions and styling of the MDC components were no longer effective
- Using the Shadow DOM often resulted in complex workarounds to mimic the MDC functionality and therefore to re-implement most of the styles from MDC
- The selectors `::shadow`, `/deep/` and `>>>` for the Shadow DOM are no longer supported by the browser and the alternative selectors `::part` and `::theme` are only a draft of the CSS Shadow Parts

## Decision

The problems mentioned above led us to decide against using the Shadow DOM for the time being. The Shadow DOM offers practical advantages, but in its current form it is not worth the effort and complexity.
For some components the Shadow DOM has already been activated without significant complications. We leave these components untouched and the Shadow DOM remains activated.

## Consequences

This decision makes it difficult for us to encapsulate our internal styling from the styling of the consumers. We need to pay attention to the names of our class names and avoid general or global styles (e.g. `label { ... }`) that might affect other components. In contrast, our components do not need to be reworked and the MDCs continue to work as expected.
