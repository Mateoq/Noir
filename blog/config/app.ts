/**
 * Module with global app config.
 * @module config/app
 */
// Node.
import * as path from 'path';

export const HOST: string = process.env.HOST || 'localhost';

export const SERVER_PORT: number = 10000;

export const DEV_SERVER_PORT: number = 10001;

// Paths.
// ----------------------------------------------------
export const PUBLIC_DIR: string = path.resolve(__dirname + '/../build/public');
