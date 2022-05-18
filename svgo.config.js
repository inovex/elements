module.exports = {
  multipass: true, // boolean. false by default
  js2svg: {
    indent: 2, // string with spaces or number of spaces. 4 by default
    pretty: false, // minize all svgs
  },
  plugins: [
    // set of built-in plugins enabled by default
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false, // ⚠️ we need to keep the viewbox for correct sizing
        },
      },
    },
    // enable built-in plugins by name
    {
      name: 'sortAttrs',
      params: {
        xmlnsOrder: 'alphabetical',
      },
    },
  ],
};
