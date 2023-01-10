import vueIcon from '@assets/vue.svg';
import angularIcon from '@assets/angular.svg';
import reactIcon from '@assets/react-icon.svg';
import jsIcon from '@assets/javascript.svg';

export enum Framework {
  VUE = 'VUE',
  ANGULAR = 'ANGULAR',
  REACT = 'REACT',
  NATIVE = 'NATIVE',
}

export const IconByFramework: Record<Framework, string> = {
  [Framework.VUE]: vueIcon,
  [Framework.ANGULAR]: angularIcon,
  [Framework.REACT]: reactIcon,
  [Framework.NATIVE]: jsIcon,
};
