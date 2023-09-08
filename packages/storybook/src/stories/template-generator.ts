import { Story } from '@storybook/web-components';
import docsJson from '../../elements-stencil-docs';

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
   */
  public generatePlaygroundStory() {
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
    otherProps?: Partial<Omit<Component, Key>>
  ) {
    let argument: Component = { [key]: value } as unknown as Component;

    if (otherProps) {
      argument = {
        ...argument,
        ...otherProps,
      };
    }

    return this.generateTemplate(key, argument);
  }

  private generateTemplate(prop?: keyof Component, args?: Component) {
    const BoundTemplate: Story<Component> = this.templateFn.bind({});

    if (args) {
      BoundTemplate.args = { ...args };
    }

    if (prop) {
      BoundTemplate.parameters = {
        docs: {
          description: {
            story: this.findPropertyDocs(prop),
          },
        },
      };
    }

    return BoundTemplate;
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
        `Could not find a description for property "${prop}" of the component "${this.tagName}" in the "elements-stencil-docs.json". Make sure that the property exists. (${e})`
      );
    }

    return docs;
  }
}
