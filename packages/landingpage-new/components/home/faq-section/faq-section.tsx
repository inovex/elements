import styles from './faq-section.module.scss';
import { InoAccordion } from '@elements';
import classNames from 'classnames';
import { useSet } from 'react-use';
import useTranslation from 'utils/hooks/useTranslation';

interface FaqItem {
  id: number;
  title: string;
  content: string;
}

export default function FaqSection() {
  const { t } = useTranslation();
  const faqs: FaqItem[] = t('faq.faqs');

  const [_, { has, toggle }] = useSet(new Set<number>());

  return (
    <>
      <div>
        <h1 className="header-d3">
          <b>{t('faq.title')}</b>
        </h1>
        <div className={classNames(styles.subHeaderContainer, 'body-l')}>
          <p className={styles.subheader}>{t('faq.subheader')}</p>
        </div>
      </div>
      <div className={styles.accordionWrapper}>
        {faqs.map((faq, index) => (
          <div className={styles.accordion} key={index}>
            <InoAccordion
              accordionTitle={faq.title}
              expanded={has(index)}
              onExpandedChange={() => toggle(index)}
            >
              <>{faq.content}</>
            </InoAccordion>
          </div>
        ))}
      </div>
    </>
  );
}
