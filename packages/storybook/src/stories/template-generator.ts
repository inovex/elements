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
   * @param key The key of the property
   * @param value The value of the property which is assignable to `key`
   */
  public generateStory<Key extends keyof Component>(
    key: Key,
    value: Component[Key]
  ) {
    const argument: Component = ({ [key]: value } as unknown) as Component;

    return this.generateTemplate(argument, key);
  }

  /**
   * Generates a new story based of multiple arguments.
   * Adds a description of the parameter which is provided by `prop`.
   *
   * @param args Properties to assign to the template
   * @param prop The name of the "main" property the stories is written for
   */
  public generateStoryWithArgs(args: Component, prop: keyof Component) {
    return this.generateTemplate(args, prop);
  }

  /**
   * A utility function to inherit the args of one or more stories.
   *
   * @param mainStory The main story which arguments have the highest priority
   * @param storiesToReuse One or more stories which args should be inherited. The last one has the highest priority (still below `mainStory`).
   */
  public extendStory(
    mainStory: Story<Component>,
    ...storiesToReuse: Story<Component>[]
  ) {
    const args = {};
    storiesToReuse.forEach((story) => Object.assign(args, story.args));

    mainStory.args = Object.assign({}, args, mainStory.args);
    return mainStory;
  }

  private generateTemplate(args?: Component, prop?: keyof Component) {
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
