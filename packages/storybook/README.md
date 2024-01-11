# @inovex.de/elements-storybook

> The following information is only relevant if you want to contribute to the elements. If you just want
> to use the UI elements for your own project, please refer to the top level [README](../../README.md).

This is the Storybook package containing all the documentation for the following packages:

- [@inovex.de/elements](../elements)
- [@inovex.de/elements-angular](../elements-angular)
- [@inovex.de/elements-react](../elements-react)

# How to write stories for a component

Example:

my-component.stories.ts
```
const MyComponentMeta = {
  title: 'Structure/<my-component>',
  component: 'my-component',
  render: (args) => html` <my-component
    my-prop="${args.myProp}"
    @myPropChange="${eventHandler}"
  >
  </my-component>`,
  args: {
    myProp: false, // will be used as default value
  },
} as Meta<Components.MyComponent>;

export default MyComponentMeta;

// Primary Story
export const Default = Story({
  ...MyComponentMeta,
});

// Additional Story
export const MyProp = Story({
  ...Default,
  docsFromProperty: 'my-prop',
  args: {
    myProp: true,
  },
});
```

## Storybook Guide for `my-component`
This guide will walk you through the setup and configuration of a Storybook story for the `my-component` component using TypeScript.

## Step 1: Define Component Metadata
Start by creating an object named `MyComponentMeta` that contains the metadata for your component:

- `title`: Set the title to `Structure/<my-component>` to categorize your component under `Structure` in Storybook's sidebar.
- `component`: Specify the component's tag name as `my-component`.
- `render`: Define a render function that uses the `args` to render your component with dynamic properties. The `eventHandler` should be a function that handles the `myPropChange` event.
- `args`: Set default values for your component's properties. In this example, `myProp` is set to `false`.

## Step 2: Export Component Metadata
Export MyComponentMeta as the default export of the module. This will be used by Storybook to understand how to render and document your component.

## Step 3: Create Default Story
Define a default story for your component by using the `Story` function and spreading the `MyComponentMeta`. This will create a story with the default configuration.

```
export const Default = Story({
  ...MyComponentMeta,
});
```

## Step 4: Create Variant Stories
To showcase different states or variants of your component, you can create additional stories. For instance, the `MyProp` story demonstrates the component with `myProp` set to `true`. You can also include additional documentation properties like docsFromProperty if your Storybook setup supports it.

```
export const MyProp = Story({
  ...Default,
  docsFromProperty: 'my-prop',
  args: {
    myProp: true,
  },
});
```

## Step 5: Run Storybook
Run your Storybook instance to see your component and its stories in action. You should be able to interact with your component and see the effects of the different props as defined in your stories.