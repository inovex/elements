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
  </div>
`;

export const Font = () => html`
<div class="typo-docs">
  <p>This is the default font.</p>
  <div class="font font--lato font--lato-example">
    ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
    123456789!"§$%&/()=?
  </div>
</div>
`;

export const HeaderSizeH1 = () => html`
<div class="header-h1">
  This is a Headline
</div> 
`;

export const HeaderSizeH2 = () => html`
<div class="header-h2">
  This is a Headline
</div>  
`;

export const HeaderSizeH3 = () => html`
<div class="header-h3">
  This is a Headline
</div>  
`;

export const HeaderSizeH4 = () => html`
<div class="header-h4">
  This is a Headline
</div>  
`;

export const HeaderSizeH5 = () => html`
<div class="header-h5">
  This is a Headline
</div>  
`;

export const HeaderSizeH6 = () => html`
<div class="header-h6">
  This is a Headline
</div>  
`;

export const Link = () => html`
<div class="typo-docs">
  <a href="#">This is a link</a>
</div>
`;

export const Bold = () => html`
<div class="typo-docs">
  <b>This is a bold text</b>
</div>
`;

export const Emphasized = () => html`
<div class="typo-docs">
  <em>This is an emphasized text</em>
</div>
`;

export const Italic = () => html`
<div class="typo-docs">
  <i>This is an italic text</i>
</div>
`;

export const Small = () => html`
<div class="typo-docs">
  <small>This is a small text</small>
</div>
`;

export const Abbreviate = () => html`
<div class="typo-docs">
  <abbr>This is an abbreviated text</abbr>
</div>
`;

export const Paragraph = () => html`
<div class="typo-docs">
  <p>
  Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In
  malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at
  vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl,
  molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum
  vestibulum felis ac molestie. Praesent aliquet quam et libero dictum,
  vitae dignissim leo eleifend.
  </p>
</div>
`;