/**
 * Module with global app config.
 * @module config/app
 */
// Node.
import * as path from 'path';

export const HOST = process.env.HOST || 'localhost';

export const SERVER_PORT = 10000;

export const DEV_SERVER_PORT = 10001;

// Paths.
// ----------------------------------------------------
export const PUBLIC_DIR = path.resolve(__dirname + '/../build/public');
