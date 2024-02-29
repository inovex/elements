'use client';

import { NextPage } from 'next';
import { Login } from '@inovex.de/ui-patterns';
import PreviewBox from './components/preview-box';
import styles from './client.module.scss';
import { useTranslation } from '@hooks/useTranslation';

export interface HighlightedCodes {
  [key: string]: string;
}

interface PatternsPageProps {
  highlightedCodes: HighlightedCodes;
  codeStrings: any;
}

export const PatternsPage: NextPage<PatternsPageProps> = ({
  highlightedCodes,
  codeStrings,
}) => {
  const { t } = useTranslation();

  return (
    <div style={{ marginBottom: '8rem' }}>
      <div className={styles.header}>
        <h5 className="title-m">{t('library.designPatterns.header.top')}</h5>
        <h1 className="header-d3">
          <b>{t('library.designPatterns.header.title')}</b>
        </h1>
        <p className="body-l">{t('library.designPatterns.header.subtitle')}</p>
        <div className={styles.divider} />
      </div>
      <PreviewBox
        title={t('library.designPatterns.loginPattern.title')}
        id="login"
        description={t('library.designPatterns.loginPattern.description')}
        previewComponent={<Login />}
        highlightedCode={highlightedCodes.login}
        rawCode={codeStrings.login}
      />
    </div>
  );
};
