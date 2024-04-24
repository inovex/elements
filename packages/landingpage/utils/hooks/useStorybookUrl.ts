import { useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

export const WELCOME_PAGE_PLACEHOLDER = 'docs-welcome--docs';

export const useStorybookUrl = () => {
  const searchParams = useSearchParams();
  const [initialStorybookUrl, setInitialStorybookUrl] = useState<string | null>(null);

  const storybookUrl = useMemo(() => {
    const version = searchParams.get('version') || 'latest'; // Default to 'latest'
    const element = searchParams.get('element') || WELCOME_PAGE_PLACEHOLDER;
    const url = process.env.NEXT_PUBLIC_STORYBOOK_URL;

    if (!url) {
      throw new Error('NEXT_PUBLIC_STORYBOOK_URL not found in environment variables.');
    }

    return `${url.replace('latest', version)}?path=/docs/${element}`;
  }, [searchParams]);

  useEffect(() => {
    setInitialStorybookUrl(storybookUrl);
  }, [storybookUrl]);

  return initialStorybookUrl;
};
