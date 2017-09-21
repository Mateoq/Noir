/**
 * Module with the server routes configuration.
 * @module src/server/routes/router
 */

// Hapi.
import * as Hapi from 'hapi';

// Routes.
import * as HelloRoutes from './hello';

/**
 * Configures the server routes.
 * @param server -> The server object.
 */
function configRoutes(server: Hapi.Server): void {
  // Hello Routes.
  server.route(HelloRoutes.getHello);
}

export default configRoutes;
