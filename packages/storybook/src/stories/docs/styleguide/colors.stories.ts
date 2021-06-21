import { html } from 'lit-html';
import './styles.scss';

export default {
  title: 'Docs/Styleguide/Colors',
};

export const Colors = () => html`
  These shades will represent the brand in graphical elements, texts, syntax,
  backgrounds and ui elements.
  <h2>Inovex</h2>
  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #003C7E"></div>
    <div class="color-hex" style="color: #003C7E">#003C7E</div>
  </div>

  <h2>Primary</h2>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #3D40F5"></div>
    <div class="color-hex" style="color: #3D40F5">#3D40F5, Base</div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #5D60F7"></div>
    <div class="color-hex" style="color: #5D60F7">#5D60F7, Light</div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #0D10F3"></div>
    <div class="color-hex" style="color: #0D10F3">#0D10F3, Dark</div>
  </div>

  <h2>Secondary</h2>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #9CCD00"></div>
    <div class="color-hex" style="color: #9CCD00">#9CCD00, Base</div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #BBD962"></div>
    <div class="color-hex" style="color: #BBD962">#BBD962, Light</div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #93BF00"></div>
    <div class="color-hex" style="color: #93BF00">#93BF00, Dark</div>
  </div>

  <h2>Success</h2>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #9CCD00"></div>
    <div class="color-hex" style="color: #9CCD00">#9CCD00</div>
  </div>

  <h2>Warning</h2>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #FFDE03"></div>
    <div class="color-hex" style="color: #FFDE03">#FFDE03</div>
  </div>

  <h2>Error</h2>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #E00051"></div>
    <div class="color-hex" style="color: #E00051">#E00051</div>
  </div>

  <h2>Light</h2>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #C1C1C1"></div>
    <div class="color-hex" style="color: #C1C1C1">#C1C1C1</div>
  </div>

  <h2>Dark</h2>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #777777"></div>
    <div class="color-hex" style="color: #777777">#777777</div>
  </div>
`;
