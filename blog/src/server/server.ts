/**
 * Module with the entrypoint of the server app.
 * @module src/server/server
 */

// Hapi.
import * as Good from 'good';
import * as Hapi from 'hapi';

// Contants.
import { GET } from '../shared/constants/strings';

// Routes.
import * as Hello from './routes/hello';

// Utils.
import * as Whisper from '../shared/utils/whisper';

// Create server with a host and port.
const server = new Hapi.Server();

server.connection({
  host: '0.0.0.0',
  port: 10000
});

// Config.
const options = {
  ops: {
    interval: 1000
  },
  reporters: {
    consoleReporter: [
      {
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{ log: '*', response: '*' }]
      },
      {
        module: 'good-console'
      },
      'stdout'
    ]
  }
};

// Routes.
server.route(Hello.getHello);

server.register({
  register: Good.register,
  options
}, (goodErr: Error): void => {
  if (goodErr) {
    throw goodErr;
  }

  // Start server.
  server.start((err: Error): void => {
    if (err) {
      throw err;
    }

    Whisper.info('Server running at ', server.info.uri || '');
  });
});
