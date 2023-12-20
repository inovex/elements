import { Meta } from '@storybook/web-components';
import docsJson from '../../elements-stencil-docs';
import { merge } from 'lodash';

export interface MetaWrapper<T> extends Meta<T> {
  docsFromProperty?: keyof T;
}

/**
 * This is an optional wrapper around the Meta type of storybook.
 * It extends the Meta type by `docsFromProperty` that can be used to extract the comment of a property made in the stencil component.
 *
 * Example:
 * If a Stencil component looks like this:
 * ```ts
 * class MyStencilComponent {
 *   // Used to expand or collapse the component.
 *   expanded: boolean
 * }
 * ```
 * You can write a story like this and the comment ("Used to expand or collapse the component.") will be added above the story.
 * ```
 * export const Expanded = Story({
 *   render: () => ...,
 *   docsFromProperty: 'expanded'
 *   args: {
 *     expanded: false
 *   },
 * })
 * ```
 *
 * @param meta The story object (see https://release-7-0--storybook-frontpage.netlify.app/docs/7.0/writing-stories/introduction) with the extra `docsFromProperty` string
 * @returns The same object extended with the added documentation
 */
export default function Story<C extends object>(meta: MetaWrapper<C>) {
  if (meta.docsFromProperty) {
    if (!meta.component) throw new Error('Component name needs to be provided');

    const doc = findPropertyDocumentationInJsonDoc(
      meta.component,
      meta.docsFromProperty as string,
    );

    return merge({}, meta, {
      parameters: { docs: { description: { story: doc } } },
    });
  }


  return meta;
}

function findPropertyDocumentationInJsonDoc(
  tagName: string,
  property: string,
): string {
  const componentDocs = docsJson.components.find((doc) => doc.tag === tagName);

  if (!componentDocs)
    throw new Error(`Could not find docs for component ${tagName}.`);

  const propDocs = componentDocs.props.find((prop) => prop.name === property);

  if (!propDocs)
    throw new Error(`Could not find docs for property ${property}.`);

  return propDocs.docs;
}
