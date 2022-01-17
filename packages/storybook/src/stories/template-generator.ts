import { Story } from '@storybook/web-components';
import docsJson from '../../elements-stencil-docs';

export class TemplateGenerator<Component> {
  private readonly tagName: string;
  private readonly templateFn: Story<Component>;

  constructor(tagName: string, templateFn: Story<Component>) {
    this.tagName = tagName;
    this.templateFn = templateFn;
  }

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
