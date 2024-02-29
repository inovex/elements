import { WithLangParam } from 'translations/i18n';
import { getMetaTitle, translator } from 'utils/getMetaTitle';
import { HighlightedCodes, PatternsPage } from './client';
import { getHighlighter } from 'shiki';

const loginHtml = `<div
  class="h-[682px] w-[565px] bg-white rounded-2xl border border-solid border-inovex-p-5 shadow-2xl grid grid-rows-auto gap-y-8 px-24 py-28"
>
  <h1 class="text-left">Login to your account</h1>
  <p class="text-left body-l text-inovex-n-11 pb-8">
    Welcome back! Enter your credentials to access your account. This modern
    login interface is crafted with inovex Elements and Tailwind CSS.
  </p>

  <ino-input label="Email" outline type="email"></ino-input>
  <ino-input label="Password" outline type="password"></ino-input>

  <div class="flex justify-between items-center">
    <ino-checkbox>
      <span class="body-l text-inovex-n-11">Remember me</span>
    </ino-checkbox>
    <a class="body-l">Forgot your password?</a>
  </div>

  <div class="flex justify-end">
    <ino-button variant="filled">Login</ino-button>
  </div>
</div>
`;

export async function generateMetadata({ params }: WithLangParam) {
  const title = await translator('common.meta.library', params.lang);
  return {
    title: getMetaTitle(title),
  };
}

export default async function Page() {
  const codeStrings = {
    login: loginHtml,
  };

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
