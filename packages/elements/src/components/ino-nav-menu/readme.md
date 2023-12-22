# ino-nav-menu

<!-- Auto Generated Below -->


## Overview

A sticky navigation menu or sidebar that dynamically lists the names of sections present
on the current page. Each section must be constructed using the `ino-nav-menu-section` component.
When a user selects a section from the navigation menu by clicking its name, the corresponding
section will smoothly scroll into the viewport, and vice versa.

The selected or active section must be handled outside of the component using the property
`activeSection` and the event `activeSectionChanged` as described below.

## Properties

| Property                     | Attribute        | Description                                                                                                                                                                                                                                                                                                                                       | Type                       | Default                    |
| ---------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | -------------------------- |
| `activeSection`              | `active-section` | To specify the selected section, utilize the `buildSectionId` helper function to generate a unique section ID based on the section name. This ID must be provided when configuring the component. The section ID can be set to null if no section should be selected initially or when operating in autodetect mode (means no sections provided). | `string`                   | `undefined`                |
| `intersectionObserverConfig` | --               | Config of the internal intersection observer.                                                                                                                                                                                                                                                                                                     | `IntersectionObserverInit` | `DEFAULT_OBSERVER_OPTIONS` |
| `menuTitle` _(required)_     | `menu-title`     | Title of the navigation menu.                                                                                                                                                                                                                                                                                                                     | `string`                   | `undefined`                |
| `scrollOffset`               | `scroll-offset`  | Scroll offset of the sticky navigation menu.                                                                                                                                                                                                                                                                                                      | `number`                   | `DEFAULT_SCROLL_OFFSET`    |
| `sections`                   | --               | Section names that should appear in the navigation menu. If no value is provided, the component will automatically look up all `ino-nav-menu-section` components on the current page. If any of the provided section names is invalid, a warning will be logged in the browser console.                                                           | `string[]`                 | `undefined`                |


## Events

| Event                  | Description                                                                                                                                                        | Type                  |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------- |
| `activeSectionChanged` | Emits the section ID when the corresponding section is selected by scrolling into the viewport. This event can be utilized to update the `activeSection` property. | `CustomEvent<string>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
