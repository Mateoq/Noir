/**
 * Module with the client development server.
 * @module src/server/dev-server
 */
// Node.
import * as Path from 'path';

// Hapi.
import * as Boom from 'boom';
import * as Hapi from 'hapi';

// Webpack.
import * as Webpack from 'webpack';
import * as WebpackDevMiddleware from 'webpack-dev-middleware';
// import * as WebpackHotMiddleware from 'webpack-hot-middleware';

// Config.
// import {
//   DEV_SERVER_PORT,
//   HOST
// } from '../../config/app';
// import config from '../../config/webpack.config.dev';

// // Utils.
// import * as Whisper from '../shared/utils/whisper';

// // Configure Dev Server.
// const server = new Hapi.Server();
// const compiler = Webpack(config);

// server.connection({ host: HOST, port: DEV_SERVER_PORT });

// // Config webpack middlewares.
// const devMiddleware = WebpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath,
//   serverSideRender: true
// });

// // const hotMiddleware = WebpackHotMiddleware(compiler);

// // Add webpack dev middleware as a server extension.
// server.ext('onRequest', (request: Hapi.Request, reply: Hapi.ReplyWithContinue): void => {
//   devMiddleware(request.raw.req, request.raw.res, (err: Error): void => {
//     if (err) {
//       const errorMessage = `ERROR::DEV_MIDDLEWARE: ${err}`;
//       Whisper.error(errorMessage);
//       Boom.internal(errorMessage);
//       return;
//     }

//     reply.continue();
//   });
// });

// // Add webpack dev middleware as a server extension.
// // server.ext('onRequest', (request: Hapi.Request, reply: Hapi.ReplyWithContinue): void => {
// //   hotMiddleware(request.raw.req, request.raw.res, (err: Error): void => {
// //     if (err) {
// //       const errorMessage = `ERROR::HOT_MIDDLEWARE: ${err}`;
// //       Whisper.error(errorMessage);
// //       Boom.internal(errorMessage);
// //       return;
// //     }

// //     reply.continue();
// //   });
// // });

// // Run webpack dev server.
// server.start((err: Error): void => {
//   if (err) {
//     const errorMessage = `ERROR::DEV_SERVER: ${err}`;
//     throw err;
//   }
//   Whisper.log(`Dev Server running on: ${HOST}:${DEV_SERVER_PORT}`);
// });
