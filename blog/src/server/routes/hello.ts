/**
 * Module with the Hello routes.
 * @module src/server/routes/hello
 */
// Hapi.
import * as Hapi from 'hapi';

// Constants.
import { HELLO_ROUTE } from '../../shared/constants/routes';
import { GET } from '../../shared/constants/strings';

const getHelloHandler = (_: Hapi.Request, reply: Hapi.ReplyNoContinue): void => {
  reply('Hello world');
};

export const getHello: Hapi.RouteConfiguration = {
  method: GET,
  path: HELLO_ROUTE,
  handler: getHelloHandler
};
