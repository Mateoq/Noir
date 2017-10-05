/**
 * Module that configures the server plugins.
 * @module src/server/config
 */
// Hapi.
import * as Hapi from 'hapi';

// Plugins.
import configConsole from './plugins/server_console';
import configStaticFiles from './plugins/static_files';

// Types.
import { EmptyCallback } from '../shared/utils/globals';

function configServer(server: Hapi.Server, done: EmptyCallback): void {
  Promise.all([configConsole(server), configStaticFiles(server)])
  .then(done);
}

export default configServer;
