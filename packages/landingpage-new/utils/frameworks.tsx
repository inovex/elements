import vueIcon from '@assets/vue.svg';
import angularIcon from '@assets/angular.svg';
import reactIcon from '@assets/react-icon.svg';
import jsIcon from '@assets/javascript.svg';

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
