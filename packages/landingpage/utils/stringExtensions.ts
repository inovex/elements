export {};

declare global {
  interface String {
    toCamelCase(): string;
  }
}

String.prototype.toCamelCase = function (): string {
  return this.replace(/\s+/g, '-').toLowerCase();
};
