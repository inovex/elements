export const sectionExists = (
  sectionId: string,
): boolean => {
    return document.getElementById(sectionId) !== null;
};

export const buildSectionId = (name: string): string | null =>
  name?.toLowerCase().replace(/\s+/g, '-') ?? null;
