export const pascalCaseToDash = (name: string) =>
  name.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);

export const toStencilProps = (reactProps: any) => {
  const stencilProps = {} as any;
  Object.keys(reactProps).map(propKey => {
    if (isInoElementsProp(propKey)) {
      stencilProps[pascalCaseToDash(propKey)] = (reactProps as any)[propKey];
    } else {
      stencilProps[propKey] = (reactProps as any)[propKey];
    }
  });

  return stencilProps;
};
const isInoElementsProp = (propName: string) =>
  propName.startsWith('ino') &&
  propName[3] &&
  propName[3] === propName[3].toUpperCase();
