import { WithLangParam } from 'translations/i18n';
import { getMetaTitle, translator } from 'utils/getMetaTitle';
import { HighlightedCodes, PatternsPage } from './client';
import { getHighlighter } from 'shiki';
import { login } from '@inovex.de/ui-patterns/html';

export async function generateMetadata({ params }: WithLangParam) {
  const title = await translator('common.meta.library', params.lang);
  return {
    title: getMetaTitle(title),
  };
}

export default async function Page() {
  const codeStrings = { login };

  const highlighter = await getHighlighter({ theme: 'github-dark-dimmed' });
  const codeToHtml = (code: string) =>
    highlighter.codeToHtml(code, {
      lang: 'html',
      theme: 'github-dark-dimmed',
    });

  const highlightedCodes: HighlightedCodes = {};
  for (const [label, code] of Object.entries(codeStrings)) {
    highlightedCodes[label] = codeToHtml(code);
  }

  return (
    <PatternsPage
      highlightedCodes={highlightedCodes}
      codeStrings={codeStrings}
    ></PatternsPage>
  );
}
