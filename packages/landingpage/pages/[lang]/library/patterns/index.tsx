import { NextPage } from 'next';
import { GetStaticPaths, GetStaticProps } from 'next';
import { LangContext } from '../../../../types/langContext';
import {
  getStaticLanguagePaths,
  getStaticLanguageProps,
} from '../../../../utils/context/staticPaths';
import { Locale_File } from '../../../../translations/types';
import { getHighlighter } from 'shiki';
import PreviewBox from './preview-box';

interface HighlightedCodes {
  [key: string]: string;
}

interface PatternsPageProps {
  highlightedCodes: HighlightedCodes;
}

const MockupComponent: React.FC = () => (
  <div>Hello, this is a mockup component!</div>
);

async function highlightCodeWithShiki(code: string) {
  const highlighter = await getHighlighter({ theme: 'dark-plus' });
  return highlighter.codeToHtml(code, {
    lang: 'html',
    theme: 'dark-plus',
  });
}

const PatternsPage: NextPage<PatternsPageProps> = ({ highlightedCodes }) => {
  return (
    <div>
      <h1>Design Pattern</h1>
      <PreviewBox
        title="Login"
        description="Lorem ipsum for login..."
        previewComponent={<MockupComponent />}
        highlightedCode={highlightedCodes.login}
      />

      <PreviewBox
        title="Signup"
        description="Lorem ipsum for signup..."
        previewComponent={<MockupComponent />}
        highlightedCode={highlightedCodes.signup}
      />
    </div>
  );
};
export const getStaticProps: GetStaticProps = async (ctx) => {
  const codeStrings = {
    login: '<div>Hello, this is a mockup component for login!</div>',
    signup: '<div>Mockup component for signup</div>',
  };

  const { props: languageProperties } = getStaticLanguageProps(
    ctx as LangContext,
    Locale_File.LIBRARY
  );

  const highlightedCodes: HighlightedCodes = {};
  for (const [label, code] of Object.entries(codeStrings)) {
    highlightedCodes[label] = await highlightCodeWithShiki(code);
  }

  return {
    props: {
      ...languageProperties,
      highlightedCodes,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return getStaticLanguagePaths();
};

export default PatternsPage;
