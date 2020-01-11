// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path')

module.exports = {
  plugins: [],
  module: {
    rules: [
      {
        test: /\.(ttf|eot|svg|png)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[hash].[ext]',
          },
        },
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: 'fonts/[hash].[ext]',
            limit: 5000,
            mimetype: 'application/font-woff',
          },
        },
      },
    ],
  },
  resolve: {
    modules: ['node_modules', 'src'],
    alias: {
      services: path.resolve(__dirname, '../src', 'services'),
      components: path.resolve(__dirname, '../src', 'components'),
      theme: path.resolve(__dirname, '../src', 'theme'),
    },
  },
}
