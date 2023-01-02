const BASE_PATH = '/landingpage-new';

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
};

const withImages = require('next-images');

const { remarkCodeHike } = require('@code-hike/mdx');
const remarkGfm = import('remark-gfm');
const theme = require('shiki/themes/github-light.json');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      [remarkCodeHike, { autoImport: false, theme, showCopyButton: true }],
      remarkGfm,
    ],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

const plugins = [withImages, withMDX];

module.exports = plugins.reduce(
  (config, plugin) => plugin(config),
  nextConfiguration
); // merge configs
