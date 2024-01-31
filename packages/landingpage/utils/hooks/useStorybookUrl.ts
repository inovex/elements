import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useVersion } from '../context/VersionContext';
import { inDevEnvironment } from 'utils/in-dev-mode';

export const WELCOME_PAGE_PLACEHOLDER = inDevEnvironment
  ? 'docs-welcome--docs'
  : 'docs-welcome--page';

export const useStorybookUrl = () => {
  const { selectedVersion } = useVersion();
  const { query, isReady } = useRouter();
  const [iFrameStartURl, setIFrameStartURl] = useState<string | null>(null);

  const [storybookUrl, setStorybookUrl] = useState<string | undefined>(
    undefined,
  );

  useEffect(() => {
    const urlFromEnv = process.env.NEXT_PUBLIC_STORYBOOK_URL;
    const url = selectedVersion
      ? urlFromEnv?.replace('latest', selectedVersion)
      : urlFromEnv;
    setStorybookUrl(url);
  }, [selectedVersion]);

  const fromLandingpageToStorybookUrl = (
    query?: string | null,
  ): string | null => {
    if (!storybookUrl) return null;
    console.log('query currently is: ', query)
    return `${storybookUrl}?path=/docs/${query ?? WELCOME_PAGE_PLACEHOLDER}`;
  };

  useEffect(() => {
    if (iFrameStartURl || !isReady) return;
    setIFrameStartURl(fromLandingpageToStorybookUrl(query.element as string));
  }, [isReady, query.element, selectedVersion]);

  return { initialUrl: iFrameStartURl, fromLandingpageToStorybookUrl };
};
