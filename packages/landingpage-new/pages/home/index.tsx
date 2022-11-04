import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from './home.module.scss';
import { InoButton, InoIcon } from '@elements';
import InstallChips from './install-chips';

/*TODO responsive, fix ino icon, copy command on icon click*/

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="Landingpage" content="the interoperable UI library" />
      </Head>
      <main className={styles.main}>
        <div className={styles.firstContainer}>
          <div>
            <p className={styles.heading}>
              <b>the interoperable UI library</b>
              <br />
              for any <mark>framework</mark>
            </p>
            <div className={styles.sub}>
              <p>
                It’s hard to build and maintain UI components. Don’t start from
                scratch every time you create a new project. Build them once,
                run them everywhere!
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
                  <InstallChips></InstallChips>
                </div>
              </div>
            </div>
          </div>
          <Image
            width={686}
            height={787}
            src="/elements-collage.png"
            alt="Elements Collage"
          />
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
