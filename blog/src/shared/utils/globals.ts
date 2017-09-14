/**
 * Module with global types.
 * @module src/shared/utils/globals
 */

export type EmptyCallback = () => void;

// Promise.
export type PromiseResolve = (value?: {} | PromiseLike<{}>) => void;
export type PromiseReject = (reason?: {}) => void;
