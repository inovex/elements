import { ArgTypes, Args, Story, StoryFn } from '@storybook/web-components';
import { ArgType } from '@storybook/addons';
import docsJson from '../../elements-stencil-docs';
import { CssProp, CssPropType, CssProperties } from './types';

/**
 * A utility class that helps with creating type-safe stories
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export class TemplateGenerator<Component extends Object> {
  private readonly tagName: string;
  private readonly templateFn: Story<Component>;

  constructor(tagName: string, templateFn: Story<Component>) {
    this.tagName = tagName;
    this.templateFn = templateFn;
  }

  /**
   * Generates the default template story.
   *
   * @param cssProps CSS variables to be controlled in the arg table
   */
  public generatePlaygroundStory(cssProps?: CssProperties) {
    if (cssProps) {
      return this.generateTemplateWithCssProps(cssProps);
    }
    return this.generateTemplate();
  }

  /**
   * Generates a story based of a key-value-pair and automatically adds the documentation of the property.
   *
   * @param key Name of the property
   * @param value The value of the property which is assignable to `key`
   * @param otherProps Other properties which should bet set for this story
   */
  public generateStoryForProp<Key extends keyof Component>(
    key: Key,
    value: Component[Key],
    otherProps?: Partial<Omit<Component, Key>>,
  ): StoryFn<Component> {
    let argument: Component = ({ [key]: value } as unknown) as Component;

    if (otherProps) {
      argument = {
        ...argument,
        ...otherProps,
      };
    }

    return this.generateTemplate(key, argument);
  }

  private generateTemplate(
    prop?: keyof Component,
    args?: Args,
  ): StoryFn<Component> {
    const storyFn: Story<Component> = this.templateFn.bind({});

    if (args) {
      storyFn.args = { ...args } as Partial<Component>;
    }

    if (prop) {
      storyFn.parameters = {
        docs: {
          description: {
            story: this.findPropertyDocs(prop),
          },
        },
      };
    }

    return storyFn;
  }

  private generateTemplateWithCssProps(
    cssProps: CssProperties,
  ): StoryFn<Component> {
    const storyFn: StoryFn<Component> = (args, ctx) => {
      applyCssProps(cssProps, args, ctx.id);
      return this.templateFn(args, ctx);
    };
    storyFn.args = { ...cssArgs(cssProps) } as Partial<Component>;
    storyFn.argTypes = { ...cssArgTypes(cssProps) } as Partial<
      ArgTypes<Component>
    >;
    return storyFn;
  }

  /**
   * `prop` is used to search for the JSDoc comment of the specified property in the `elements-stencil-docs.json`.
   * @param prop
   * @private
   */
  private findPropertyDocs(prop: keyof Component): string {
    let docs: string;

    try {
      docs = docsJson.components
        .find((component) => component.tag === this.tagName)
        .props.find((p) => p.name === prop).docs;
    } catch (e) {
      throw new Error(
        `Could not find a description for property "${prop}" of the component "${this.tagName}" in the "elements-stencil-docs.json". Make sure that the property exists. (${e})`,
      );
    }

    return docs;
  }
}

const cssArgs = (props: CssProperties): Args =>
  Object.entries(props).reduce(
    (acc, [k, p]) => ({ ...acc, [k]: p.defaultValue }),
    {},
  );

const cssArgTypes = (props: CssProperties): ArgTypes =>
  Object.entries(props).reduce(
    (acc, [k, v]) => ({ ...acc, [k]: getInputType(v) }),
    {},
  );

const getInputType = (prop: CssProp): ArgType => ({
  name: prop.name,
  description: prop.description + (prop.unit ? ` (Unit: ${prop.unit})` : ''),
  control: {
    type: getControlType(prop.type),
    min: ['time', 'size'].includes(prop.type) ? 0 : undefined,
  },
  table: {
    category: 'Custom CSS properties',
    subcategory: getSubcategory(prop.type),
  },
});

const getControlType = (propType: CssPropType): string => {
  switch (propType) {
    case 'color':
      return 'color';
    case 'size':
    case 'time':
    case 'number':
      return 'number';
    case 'text':
    default:
      return 'text';
  }
};

const getSubcategory = (type: CssPropType): string => {
  switch (type) {
    case 'size':
      return 'Sizes';
    case 'color':
      return 'Colors';
    case 'time':
      return 'Times';
    case 'number':
      return 'Numbers';
    case 'text':
    default:
      return 'Others';
  }
};

const applyCssProps = (props: CssProperties, args: Args, id?: string): void => {
  Object.entries(props).forEach(([key, prop]) => {
    const storyElement = (id
      ? document.querySelector(`#anchor--${id}`)
      : document.documentElement) as HTMLElement;
    let value = args[key];
    if (!value) {
      storyElement.style.removeProperty(prop.name);
      return;
    }
    if (prop.unit) {
      value += prop.unit;
    }
    if (value) {
      storyElement?.style.setProperty(prop.name, value as string);
    }
  });
};
