// We use Record<string, string> instead of enum because we can iterate over it AND use it as a type (to be passed as a prop)
export type Sections = Record<string, string>;

// Prettier removes quotes from keys if they are single words (like 'Preparation')
export const reactSections: Sections = {
  Preparation: 'preparation',
  Properties: 'properties',
  'Finishing Touches': 'finishing-touches',
  'Wrapping Up': 'wrapping-up',
};

// TODO: Discuss where to store this file
