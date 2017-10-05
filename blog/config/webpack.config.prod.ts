/**
 * Module with the development Webpack config.
 * @module config/webpack.config.dev
 */
// Node.
import * as path from 'path';

// Webpack.
import * as autoprefixer from 'autoprefixer';
import { CheckerPlugin, TsConfigPathsPlugin } from 'awesome-typescript-loader';
import * as cssnano from 'cssnano';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import * as Webpack from 'webpack';
// import clientTsConfig from './tsconfig.client.json';

// Config.
import {
  CLIENT_BUNDLE,
  CLIENT_ENTRY,
  DEV_SERVER_PORT,
  HOST,
  PUBLIC_DIR,
  SERVER_PORT
} from './app';

const config: Webpack.Configuration = {
  entry: CLIENT_ENTRY,
  output: {
    filename: CLIENT_BUNDLE,
    path: PUBLIC_DIR,
  },
  resolve: {
    modules: ['src/client', 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.json'],
    plugins: [
      new TsConfigPathsPlugin({ /*tsconfig: clientTsConfig*/ configFileName: './tsconfig.client.json' })
    ]
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: './tsconfig.client.json'
            }
          }
        ]
      },
      {
        test: /.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            // @import and url as require
            { loader: 'css-loader' },
            // Resolve relative paths
            { loader: 'resolve-url-loader' },
            // Autoprefixer
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ]
                })]
              }
            },
            // Convert to css
            { loader: 'sass-loader', options: { sourceMap: true } }
          ]
        })
      },
      {
        test: /.json$/,
        use: 'json-loader'
      },
      {
        test: /\.(jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: { name: 'media/[name].[ext]' }
        }
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new Webpack.NamedModulesPlugin(),
    new Webpack.DefinePlugin({
      IS_BROWSER: true,
      IS_PRODUCTION: true
    }),
    new CheckerPlugin(),
    new Webpack.optimize.UglifyJsPlugin(),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /styles.css$/,
      cssProcessor: cssnano,
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    })
  ]
};

export default config;
