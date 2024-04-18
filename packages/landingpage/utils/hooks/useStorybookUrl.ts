import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export const WELCOME_PAGE_PLACEHOLDER = 'docs-welcome--docs';

export const useStorybookUrl = () => {
  const searchParams = useSearchParams();
  const [initialStorybookUrl, setInitialStorybookUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_STORYBOOK_URL) {
      throw new Error('NEXT_PUBLIC_STORYBOOK_URL not found in environment variables.');
    }

    const version = searchParams.get('version') || 'latest'; // Use 'latest' if no version is specified
    const element = searchParams.get('element') || WELCOME_PAGE_PLACEHOLDER;

    // Construct the URL by directly inserting the version and element
    const newUrl = `${process.env.NEXT_PUBLIC_STORYBOOK_URL.replace('latest', version)}?path=/docs/${element}`;

    setInitialStorybookUrl(newUrl);
  }, [searchParams]);

  return initialStorybookUrl;
};
