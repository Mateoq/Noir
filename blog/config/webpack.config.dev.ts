/**
 * Module with the development Webpack config.
 * @module config/webpack.config.dev
 */
// Node.
import * as path from 'path';

// Webpack.
import * as autoprefixer from 'autoprefixer';
import { CheckerPlugin, TsConfigPathsPlugin } from 'awesome-typescript-loader';
import * as Webpack from 'webpack';
import clientTsConfig from './tsconfig.client.json';

// Config.
import {
  DEV_SERVER_PORT,
  HOST,
  PUBLIC_DIR,
  SERVER_PORT
} from './app';

const config: Webpack.Configuration = {
  entry: [
    'webpack-hot-middleware/client',
    './src/client/main.ts'
  ],
  output: {
    filename: 'bundle.js',
    path: PUBLIC_DIR,
    publicPath: `http://${HOST}:${DEV_SERVER_PORT}/public`
  },
  resolve: {
    modules: ['src/client', 'node_modules'],
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [
      new TsConfigPathsPlugin({ tsconfig: clientTsConfig })
    ]
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
    host: HOST,
    port: DEV_SERVER_PORT,
    proxy: {
      '*': `http://${HOST}:${SERVER_PORT}`
    },
    stats: 'errors-only',
    disableHostCheck: true
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'awesome-typescript-loader'
          }
        ]
      },
      {
        test: /.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'resolve-url-loader' },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => ([
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9'
                  ]
                })
              ])
            }
          },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
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
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NamedModulesPlugin(),
    new Webpack.DefinePlugin({
      IS_BROWSER: true,
      IS_PRODUCTION: false
    }),
    new CheckerPlugin()
  ]
};

export default config;
