export const getDescendantProp = (obj: any, path: string) =>
  path.split('.').reduce((acc, part) => acc && acc[part], obj);
