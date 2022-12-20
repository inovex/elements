import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import {
  getStaticLanguagePaths,
  getStaticLanguageProps,
} from 'utils/context/staticPaths';
import { LangContext } from 'types/langContext';
import { Locale_File } from 'translations/types';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import {InoChip} from '@elements';
import { getMdxFileContent } from 'utils/mdxSerializer';
import { Supported_Locales } from 'translations/config';

type Props = {
  mdxSource: MDXRemoteSerializeResult;
}

const Explore: NextPage<Props> = ({mdxSource}: Props) => {
  return <MDXRemote {...mdxSource} components={{InoChip}} />;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const {localization} = getStaticLanguageProps(ctx as LangContext, Locale_File.EXPLORE).props;
  return getMdxFileContent('explore', localization.locale as Supported_Locales).then((mdxSource) => {
    return {
      props: {
        localization,
        mdxSource
      }
    }
  });
}
export const getStaticPaths: GetStaticPaths = async () => getStaticLanguagePaths();

export default Explore;
