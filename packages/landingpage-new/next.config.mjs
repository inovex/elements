import nextMdx from '@next/mdx';
import withImages from 'next-images';
import {remarkCodeHike} from '@code-hike/mdx';
import remarkGfm from 'remark-gfm';
import {readFile} from 'fs/promises';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import path, {join} from "path";

const theme = JSON.parse(await readFile('../../node_modules/shiki/themes/github-light.json'));

const BASE_PATH = '/' + process.env.BASE_PATH;

const __dirname = path.resolve();
const assetsPath = join(__dirname, '..', '..', 'assets', 'logo');
const publicPath = join(__dirname, 'public');

/** @type {import('next').NextConfig} */
const nextConfiguration = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  assetPrefix: BASE_PATH + '/',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/u/**',
      },
    ],
  },
  basePath: BASE_PATH, // TODO remove when old landingpage is replaced
  webpack: (config) => {
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          {
            from: assetsPath, to: publicPath,
            globOptions: {
              ignore: ["**/*.{html,md}"],
            },
          },
        ],
      }));

    return config
  },
};

const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      [remarkCodeHike, {autoImport: false, theme, showCopyButton: true}],
      remarkGfm,
    ],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

const plugins = [withImages, withMDX];

export default plugins.reduce(
  (config, plugin) => plugin(config),
  nextConfiguration
); // merge configs
