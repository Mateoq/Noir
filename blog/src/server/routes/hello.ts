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
  reply(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <h1>Hello</h1>
    <script src="./public/bundle.js"></script>
  </body>
  </html>
  `);
};

export const getHello: Hapi.RouteConfiguration = {
  method: GET,
  path: HELLO_ROUTE,
  handler: getHelloHandler
};
