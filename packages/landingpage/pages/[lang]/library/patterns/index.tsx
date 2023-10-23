import { NextPage } from 'next';
import { GetStaticPaths, GetStaticProps } from 'next';
import { LangContext } from '../../../../types/langContext';
import {
  getStaticLanguagePaths,
  getStaticLanguageProps,
} from '../../../../utils/context/staticPaths';
import { Locale_File } from '../../../../translations/types';
import PreviewBox from './preview-box';

const MockupComponent: React.FC = () => (
  <div>Hello, this is a mockup component!</div>
);

const mockupHTMLString = `<div>Hello, this is a mockup HTML!</div>`;

const PatternsPage: NextPage = () => {
  return (
    <div>
      <h1>Design Pattern</h1>
      <PreviewBox
        title="Login"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        previewComponent={<MockupComponent />}
        codeString={mockupHTMLString}
      />
    
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return getStaticLanguageProps(ctx as LangContext, Locale_File.LIBRARY);
};

export const getStaticPaths: GetStaticPaths = async () => {
  return getStaticLanguagePaths();
};

export default PatternsPage;
