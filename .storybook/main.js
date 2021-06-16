const path = require('path');

module.exports = {

  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],

  webpackFinal: async (config, {configType}) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
        {
          loader: 'style-resources-loader',
          options: {
            patterns: [
              path.resolve(__dirname, '../src/assets/styles/style.scss'),
            ],
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });
    config.resolve.alias['@'] = path.resolve(__dirname, '../src');
    return config;
  },
};
