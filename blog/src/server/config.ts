/**
 * Module that configures the server plugins.
 * @module src/server/config
 */
// Hapi.
import * as Hapi from 'hapi';

// Plugins.
import configConsole from './plugins/server_console';

// Types.
import { EmptyCallback } from '../shared/utils/globals';

const configServer = (server: Hapi.Server, done: EmptyCallback): void => {
  Promise.all([configConsole(server)])
  .then(done);
};

export default configServer;
