import { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { getHighlighter } from 'shiki';
import PreviewBox from './preview-box';
import Page from 'components/layout/page';
import useTranslation from 'utils/hooks/useTranslation';
import styles from './index.module.scss';
import { Login, loginHtml } from '@inovex.de/ui-patterns';

interface HighlightedCodes {
  [key: string]: string;
}

interface PatternsPageProps {
  highlightedCodes: HighlightedCodes;
  codeStrings: any;
}

async function highlightCodeWithShiki(code: string) {
  const highlighter = await getHighlighter({ theme: 'github-dark-dimmed' });
  return highlighter.codeToHtml(code, {
    lang: 'html',
    theme: 'github-dark-dimmed',
  });
}

const PatternsPage: NextPage<PatternsPageProps> = ({
  highlightedCodes,
  codeStrings,
}) => {
  const { t } = useTranslation();

  return (
    <Page title={[t('common.meta.library')]}>
      <div style={{ marginBottom: '8rem' }}>
        <div className={styles.header}>
          <h5 className="title-m">{t('designPatterns.header.top')}</h5>
          <h1 className="header-d3">
            <b>{t('designPatterns.header.title')}</b>
          </h1>
          <p className="body-l">{t('designPatterns.header.subtitle')}</p>
          <div className={styles.divider} />
        </div>
        <PreviewBox
          title={t('designPatterns.loginPattern.title')}
          id="login"
          description={t('designPatterns.loginPattern.description')}
          previewComponent={<Login />}
          highlightedCode={highlightedCodes.login}
          rawCode={codeStrings.login}
        />
      </div>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const codeStrings = {
    login: loginHtml,
  };

  const highlightedCodes: HighlightedCodes = {};
  for (const [label, code] of Object.entries(codeStrings)) {
    highlightedCodes[label] = await highlightCodeWithShiki(code);
  }
  return {
    props: {
      highlightedCodes,
      codeStrings,
    },
  };
};

export default PatternsPage;
