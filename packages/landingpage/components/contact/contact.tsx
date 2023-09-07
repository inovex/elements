import styles from './contact.module.scss';
import Image from 'next/image';
import { InoButton, InoIcon, InoInput, InoTextarea } from '@elements';
import { FormEventHandler, useState } from 'react';
import useTranslation from 'utils/hooks/useTranslation';

function Contact() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const inovexMail = 'jan-niklas.voss@inovex.de';

  const { t } = useTranslation();

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    message.replace(/ /g, '%20');
    const mailtoLink =
      'mailto:' + inovexMail + '?subject=' + subject + '&body=' + message;
    window.open(mailtoLink, '_blank');
  };

  return (
    <div className={styles.contact_section}>
      <div className={styles.image1}>
        <Image
          src={`/contact-image-1.svg`}
          alt="contact image1"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className={styles.wrapper}>
        <h1 className="header-d3">
          <b>{t('contact.title_1')}</b> {t('contact.title_2')}
        </h1>
        <p className="body-l">{t('contact.description')}</p>
        <form className={styles.form_container} onSubmit={onSubmit}>
          <InoInput
            className={styles.subject}
            value={subject}
            onValueChange={(e) => setSubject(e.detail)}
            type="text"
            label={t('contact.label_subject')}
            outline
            required
          ></InoInput>
          <InoTextarea
            className={styles.message}
            value={message}
            onValueChange={(e) => setMessage(e.detail)}
            label={t('contact.label_message')}
            outline
            required
          ></InoTextarea>
          <InoButton className={styles.submit_button} type="submit">
            <span>{t('contact.label_submit')}</span>
            <InoIcon slot="icon-trailing" icon="mail"></InoIcon>
          </InoButton>
        </form>
      </div>
      <div className={styles.image2}>
        <Image
          src={`/contact-image-2.svg`}
          alt="contact image2"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  );
}

export default Contact;
