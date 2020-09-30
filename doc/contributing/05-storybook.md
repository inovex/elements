# Storybook

We maintain a Storybook to demonstrate the usage of our components.

Every time we create a new component, we add at least one story which...

* ...has the name **Default usage**.
* ...contains a **customizable instance** before any other usage examples (see below).
* ...contains some specific usage examples integrated into a Stackblitz playground to demonstrate most of the functionality (the more the better).

## Customizable Instances

A customizable instance is just a component where all attributes of a component are set by the Storybook [Knobs Addon](https://github.com/storybooks/storybook/tree/master/addons/knobs).

This allows the consumer (the person who uses the components) to give users the ability to explore all possible variants of an element. Customizable, in this case, means that users can pass any possible value to an element.

When providing Knobs for a component:

* Make sure that you use the most fitting type (text, boolean, number, select, ...).
* Provide a knob for each available attribute.
* Name the knob after the attribute, for example `ino-color-scheme`
