import { WithLangParam } from 'translations/i18n';
import { getMetaTitle } from 'utils/getMetaTitle';
import { translator } from 'translations/getTranslations';
import { HighlightedCodes, PatternsPage } from './client';
import { getHighlighter } from 'shiki';
import { login, settingsPage, footer, hero } from '@inovex.de/ui-patterns/html';

export async function generateMetadata({ params }: WithLangParam) {
  const title = await translator('common.meta.library', params.lang);
  return {
    title: getMetaTitle(title),
  };
}

export default async function Page() {
  const codeStrings = { login, settingsPage, footer, hero };

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
