export const useStorybook = () => {
  function fromLandingpageToStorybookUrl(query?: string[]): string {
    if (!query || query.length === 0)
      return 'https://elements.inovex.de/version/latest/?path=/story/docs-welcome--page';

    let url = 'https://elements.inovex.de/version/latest/?path=/docs/';

    // buttons / inputs
    if (query[0]) url += query[0];

    // ino-button
    if (query[1]) url += `-${query[1]}`;

    // /outline oder /documentation
    if (query[2]) {
      const isDocumentation = query[2] === 'documentation';

      if (isDocumentation) {
        url += '-documentation--page';
      } else {
        url += `--${query[2]}`;
      }
    }

    return url;
  }

  function fromStorybookToLandingpageUrl(url: string): string {
    return '';
  }

  return {
    fromLandingpageToStorybookUrl,
    fromStorybookToLandingpageUrl,
  };
};
