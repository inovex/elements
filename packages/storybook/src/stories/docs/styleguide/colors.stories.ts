import { html } from 'lit-html';
import './styles.scss';

export default {
  title: 'Docs/Styleguide/Colors',
};

export const Colors = () => html`
  These shades will represent the brand in graphical elements, texts, syntax,
  backgrounds and ui elements.
  <h2>Basics</h2>

  <div class="color-wrapper">
    <div
      class="color-rect border"
      style="background-color: #FFF; border: 1px solid black"
    ></div>
    <div class="color-hex" style="color: black">
      #FFF, --inovex-elements-white
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #000"></div>
    <div class="color-hex" style="color: #000">
      #000, --inovex-elements-black
    </div>
  </div>

  <div class="color-wrapper">
    <div
      class="color-rect transparent border"
      style="background-color: rgba(255, 255, 255, 0);"
    ></div>
    <div class="color-hex" style="color: black">
      rgba(255, 255, 255, 0), --inovex-elements-transparent
    </div>
  </div>

  <h2>Neutrals</h2>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #F4F4F7"></div>
    <div class="color-hex" style="color: black">
      #F4F4F7, --inovex-elements-n-1
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #DFDEE6"></div>
    <div class="color-hex" style="color: black">
      #DFDEE6, --inovex-elements-n-2
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #CAC8D5"></div>
    <div class="color-hex" style="color: #CAC8D5">
      #CAC8D5, --inovex-elements-n-3
    </div>
  </div>
  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #B6B4C4"></div>
    <div class="color-hex" style="color: #B6B4C4">
      #B6B4C4, --inovex-elements-n-4
    </div>
  </div>
  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #A3A0B3"></div>
    <div class="color-hex" style="color: #A3A0B3">
      #A3A0B3, --inovex-elements-n-5
    </div>
  </div>
  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #908DA2"></div>
    <div class="color-hex" style="color: #908DA2">
      #908DA2, --inovex-elements-n-6
    </div>
  </div>
  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #7E7B91"></div>
    <div class="color-hex" style="color: #7E7B91">
      #7E7B91, --inovex-elements-n-7
    </div>
  </div>
  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #6D6A80"></div>
    <div class="color-hex" style="color: #6D6A80">
      #6D6A80, --inovex-elements-n-8
    </div>
  </div>
  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #5D5B69"></div>
    <div class="color-hex" style="color: #5D5B69">
      #5D5B69, --inovex-elements-n-9
    </div>
  </div>
  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #4C4B52"></div>
    <div class="color-hex" style="color: #4C4B52">
      #4C4B52, --inovex-elements-n-10
    </div>
  </div>
  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #39383C"></div>
    <div class="color-hex" style="color: #39383C">
      #39383C, --inovex-elements-n-11
    </div>
  </div>
  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #191919"></div>
    <div class="color-hex" style="color: #191919">
      #191919, --inovex-elements-n-12
    </div>
  </div>

  <h2>Primary</h2>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #2C02FF"></div>
    <div class="color-hex" style="color: #2C02FF">
      #2C02FF, --inovex-elements-primary
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #2D5DFF4D"></div>
    <div class="color-hex" style="color: #2D5DFF4D">
      #2D5DFF4D, --inovex-elements-primary-focus
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #F6FAFe"></div>
    <div class="color-hex" style="color: black">
      #F6FAFE, --inovex-elements-p-1
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #E2ECFF"></div>
    <div class="color-hex" style="color: black">
      #E2ECFF, --inovex-elements-p-2
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #BECCFF"></div>
    <div class="color-hex" style="color: #BECCFF">
      #BECCFF, --inovex-elements-p-3
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #8AA1FF"></div>
    <div class="color-hex" style="color: #8AA1FF">
      #8AA1FF, --inovex-elements-p-4
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #4655FF"></div>
    <div class="color-hex" style="color: #4655FF">
      #4655FF, --inovex-elements-p-5
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #2D02FF"></div>
    <div class="color-hex" style="color: #2D02FF">
      #2D02FF, --inovex-elements-p-6
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #1801E1"></div>
    <div class="color-hex" style="color: #1801E1">
      #1801E1, --inovex-elements-p-7
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #0801C4"></div>
    <div class="color-hex" style="color: #0801C4">
      #0801C4, --inovex-elements-p-8
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #0106A6"></div>
    <div class="color-hex" style="color: #0106A6">
      #0106A6, --inovex-elements-p-9
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #000E88"></div>
    <div class="color-hex" style="color: #000E88">
      #000E88, --inovex-elements-p-10
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #00126A"></div>
    <div class="color-hex" style="color: #00126A">
      #00126A, --inovex-elements-p-11
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #00124D"></div>
    <div class="color-hex" style="color: #00124D">
      #00124D, --inovex-elements-p-12
    </div>
  </div>

  <h2>Alert colors</h2>

  <h3>Informational</h3>
  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #2D5DFF"></div>
    <div class="color-hex" style="color: #2D5DFF">
      #2D5DFF, --inovex-elements-informational
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #D6E0FF"></div>
    <div class="color-hex" style="color: black">
      #D6E0FF, --inovex-elements-informational-light
    </div>
  </div>

  <h3>Success</h3>
  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #6CF070"></div>
    <div class="color-hex" style="color: #6CF070">
      #6CF070, --inovex-elements-success
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #D7FAD8"></div>
    <div class="color-hex" style="color: black">
      #D7FAD8, --inovex-elements-success-light
    </div>
  </div>

  <h3>Error</h3>
  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #FF2E54"></div>
    <div class="color-hex" style="color: #FF2E54">
      #FF2E54, --inovex-elements-error
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #FFD6DE"></div>
    <div class="color-hex" style="color: black">
      #FFD6DE, --inovex-elements-error-light
    </div>
  </div>

  <h3>Warning</h3>
  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #FFA42E"></div>
    <div class="color-hex" style="color: #FFA42E">
      #FFA42E, --inovex-elements-warning
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #FFEED6"></div>
    <div class="color-hex" style="color: black">
      #FFEED6, --inovex-elements-warning-light
    </div>
  </div>
`;
