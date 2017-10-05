/**
 * Module with the Hapi good config.
 * @module src/server/plugins/server_console
 */
// Hapi.
import * as Good from 'good';
import * as Hapi from 'hapi';

// Types.
import { PromiseReject, PromiseResolve } from '../../shared/utils/globals';

// Utils.
import * as Whisper from '../../shared/utils/whisper';

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

/**
 * Returns a promise that registers the console logging utility.
 * @param server The app server object.
 */
const configConsole = (server: Hapi.Server): Promise<{}> => {
  return new Promise((resolve: PromiseResolve, reject: PromiseReject): void => {
    server.register({
      register: Good.register,
      options
    }, (err: Error) => {
      if (err) {
        reject(err);
        return;
      }
      Whisper.log('-- SERVER: Good plugin loaded --');

      resolve();
    });
  });
};

export default configConsole;
