/**
 * Main module of the client app.
 * @module src/client/main
 */
// Polyfills.
import 'utils/polyfills';

import * as Whisper from '../shared/utils/whisper';

function log(str: string): void {
  Whisper.log(str);
}

log('Lol');
