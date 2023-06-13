import { remarkCodeHike } from '@code-hike/mdx';
import nextMdx from '@next/mdx';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { readFile } from 'fs/promises';
import withImages from 'next-images';
import path, { join } from 'path';
import remarkGfm from 'remark-gfm';

const theme = JSON.parse(
  await readFile('../../node_modules/shiki/themes/github-light.json')
);

const __dirname = path.resolve();
const assetsPath = join(__dirname, '..', '..', 'assets', 'logo');
const publicPath = join(__dirname, 'public');

/** @type {import('next').NextConfig} */
const nextConfiguration = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
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
  webpack: (config) => {
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          {
            from: assetsPath,
            to: publicPath,
            globOptions: {
              ignore: ['**/*.{html,md}'],
            },
          },
        ],
      })
    );

    return config;
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ];
  },
};

const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      [
        remarkCodeHike,
        {
          autoImport: false,
          theme,
          showCopyButton: true,
        },
      ],
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
