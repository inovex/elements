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

  function toggleCommands() {
    if (commandIndex == commands.length) {
      setCommandIndex(0);
    } /* fade in animation über scss mit <span> in innerhtml vom inobutton?
    die framework logos können hier mit auch rein und iteriert werden
    */
    return (
      <InoButton>
        {commands[commandIndex]}{' '}
        <InoIcon clickable={true} icon="copy"></InoIcon>
      </InoButton>
    );
  }

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
                inovex elements.
              </span>
            </p>
            <div className={styles.docs}>
              <InoButton>Show documentation</InoButton>
              <div className={styles.animation}>
                {/* <InoButton variant="outlined"> */}
                {/* {commandIndex == commands.length
                    ? commands[0]
                    : commands[commandIndex]} */}
                {toggleCommands()}
                {/* <InoIcon clickable={true} icon="copy"></InoIcon>
                </InoButton> */}
                {/* Mocked divs to be replaced by framework logos */}
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.secondContainer}>
          <div>
            <InoIcon icon="code" clickable={false} />
            <p className={styles.title}>Kernaspekt 1</p>
            <p className={styles.text}>
              Runs on every major framework: Angular, React, Vue or just plain
              JavaScript.
            </p>
          </div>
          <div>
            <InoIcon icon="time" clickable={false} />
            <p className={styles.title}>Kernaspekt 2</p>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </p>
          </div>
          <div>
            <InoIcon icon="partner" clickable={false} />
            <p className={styles.title}>Kernaspekt 3</p>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </p>
          </div>
        </div>
        <div>
          <div className={styles.firstAbstract}>
            <p className={styles.heading}>
              <b>why</b> use the elements?
            </p>
            <p style={{ fontSize: '20px' }}>
              {' '}
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua.
            </p>
          </div>
          <div className={styles.secondAbstract}>
            <p className={styles.heading}>
              <b>when</b> use the elements?
            </p>
            <p style={{ fontSize: '20px' }}>
              {' '}
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
