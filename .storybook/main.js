const path = require('path');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  stories: ['../stories/**/*.stories.(js|ts|jsx|tsx)'],
  addons: [
    '@storybook/addon-actions', 
    '@storybook/addon-links',
    'storybook-readme/register',
    // '@storybook/addon-backgrounds/register',
    // '@storybook/addon-viewport/register',
    // 'storybook-readme/register',
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../'),
          },
          {
            test: /\.(ts|tsx)$/,
            loader: require.resolve('babel-loader'),
          },
          {
            test: /\.md$/,
            loader: require.resolve('markdown-loader'),
          }
        ]
      },
      resolve: {
        ...config.resolve,
        extensions: [...config.resolve.extensions, '.ts', '.tsx'],
        modules: [...config.resolve.modules, '/src'],
      },
      plugins: [
        ...config.plugins,
        new StylelintPlugin(),
      ],
      node: {
        ...config.node,
        fs: 'empty',
      }
    };
  }
};
