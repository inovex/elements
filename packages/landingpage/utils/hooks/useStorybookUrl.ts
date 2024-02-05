import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useVersion } from '../context/VersionContext';

export const WELCOME_PAGE_PLACEHOLDER = 'docs-welcome--docs';
export const useStorybookUrl = () => {
  const { selectedVersion } = useVersion();
  const { query, isReady } = useRouter();
  const [initialStorybookUrl, setInitialStorybookUrl] = useState<string | null>(
    null,
  );

  useEffect(() => {
    if (!isReady) return;

    if (!process.env.NEXT_PUBLIC_STORYBOOK_URL)
      throw new Error(
        'NEXT_PUBLIC_STORYBOOK_URL not found in environment variables.',
      );

    let baseStorybookUrl = process.env.NEXT_PUBLIC_STORYBOOK_URL;

    if (selectedVersion) {
      baseStorybookUrl = baseStorybookUrl.replace('latest', selectedVersion);
    }

    const newUrl = [
      baseStorybookUrl,
      '?path=/docs/',
      query.element ?? WELCOME_PAGE_PLACEHOLDER,
    ].join('');

    setInitialStorybookUrl(newUrl);
  }, [isReady, selectedVersion]);

  return initialStorybookUrl;
};
