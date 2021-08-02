declare module '*.md';
declare module '*.jpg' {
  const value: unknown;
  export = value;
}
