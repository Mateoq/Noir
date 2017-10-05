/**
 * Module with the Hapi inert config.
 * @module src/server/plugins/static_files
 */
// Node,
import * as Path from 'path';

// Hapi.
import * as Hapi from 'hapi';
import * as Inert from 'inert';

// Types.
import { PromiseReject, PromiseResolve } from '../../shared/utils/globals';

// Constants.
import { FILES_ROUTE } from '../../shared/constants/routes';
import { GET } from '../../shared/constants/strings';

// Utils.
import * as Whisper from '../../shared/utils/whisper';

/**
 * Returns a promise that registers the static files serving utility.
 * @param server The app server object.
 */
const configStaticFiles = (server: Hapi.Server): Promise<{}> => {
  return new Promise((resolve: PromiseResolve, reject: PromiseReject): void => {
    server.register(Inert, (err: Error) => {
      if (err) {
        reject(err);
        return;
      }
      Whisper.log('-- SERVER: Inert plugin loaded --');

      // Static files route.
      server.route({
        method: GET,
        path: FILES_ROUTE,
        handler: {
          directory: {
            path: Path.resolve(__dirname, '..', '..', 'public'),
            listing: true
          }
        }
      });

      resolve();
    });
  });
};

export default configStaticFiles;
