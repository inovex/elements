import styles from './faq-section.module.scss';
import { InoAccordion } from '@elements';
import classNames from 'classnames';
import { useState } from 'react';
import useTranslation from 'utils/hooks/useTranslation';

interface FaqItem {
  id: number;
  title: string;
  content: string;
}

export default function FaqSection() {
  const { t } = useTranslation();
  const faqs: FaqItem[] = t('faq.faqs');

  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const handleExpandedChange = (id: number) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [id]: !prevExpanded[id],
    }));
  };

  return (
    <>
      <div>
        <h1 className="header-d3">
          <b>{t('faq.title_1')}</b>
        </h1>
        <div className={classNames(styles.subHeaderContainer, 'body-l')}>
          <p className={styles.subheader}>{t('faq.subheader')}</p>
        </div>
      </div>
      {faqs.length > 0 && ( // the faqs.length is of no use as there will always be faqs, the switching of the locale breaks the ino-accordion
        <div className={styles.accordionWrapper}>
          {faqs.map((faq) => (
            <div className={styles.accordion} key={faq.id}>
              <InoAccordion
                accordionTitle={faq.title}
                expanded={expanded[faq.id]}
                onExpandedChange={() => handleExpandedChange(faq.id)}
              >
                {faq.content}
              </InoAccordion>
            </div>
          ))}
        </div>
      )}
    </>
  );
}