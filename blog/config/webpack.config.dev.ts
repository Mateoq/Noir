/**
 * Module with the development Webpack config.
 * @module config/webpack.config.dev
 */
// Node.
import * as path from 'path';

// Webpack.
import * as autoprefixer from 'autoprefixer';
import { TsConfigPathsPlugin } from 'awesome-typescript-loader';
import * as Webpack from 'webpack';
import clientTsConfig from './tsconfig.client.json';

// Config.
import {
  DEV_SERVER_PORT,
  HOST,
  PUBLIC_DIR
} from './app';

const config: Webpack.Configuration = {
  entry: [
    'webpack-hot-middleware/client',
    'webpack/hot/only-dev-server',
    './src/client/main.ts'
  ],
  output: {
    filename: 'bundle.js',
    path: PUBLIC_DIR,
    publicPath: `http://${HOST}:${DEV_SERVER_PORT}/public`
  },
  resolve: {
    modules: ['src/client', 'node_modules'],
    extensions: ['.ts']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'awesome-typescript',
            options: {
              configFileName: 'config/tsconfig.client.json'
            }
          }
        ]
      },
      {
        test: /.scss$/,
        use: [
          { loader: 'style' },
          { loader: 'css', options: { sourceMap: true } },
          { loader: 'resolve-url' },
          {
            loader: 'postcss',
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
          { loader: 'sass', options: { sourceMap: true } }
        ]
      },
      {
        test: /.json/,
        use: 'json'
      },
      {
        test: /\.(jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$/,
        use: {
          loader: 'file',
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
    new TsConfigPathsPlugin({ tsconfig: clientTsConfig })
  ]
};

export default config;
