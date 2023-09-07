import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const WELCOME_PAGE_PLACEHOLDER = 'welcome';

export const useStorybookUrl = () => {
  const storybookUrl = process.env.NEXT_PUBLIC_STORYBOOK_URL;

  const { query, isReady } = useRouter();
  const [iFrameStartURl, setIFrameStartURl] = useState<string | null>(null);

  function fromLandingpageToStorybookUrl(query: string): string {
    if (!query || query === WELCOME_PAGE_PLACEHOLDER)
      return `${storybookUrl}?path=/docs/docs-welcome--page`;

    return `${storybookUrl}?path=/docs/${query}`;
  }

  useEffect(() => {
    if (iFrameStartURl || !isReady) return;

    setIFrameStartURl(fromLandingpageToStorybookUrl(query.element as string));
  }, [isReady, query.element]);

  return { initialUrl: iFrameStartURl, fromLandingpageToStorybookUrl };
};
