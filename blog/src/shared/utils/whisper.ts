/**
 * Module with the logger utility.
 * @module src/shared/utils/logger
 */
// tslint:disable:no-console
// tslint:disable:no-any

export const log = (...args: any[]): void => {
  console.log(...args);
};

export const error = (...args: any[]): void => {
  console.error(...args);
};

export const info = (...args: any[]): void => {
  console.info(...args);
};
