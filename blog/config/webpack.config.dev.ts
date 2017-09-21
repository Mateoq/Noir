/**
 * Module with the development Webpack config.
 * @module config/webpack.config.dev
 */
// Node.
import * as path from 'path';

// Webpack.
import * as Webpack from 'webpack';

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
  }
};

export default config;
