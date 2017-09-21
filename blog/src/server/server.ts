/**
 * Module with the entrypoint of the server app.
 * @module src/server/server
 */

// Hapi.
import * as Hapi from 'hapi';

// Server.
import configServer from './config';
import configRoutes from './routes/router';

// Utils.
import * as Whisper from '../shared/utils/whisper';

// Create server with a host and port.
const server = new Hapi.Server();

server.connection({
  host: '0.0.0.0',
  port: 10000
});

// Config server.
configServer(server, () => {
  // Routes.
  configRoutes(server);

  // Start server.
  server.start((err: Error): void => {
    if (err) {
      throw err;
    }

    Whisper.info('Server running at ', server.info.uri);
  });
});
