import { Story } from '@storybook/web-components';
import docsJson from '../../elements-stencil-docs';

export class TemplateGenerator<Component> {
  private readonly tagName: string;
  private readonly template: Story<Component>;

  constructor(tagName: string, template: Story<Component>) {
    this.tagName = tagName;
    this.template = template;
  }

  public generateStory(args: Component, prop?: string) {
    const BoundTemplate: Story<Component> = this.template.bind({});
    BoundTemplate.args = { ...args };

    if (prop) {
      BoundTemplate.parameters = {
        docs: {
          description: {
            story: docsJson.components
              .find((component) => component.tag === this.tagName)
              .props.find((p) => p.name === prop).docs,
          },
        },
      };
    }

    return BoundTemplate;
  }
}
