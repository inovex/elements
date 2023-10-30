import { NextPage } from 'next';
import { GetStaticPaths, GetStaticProps } from 'next';
import { LangContext } from '../../../../types/langContext';
import {
  getStaticLanguagePaths,
  getStaticLanguageProps,
} from '../../../../utils/context/staticPaths';
import { Locale_File } from '../../../../translations/types';
import { getHighlighter } from 'shiki';
import PreviewBox from './preview-box';

interface HighlightedCodes {
  [key: string]: string;
}

interface PatternsPageProps {
  highlightedCodes: HighlightedCodes;
}

const MockupLogin: React.FC = () => <div style={{background: "hotpink", height: '300px'}}>Mockup component for login</div>;

const MockupSignUp: React.FC = () => <div>Mockup component for signup</div>;

async function highlightCodeWithShiki(code: string) {
  const highlighter = await getHighlighter({ theme: 'dark-plus' });
  return highlighter.codeToHtml(code, {
    lang: 'html',
    theme: 'dark-plus',
  });
}

const PatternsPage: NextPage<PatternsPageProps> = ({ highlightedCodes }) => {
  return (
    <div>
      <h1>Design Pattern</h1>
      <PreviewBox
        title="Login"
        description="Lorem ipsum for login..."
        previewComponent={<MockupLogin />}
        highlightedCode={highlightedCodes.login}
      />

      <PreviewBox
        title="Signup"
        description="Lorem ipsum for signup..."
        previewComponent={<MockupSignUp />}
        highlightedCode={highlightedCodes.signup}
      />
    </div>
  );
};
export const getStaticProps: GetStaticProps = async (ctx) => {
  const codeStrings = {
    login: `
  <div class="container mx-auto px-4 py-5">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      
      <!-- Card 1 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <img src="https://placeimg.com/400/250/nature" alt="Nature Image" class="w-full h-48 object-cover">
        <div class="p-6">
          <h2 class="text-xl font-semibold mb-2">Nature Beauty</h2>
          <p class="text-gray-600 mb-3">Experience the breathtaking scenes of nature's beauty in every corner of the world.</p>
          <a href="#" class="text-blue-500 hover:underline">Read more</a>
        </div>
      </div>
      
      <!-- Card 2 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <img src="https://placeimg.com/400/250/architecture" alt="Architecture Image" class="w-full h-48 object-cover">
        <div class="p-6">
          <h2 class="text-xl font-semibold mb-2">Modern Architecture</h2>
          <p class="text-gray-600 mb-3">Explore the world's most fascinating architectural marvels, from ancient to modern.</p>
          <a href="#" class="text-blue-500 hover:underline">Read more</a>
        </div>
      </div>
      
      <!-- Card 3 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <img src="https://placeimg.com/400/250/tech" alt="Tech Image" class="w-full h-48 object-cover">
        <div class="p-6">
          <h2 class="text-xl font-semibold mb-2">Tech Innovations</h2>
          <p class="text-gray-600 mb-3">Stay updated with the latest technology trends and innovations shaping the future.</p>
          <a href="#" class="text-blue-500 hover:underline">Read more</a>
        </div>
      </div>
  
    </div>
  </div>
  `,
    signup: '<div>Mockup component for signup</div>',
  };

  const { props: languageProperties } = getStaticLanguageProps(
    ctx as LangContext,
    Locale_File.LIBRARY
  );

  const highlightedCodes: HighlightedCodes = {};
  for (const [label, code] of Object.entries(codeStrings)) {
    highlightedCodes[label] = await highlightCodeWithShiki(code);
  }

  return {
    props: {
      ...languageProperties,
      highlightedCodes,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return getStaticLanguagePaths();
};

export default PatternsPage;
