// tslint:disable
/**
 * Module with some ES2015 features polyfills.
 * @module src/client/utils/polyfills
 */
// Array.
import 'mdn-polyfills/Array.from';
import 'mdn-polyfills/Array.of';
import 'mdn-polyfills/Array.prototype.filter';
import 'mdn-polyfills/Array.prototype.find';
import 'mdn-polyfills/Array.prototype.findIndex';
import 'mdn-polyfills/Array.prototype.forEach';
import 'mdn-polyfills/Array.prototype.includes';

// Promise.
import { Promise } from 'es6-promise';

if (!(window as any).Promise) {
  (window as any).Promise = Promise;
}
