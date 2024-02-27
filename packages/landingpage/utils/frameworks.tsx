export enum Framework {
  JS = 'javascript',
  REACT = 'react',
  ANGULAR = 'angular',
  VUE = 'vue',
}

export const IconByFramework: Record<Framework, string> = {
  [Framework.VUE]: '/vue.svg',
  [Framework.ANGULAR]: '/angular.svg',
  [Framework.REACT]: '/react.svg',
  [Framework.JS]: '/javascript.svg',
};

export const NameByFramework: Record<Framework, string> = {
  [Framework.REACT]: 'React',
  [Framework.ANGULAR]: 'Angular',
  [Framework.VUE]: 'Vue',
  [Framework.JS]: 'JavaScript',
};
