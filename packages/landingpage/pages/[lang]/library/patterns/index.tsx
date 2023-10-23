import { NextPage } from 'next';
import { GetStaticPaths, GetStaticProps } from 'next';
import { LangContext } from '../../../../types/langContext';
import {
  getStaticLanguagePaths,
  getStaticLanguageProps,
} from '../../../../utils/context/staticPaths';
import { Locale_File } from '../../../../translations/types';
import PreviewBox from './preview-box';

const PatternsPage: NextPage = () => {
  return (
    <div>
      <h1>Welcome to the Patterns page.</h1>
      <PreviewBox title="Pattern 1" description="This is a cool pattern." />
      <PreviewBox title="Pattern 2" description="This is another cool pattern." />
    </div>
  );
};

// Static Generation methods
export const getStaticProps: GetStaticProps = async (ctx) => {
  return getStaticLanguageProps(ctx as LangContext, Locale_File.LIBRARY);
};

export const getStaticPaths: GetStaticPaths = async () => {
  return getStaticLanguagePaths();
};

export default PatternsPage;