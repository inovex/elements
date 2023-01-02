import styles from './contact.module.scss';
import Image from 'next/image';
import { InoButton, InoIcon, InoInput, InoTextarea } from '@elements';
import { FormEventHandler, useState } from 'react';
import useBasePath from '../../utils/hooks/use-base-path';

function Contact() {
  const basePath = useBasePath();

  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const inovexMail = 'jan-niklas.voss@inovex.de';

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
          src={`${basePath}/contact-image1.png`}
          alt="contact image1"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className={styles.wrapper}>
        <h1 className="header-d3">
          <b>contact</b> us
        </h1>
        <p className="body-l">
          Do you have any questions, suggestions or want to work with us? Then
          we look forward to your message!
        </p>

        <form className={styles.form_container} onSubmit={onSubmit}>
          {/*          <InoInput
            className={styles.first_name}
            value={firstName}
            onValueChange={(e) => setFirstName(e.detail)}
            type="text"
            label="First Name*"
            outline
            required
          ></InoInput>
          <InoInput
            className={styles.last_name}
            value={lastName}
            onValueChange={(e) => setLastName(e.detail)}
            type="text"
            label="Last Name*"
            outline
            required
          ></InoInput>
          <InoInput
            className={styles.email}
            value={email}
            onValueChange={(e) => setEmail(e.detail)}
            type="email"
            label="E-mail Address"
            outline
            required
          ></InoInput>
          */}
          <InoInput
            className={styles.subject}
            value={subject}
            onValueChange={(e) => setSubject(e.detail)}
            type="text"
            label="Subject"
            outline
            required
          ></InoInput>
          <InoTextarea
            className={styles.message}
            value={message}
            onValueChange={(e) => setMessage(e.detail)}
            label="Message"
            outline
            required
          ></InoTextarea>
          <InoButton className={styles.submit_button} type="submit">
            Send Mail
            <InoIcon slot="icon-trailing" icon="mail"></InoIcon>
          </InoButton>
        </form>
      </div>
      <div className={styles.image2}>
        <Image
          src={`${basePath}/contact-image2.png`}
          alt="contact image2"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  );
}

export default Contact;
