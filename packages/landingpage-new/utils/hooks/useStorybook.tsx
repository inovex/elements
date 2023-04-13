export const useStorybook = (storybookUrl: string) => {
  function fromLandingpageToStorybookUrl(query: string): string {
    if (!query)
      return `${storybookUrl}?path=/story/docs-welcome--page`;

    return `${storybookUrl}?path=/docs/${query}`;
  }

  return {
    fromLandingpageToStorybookUrl,
  };
};
