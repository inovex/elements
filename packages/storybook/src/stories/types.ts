export type CssValue = string | number;

export interface CssProperties {
  [prop: string]: CssProp<string> | CssProp<number>;
}

export type CssPropType = 'color' | 'size' | 'text' | 'time' | 'number';

export interface CssProp<T = unknown> {
  name: string;
  description: string;
  defaultValue?: T;
  type: CssPropType;
  unit?: string;
}
