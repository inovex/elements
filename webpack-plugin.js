const stencil = require('@stencil/webpack');
module.exports = (path = '.') => {
    return new stencil.StencilPlugin({
        collections: [
            'node-modules/@inovex/elements/dist'
        ],
        outputBase: path
    });
};