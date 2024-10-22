'use client';

import { NextPage } from 'next';
import { Login, Footer, Hero, SettingsPage, Faq } from '@inovex.de/ui-patterns';
import PreviewBox from './_components/preview-box';
import styles from './client.module.scss';
import { useTranslation } from '@hooks/useTranslation';
import { InoAccordion } from '@inovex.de/elements-react';
import { useState } from 'react';

export interface HighlightedCodes {
  [key: string]: string;
}

interface PatternsPageProps {
  highlightedCodes: HighlightedCodes;
  codeStrings: any;
}

export const PatternsPage: NextPage<PatternsPageProps> = ({ highlightedCodes, codeStrings }) => {
  const { t, lang } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{ marginBottom: '8rem' }}>
      <div className={styles.header}>
        <h5 className="title-m">{t('library.designPatterns.header.top')}</h5>
        <h1 className="header-d3">
          <b>{t('library.designPatterns.header.title')}</b>
        </h1>
        <p className="body-l">{t('library.designPatterns.header.subtitle')}</p>
        <InoAccordion
          expanded={expanded}
          onExpandedChange={() => setExpanded(!expanded)}
          accordionTitle="Tailwind Integration"
          style={{ margin: '2rem' }}
        >
          {lang === 'en' && (
            <div>
              <p>
                <strong>Step 1:</strong> Modify your 'tailwind.config.js' to include inovex Elements theme colors. This
                integration enables you to utilize inovex's color palette within Tailwind's classes. Refer to our{' '}
                <a
                  href="https://github.com/inovex/elements/blob/master/packages/ui-patterns/tailwind.config.js"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  public GitHub repository
                </a>{' '}
                for an example configuration.
              </p>
              <p>
                <strong>Step 2:</strong> For a detailed view of the inovex Elements color palette, visit the{' '}
                <a
                  href="https://elements.inovex.de/en/library/components?element=docs-styleguide-colors--docs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  storybook styleguide
                </a>
                . This guide will help you in selecting appropriate color variables for your designs.
              </p>
              <p>
                Take a look at the Code Snippets below to explore the code and result of using the inovex Elements in
                combination with Tailwind CSS.
              </p>
            </div>
          )}
          {lang === 'de' && (
            <div>
              <p>
                <strong>Schritt 1:</strong> Ergänzen Sie Ihre 'tailwind.config.js', um die Farbpalette von den inovex
                Elements einzuschließen. Diese Integration ermöglicht es Ihnen, die Farbpalette von inovex innerhalb der
                Tailwind-Klassen zu nutzen. Beziehen Sie sich auf unser{' '}
                <a
                  href="https://github.com/inovex/elements/blob/master/packages/ui-patterns/tailwind.config.js"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  öffentliches GitHub-Repository
                </a>{' '}
                für eine Beispielkonfiguration.
              </p>
              <p>
                <strong>Schritt 2:</strong> Für eine detaillierte Ansicht der Farbpalette von inovex Elements, besuchen
                Sie das
                <a
                  href="https://elements.inovex.de/en/library/components?element=docs-styleguide-colors--docs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Storybook-Styleguide
                </a>
                . Dieser Leitfaden wird Ihnen helfen, geeignete Farbvariablen für Ihre Designs auszuwählen.
              </p>
              <p>
                Schauen Sie sich die untenstehenden Code-Snippets an, um zu sehen, wie die inovex Elements in
                Kombination mit Tailwind CSS eingesetzt werden und welche Ergebnisse damit erzielt werden können
              </p>
            </div>
          )}
        </InoAccordion>
        <div className={styles.divider} />
      </div>
      <PreviewBox
        title={t('library.designPatterns.login.title')}
        id="login"
        description={t('library.designPatterns.login.description')}
        previewComponent={<Login />}
        highlightedCode={highlightedCodes.login}
        rawCode={codeStrings.login}
      />
      <PreviewBox
        title={t('library.designPatterns.hero.title')}
        id="hero"
        description={t('library.designPatterns.hero.description')}
        previewComponent={<Hero />}
        highlightedCode={highlightedCodes.hero}
        rawCode={codeStrings.hero}
      />
      <PreviewBox
        title={t('library.designPatterns.footer.title')}
        id="footer"
        description={t('library.designPatterns.footer.description')}
        previewComponent={<Footer />}
        highlightedCode={highlightedCodes.footer}
        rawCode={codeStrings.footer}
      />
       <PreviewBox
        title={t('library.designPatterns.faq.title')}
        id="faq"
        description={t('library.designPatterns.faq.description')}
        previewComponent={<Faq />}
        highlightedCode={highlightedCodes.faq}
        rawCode={codeStrings.faq}
      />
      <PreviewBox
        title={t('library.designPatterns.settingsPage.title')}
        id="settingsPage"
        description={t('library.designPatterns.settingsPage.description')}
        previewComponent={<SettingsPage />}
        highlightedCode={highlightedCodes.settingsPage}
        rawCode={codeStrings.settingsPage}
      />
    </div>
  );
};
