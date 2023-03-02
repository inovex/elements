import { SubRoutes } from 'utils/routes';
import Demos from 'components/explore/demos';
import ResourceCard from 'components/explore/resources/resources-card';
import { GetStaticPaths, GetStaticProps } from 'next';
import {
  getStaticLanguagePaths,
  getStaticLanguageProps,
} from 'utils/context/staticPaths';
import { LangContext } from 'types/langContext';
import { Locale_File } from 'translations/types';
import Page from 'components/layout/page';
import useTranslation from 'utils/hooks/useTranslation';
import Examples from 'components/explore/examples';
import ExploreHeader from 'components/explore/explore-header';
import styles from './index.module.scss';
import classNames from 'classnames';

const Explore = () => {
  const { t } = useTranslation();

  return (
    <Page title={[t('common.meta.explore')]}>
      <div className={classNames('section-container', styles.exploreContainer)}>
        <ExploreHeader />
        <section id={SubRoutes.EXPLORE_EXAMPLES}>
          <Examples />
        </section>
        <section id={SubRoutes.EXPLORE_DEMOS}>
          <Demos />
        </section>
        <section id={SubRoutes.EXPLORE_RESSOURCES}>
          <ResourceCard />
        </section>
      </div>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { localization } = getStaticLanguageProps(
    ctx as LangContext,
    Locale_File.EXPLORE
  ).props;

  return { props: { localization } };
};

export const getStaticPaths: GetStaticPaths = async () =>
  getStaticLanguagePaths();

export default Explore;
