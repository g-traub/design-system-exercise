// module.exports = {
//   "stories": [
//     "../src/**/*.stories.mdx",
//     "../src/**/*.stories.@(js|jsx|ts|tsx)"
//   ],
//   "addons": [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials"
//   ]
// }

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
    // config.module.rules = config.module.rules.filter(el => !/svg/.test(el.test));


    // Put back the default rule without svg
    // config.module.rules.push({
    //   test: /\.(ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
    //   loader: 'file-loader',
    //   options: {esModule: false, name: 'static/media/[path][name].[ext]'},
    // });
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
              // path.resolve(__dirname, '../src/assets/styles/01-utils/_mixins.scss'),
              // path.resolve(__dirname, '../src/assets/styles/01-utils/_media-queries.scss'),
              path.resolve(__dirname, '../src/assets/styles/style.scss'),
            ],
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });
    //
    // config.module.rules.push({
    //   test: /\.svg$/,
    //   use: ['html-loader'],
    //   include: path.resolve(__dirname, '../'),
    // });
    // console.log('-------------------------- HROOOOO')
    config.resolve.alias['@'] = path.resolve(__dirname, '../src');
    return config;
  },
};
