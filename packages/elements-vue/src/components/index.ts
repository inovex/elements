import { defineContainer } from "../vue-component-lib/utilsMod";
import { JSX } from "@inovex.de/elements";

export const InoTextarea = /*@__PURE__*/ defineContainer<JSX.InoTextarea>('ino-textarea', undefined, [
    'autoFocus',
    'cols',
    'disabled',
    'maxlength',
    'minlength',
    'showCharacterCounter',
    'name',
    'placeholder',
    'required',
    'showLabelHint',
    'rows',
    'value',
    'outline',
    'autogrow',
    'label',
    'inoBlur',
    'valueChange'
  ],
  'value', 'v-value-change', 'valueChange');
