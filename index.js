'use strict';

module.exports = {
  name: require('./package').name,

  options: {
    autoImport: {
      webpack: {
        node: {
          global: false,
          __filename: true,
          __dirname: true,
        },
        resolve: {
          fallback: {
            path: 'path-browserify',
          },
        },
      },
    },
  },
};
