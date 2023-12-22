export const sectionExists = (id: string): boolean =>
  document.getElementById(id) !== null;

export const buildSectionId = (name: string): string | null =>
  name?.toLowerCase().replace(/\s+/g, '-') ?? null;
