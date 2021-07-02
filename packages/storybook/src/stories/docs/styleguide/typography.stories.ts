import { html } from 'lit-html';
import './typography.scss';

export default {
  title: 'Docs/Styleguide/Typography',
};

export const Typography = () => html`
  <div class="typo-docs">
    <p>
      For typography you should always care about size, spacing and height of
      the font.
    </p>

    <div class="flex-row">
      <h1>Font</h1>
      <p>This is the default font.</p>
      <div class="font font--lato font--lato-example">
        ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
        123456789!"§$%&/()=?
      </div>
    </div>

    <div class="flex-row">
      <h1>Headings</h1>
      <h1>Heading Level 1</h1>
      <h2>Heading Level 2</h2>
    </div>

    <div class="flex-row">
      <h1>Link</h1>
      <a href="#">This is a link</a>
    </div>

    <div class="flex-row">
      <h1>Bold</h1>
      <b>This is a bold text</b>
    </div>

    <div class="flex-row">
      <h1>Emphasized</h1>
      <em>This is an emphasized text</em>
    </div>

    <div class="flex-row">
      <h1>Italic</h1>
      <i>This is an italic text</i>
    </div>

    <div class="flex-row">
      <h1>Small</h1>
      <small>This is a small text</small>
    </div>

    <div class="flex-row">
      <h1>Abbreviate</h1>
      <abbr>This is an abbreviated text</abbr>
    </div>

    <div class="flex-row">
      <h1>Paragraph</h1>
      <p>
        Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In
        malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at
        vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl,
        molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum
        vestibulum felis ac molestie. Praesent aliquet quam et libero dictum,
        vitae dignissim leo eleifend.
      </p>
    </div>
  </div>
`;
