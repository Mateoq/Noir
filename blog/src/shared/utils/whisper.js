"use strict";
/**
 * Module with the logger utility.
 * @module src/shared/utils/logger
 */
// tslint:disable:no-console
// tslint:disable:no-any
exports.__esModule = true;
exports.log = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log.apply(console, args);
};
exports.error = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.error.apply(console, args);
};
exports.info = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.info.apply(console, args);
};
