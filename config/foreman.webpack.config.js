/* eslint-disable camelcase */
const { resolve } = require('path');
const config = require('@redhat-cloud-services/frontend-components-config');
const aliases = require('./aliases');
// const fedMods = require('./fedMods');

const { config: webpackConfig, plugins } = config({
  rootFolder: resolve(__dirname, '../'),
  debug: process.env.PROXY_DEBUG === 'true',
});

webpackConfig.performance = {
  hints: 'warning',
};

webpackConfig.resolve.alias = {
  ...webpackConfig.resolve.alias,
  ...aliases,
};

webpackConfig.entry = {
  index: './index.js',
};

webpackConfig.output = {
  filename: '[name].js',
  path: resolve(__dirname, '../', 'foreman'),
  clean: true,
  library: {
    name: 'compliance-frontend',
    type: 'umd',
  },
};

module.exports = {
  ...webpackConfig,
  plugins: [...plugins],
};
