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

/**
 * This is the default font.
 * Under each Fontstyle you will find a function, which describes the properties of the style: 
 * font type (weight) size/line spacing charakter spacing
 */
export const Font = () => html`
<div class="body-l">
  ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
  123456789!"§$%&/()=?
</div>
<p>Lato Regular (400) 14px/22 +0.1</p>
`;

/**
 * Short, important text or numerals; work best on Large Screens;
 * (optional: choosing a more expressive font e.g. handwritten - script style) 
 * */
export const DisplayFonts= () => html`
<h1 class="display">
  D1 Display Large
</h1>
<p>Lato bold (700) 64px/76 +0.05</p>
<h2 class="display">
  D2 Display Medium
</h2>
<p>Lato bold (700) 51px/62 +0.08</p>
<h3 class="display">
  D3 Display Small
</h3>
<p>Lato bold (700) 40px/49 +0.1</p>  
`;

/**
 * Short, high-emphasis text on smaller screens, important regions of content; (optional: can also use an expressive  typeface)
 * 
 */
export const Headlines = () => html`
<h1>
  H1 Headline Large
</h1>
<p>Lato Regular (400) 32px/39 +0.06</p>
<h2>
  H2 Headline Medium
</h2>
<p>Lato Regular (400) 28px/33 +0.05</p>
<h3>
  H3 Headline Small
</h3>
<p>Lato Regular (400) 25px/30 +0.05</p>  
`;

/**
 * Smaller than Headlines - Usage for medium-emphasis, short text; divide secondary passages of text or secondary content
 */
export const Titles = () => html`
<div class="title-l">
  Title Large
</div>
<p>Lato Semibold (600) 20px/25 +0.09</p>
<div class="title-m">
  Title Medium
</div>
<p>Lato Semibold (600) 16px/19 +0.04</p>
<div class="title-s">
  Title Small
</div>
<p>Lato Semibold (600) 14px/16 +0.02</p> 
`;

/**
 * Text inside components, very small text in the content body e. g. Captions; should enable quick reading at small sizes
 * MOBILE + WEB 
 */
export const Label = () => html`
<div class="label-l">
  Label Large
</div>
<p>Lato Medium (500) 14px/21 +0.1</p>
<div class="label-m">
  Label Medium
</div>
<p>Lato Medium (500) 12px/19 +0.4</p>
<div class="label-s">
  Label Small
</div>
<p>Lato Medium (500) 10px/16 +0.4</p>
`;

/**
 * Used for longer passages of text
 * MOBILE + WEB
 */
export const Body = () => html`
<div class="body-l">
  Body Large
</div>
<p>Lato Regular (400) 16px/25 +0.09</p>
<div class="body-m">
  Body Medium
</div>
<p>Lato Regular (400) 14px/22 +0.1</p>
<div class="body-s">
  Body Small
</div>
<p>Lato Regular (400) 12px/19 +0.14</p>
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