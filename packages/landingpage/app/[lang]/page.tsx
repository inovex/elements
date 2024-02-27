import { ParamsWithLang } from '../../types/langParam';
import { getMetaTitle, translator } from '../../utils/getMetaTitle';
import { Home } from './home';

export async function generateMetadata({ params }: ParamsWithLang) {
  const title = await translator('common.meta.home', params.lang);
  return {
    title: getMetaTitle(title),
  };
}

export default function Page() {
  return <Home></Home>;
}
