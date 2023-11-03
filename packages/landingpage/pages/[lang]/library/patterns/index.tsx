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
import Page from 'components/layout/page';
import useTranslation from 'utils/hooks/useTranslation';
import styles from './index.module.scss';


interface HighlightedCodes {
  [key: string]: string;
}

interface PatternsPageProps {
  highlightedCodes: HighlightedCodes;
  codeStrings: any;
}

const MockupLogin: React.FC = () => (
  <div style={{ background: 'hotpink', height: '100px' }}>
    Boilerplate stuff
  </div>
);

const MockupSignUp: React.FC = () => <div>Mockup component for signup</div>;

async function highlightCodeWithShiki(code: string) {
  const highlighter = await getHighlighter({ theme: 'dark-plus' });
  return highlighter.codeToHtml(code, {
    lang: 'html',
    theme: 'dark-plus',
  });
}

const PatternsPage: NextPage<PatternsPageProps> = ({
  highlightedCodes,
  codeStrings,
}) => {
  const { t } = useTranslation();

  return (
    <Page title={[t('common.meta.library')]}>
      <div className={styles.header}>
        <h5 className="title-m">Lorem ipsum dolor sit amet.</h5>
        <h1 className="header-d3">
          <b>Design Pattern</b>
        </h1>
        <p className="body-l">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <div className={styles.divider} />
      </div>
      <PreviewBox
        title="Login"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        previewComponent={<MockupLogin />}
        highlightedCode={highlightedCodes.login}
        rawCode={codeStrings.login}
      />

      <PreviewBox
        title="Signup"
        description="Lorem ipsum for signup..."
        previewComponent={<MockupSignUp />}
        highlightedCode={highlightedCodes.signup}
        rawCode={codeStrings.signup}
      />
    </Page>
  );
};
export const getStaticProps: GetStaticProps = async (ctx) => {
  const codeStrings = {
    login: `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>HTML 5 Boilerplate</title>
        <link rel="stylesheet" href="style.css">
      </head>
      <body>
      <script src="index.js"></script>
      </body>
    </html>
    `,
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
      codeStrings,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return getStaticLanguagePaths();
};

export default PatternsPage;
