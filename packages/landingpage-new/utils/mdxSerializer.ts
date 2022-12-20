import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import fs from 'fs';
import { Supported_Locales } from 'translations/config';

export const getMdxFileContent = async (filename: string, locale: Supported_Locales) => {
  const post = await fs.readFileSync(
    path.join(process.cwd(), 'mdx', `${filename}.${locale}.mdx`),
    'utf-8'
  );
  return await serialize(post);
};
