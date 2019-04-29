import React from 'react';
import ReactDOM from 'react-dom';
import { attachEventProps, dashToPascalCase } from './utils';
import { toStencilProps } from '../inovexCustom';

export function createReactComponent<T extends object, E>(tagName: string) {
  const displayName = dashToPascalCase(tagName);

  // tslint:disable-next-line
  type IonicReactInternalProps = {
    forwardedRef?: React.RefObject<E>;
    children?: React.ReactNode;
  };
  type InternalProps = T & IonicReactInternalProps;

  // tslint:disable-next-line
  type IonicReactExternalProps = {
    ref?: React.RefObject<E>;
    children?: React.ReactNode;
  };

  class ReactComponent extends React.Component<InternalProps> {
    componentRef: React.RefObject<E>;

    constructor(props: T & IonicReactInternalProps) {
      super(props);
      this.componentRef = React.createRef();
    }

    static get displayName() {
      return displayName;
    }

    componentDidMount() {
      this.componentWillReceiveProps(this.props);
    }

    componentWillReceiveProps(props: InternalProps) {
      const node = ReactDOM.findDOMNode(this) as HTMLElement;

      attachEventProps(node, props);
    }

    render() {
      const { children, forwardedRef, ...cProps } = this.props;

      return React.createElement(
        tagName,
        {
          ...toStencilProps(cProps),
          ref: forwardedRef
        },
        children
      );
    }
  }

  function forwardRef(props: InternalProps, ref: React.RefObject<E>) {
    return <ReactComponent {...props} forwardedRef={ref} />;
  }
  forwardRef.displayName = displayName;

  return React.forwardRef<E, T & IonicReactExternalProps>(forwardRef);
}

