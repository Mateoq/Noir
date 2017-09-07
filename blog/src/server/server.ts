/**
 * Module with the entrypoint of the server app.
 * @module src/server/server
 */

// Hapi.
import * as Hapi from 'hapi';

// Contants.
import { GET } from '../shared/constants/strings';

// Create server with a host and port.
const server = new Hapi.Server();

server.connection({
  host: '0.0.0.0',
  port: 10000
});

// Routes.
server.route({
  method: GET,
  path: '/hello',
  handler: (_, reply: Hapi.ReplyNoContinue): void => {
    reply('Hello world');
  }
});

// Start server.
server.start((err: Error): void => {
  if (err) {
    throw err;
  }

  console.log('Server running at', server.info.uri);
});
