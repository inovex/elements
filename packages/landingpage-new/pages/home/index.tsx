import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import styles from './home.module.scss';
import { InoButton, InoIcon } from '@elements';
import Head from 'next/head';

const Home: NextPage = () => {
  const commands = [
    '$ npm install @inovex.de',
    '$ npm install @inovex.de/elements-vue',
    '$ ng add @inovex.de/elements-angular',
    '$ npm install @inovex.de/elements-react',
  ];
  const [commandIndex, setCommandIndex] = useState(0);

  useEffect(() => {
    if (commandIndex == commands.length) {
      setCommandIndex(0);
    }
    const intervalID = setTimeout(() => {
      setCommandIndex(commandIndex + 1);
    }, 3000);

    return () => clearInterval(intervalID);
  });

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="Landingpage" content="the interoperable UI library" />
      </Head>
      <main className={styles.main}>
        <div className={styles.firstContainer}>
          <p className={styles.heading}>
            <b>the interoperable UI library</b>
            <br />
            for any <mark>framework</mark>
          </p>
          <div className={styles.sub}>
            <p>
              It’s hard to build and maintain UI components. Don’t start from
              scratch every time you create a new project. Build them once, run
              them everywhere!
              <br />
              <br />
              Use our open source UI component library{' '}
              <span style={{ color: '#2C03FA', fontWeight: 'bold' }}>
                inovex elements
              </span>
            </p>
            <div className={styles.docs}>
              <InoButton>Show documentation</InoButton>
              <div className={styles.animation}>
                <InoButton variant="outlined">
                  {commandIndex == commands.length
                    ? commands[0]
                    : commands[commandIndex]}
                  <InoIcon clickable={true} icon="copy"></InoIcon>
                </InoButton>
                {/* Mocked divs to be replaced by framework logos */}
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
