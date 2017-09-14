/**
 * Module with the Hello routes.
 * @module src/server/routes/hello
 */
// Hapi.
import * as Hapi from 'hapi';

// Constants.
import { GET } from '../../shared/constants/strings';
import { HELLO_ROUTE } from '../../shared/constants/routes';

const getHelloHandler = (_: Hapi.Request, reply: Hapi.ReplyNoContinue): void => {
  reply('Hello world');
}

export const getHello: Hapi.RouteConfiguration = {
  method: GET,
  path: HELLO_ROUTE,
  handler: getHelloHandler
};
