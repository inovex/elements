import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useVersion } from '@hooks/useVersion';

export const WELCOME_PAGE_PLACEHOLDER = 'docs-welcome--docs';
export const useStorybookUrl = () => {
  const { selectedVersion } = useVersion();
  const searchParams = useSearchParams();
  const [initialStorybookUrl, setInitialStorybookUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_STORYBOOK_URL)
      throw new Error('NEXT_PUBLIC_STORYBOOK_URL not found in environment variables.');

    let baseStorybookUrl = process.env.NEXT_PUBLIC_STORYBOOK_URL;

    if (selectedVersion) {
      baseStorybookUrl = baseStorybookUrl.replace('latest', selectedVersion);
    }

    const newUrl = [baseStorybookUrl, '?path=/docs/', searchParams?.get('element') ?? WELCOME_PAGE_PLACEHOLDER].join(
      '',
    );

    setInitialStorybookUrl(newUrl);
  }, [selectedVersion]);

  return initialStorybookUrl;
};
