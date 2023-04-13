import { useInitialStorybookUrl } from '../../../../utils/hooks/useInitialStorybookUrl';
import { InoSpinner } from '@elements';
import styles from './index.module.scss';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import {
  getStaticLanguagePaths,
  getStaticLanguageProps,
} from '../../../../utils/context/staticPaths';
import { LangContext } from '../../../../types/langContext';
import { Locale_File, Localization } from '../../../../translations/types';
import { merge } from 'lodash';
import { useStorybookUrlSyncer } from '../../../../utils/hooks/useStorybookUrlSyncer';

interface Props {
  origin: string;
  localization: Localization;
}

const StoryBookPage: NextPage<Props> = (props) => {

  const initialStorybookUrl = useInitialStorybookUrl();
  useStorybookUrlSyncer(props.origin);

  return (
    <div className={styles.container}>
      {!initialStorybookUrl && <InoSpinner type="circle"></InoSpinner>}
      {initialStorybookUrl && (
        <iframe
          src={initialStorybookUrl}
          style={{
            position: 'absolute',
            left: 0,
            top: 120,
            height: 'calc(100vh - 120px)', // 120px = Navbar height
            width: '100%',
            border: 'none',
          }}
        ></iframe>
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { localization } = getStaticLanguageProps(
    ctx as LangContext,
    Locale_File.LIBRARY
  ).props;

  return { props: { localization, origin: process.env.ORIGIN } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const languagePaths = getStaticLanguagePaths().paths;
  const elementPaths = languagePaths.map(() => ({ params: { element: '' } }));
  const langXElementPaths = languagePaths.map((path, index) =>
    merge(path, elementPaths[index])
  );

  return {
    paths: langXElementPaths,
    fallback: true,
  };
};

export default StoryBookPage;
