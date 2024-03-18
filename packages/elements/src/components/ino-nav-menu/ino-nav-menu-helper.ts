export const sectionExists = (
  section: Record<'id' | 'name', string> | string,
): boolean => {
  if (typeof section === 'string') {
    return document.getElementById(section) !== null;
  }
  return document.getElementById(section.id) !== null;
};

export const buildSectionId = (name: string): string | null =>
  name?.toLowerCase().replace(/\s+/g, '-') ?? null;
