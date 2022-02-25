import { Story } from '@storybook/web-components';
import docsJson from '../../elements-stencil-docs';

/**
 * A utility class that helps with creating type-safe stories
 */
export class TemplateGenerator<Component> {
  private readonly tagName: string;
  private readonly templateFn: Story<Component>;

  constructor(tagName: string, templateFn: Story<Component>) {
    this.tagName = tagName;
    this.templateFn = templateFn;
  }

  /**
   * Generates a new story based of the provided args.
   * Additionally, adds a description if the parameter `prop` is used.
   * The `prop` is used to search for the JSDoc comment of the specified property in the `elements-stencil-docs.json`.
   *
   * @param args Properties to assign to the template
   * @param prop The name of the "main" property the stories is written for
   */
  public generateStory(args: Component, prop?: string) {
    const BoundTemplate: Story<Component> = this.templateFn.bind({});
    BoundTemplate.args = { ...args };

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

  private findPropertyDocs(prop: string): string {
    return docsJson.components
      .find((component) => component.tag === this.tagName)
      .props.find((p) => p.name === prop).docs;
  }
}
