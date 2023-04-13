import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const useInitialStorybookUrl = () => {
  const storybookUrl = process.env.NEXT_PUBLIC_STORYBOOK_URL;

  const { query, isReady } = useRouter();
  const [iFrameStartURl, setIFrameStartURl] = useState<string | null>(null);

  function fromLandingpageToStorybookUrl(query: string): string {
    if (!query) return `${storybookUrl}?path=/docs/docs-welcome--page`;

    return `${storybookUrl}?path=/docs/${query}`;
  }

  useEffect(() => {
    if (iFrameStartURl || !isReady || !query.element) return;

    setIFrameStartURl(fromLandingpageToStorybookUrl(query.element as string));
  }, [isReady, query.element]);

  return iFrameStartURl;
};
