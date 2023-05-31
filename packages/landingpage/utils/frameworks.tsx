import angularIcon from 'public/angular.svg';
import jsIcon from 'public/javascript.svg';
import reactIcon from 'public/react.svg';
import vueIcon from 'public/vue.svg';

export enum Framework {
  JS = 'javascript',
  REACT = 'react',
  ANGULAR = 'angular',
  VUE = 'vue',
}

export const IconByFramework: Record<Framework, string> = {
  [Framework.VUE]: vueIcon,
  [Framework.ANGULAR]: angularIcon,
  [Framework.REACT]: reactIcon,
  [Framework.JS]: jsIcon,
};

export const NameByFramework: Record<Framework, string> = {
  [Framework.REACT]: 'React',
  [Framework.ANGULAR]: 'Angular',
  [Framework.VUE]: 'Vue',
  [Framework.JS]: 'JavaScript',
};
