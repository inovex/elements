const SEPARATOR = '•';

export const getMetaTitle = (title: string | string[]) => {
  const combined = Array.isArray(title) ? title.join(` ${SEPARATOR} `) : title;
  return `${combined} ${SEPARATOR} inovex-elements`;
};
