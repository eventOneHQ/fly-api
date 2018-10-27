"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class representing an Fly error
 * @extends Error
 */
class FlyError extends Error {
    /**
     * Create a new FlyError
     * @param {String} name Name of the Error
     * @param {String} message Friendly Error Message
     * @param {Number} status Status Code
     */
    constructor(name, message, status) {
        super();
        // Error.captureStackTrace(this, this.constructor)
        this.name = name || 'InternalError';
        this.message = message || 'Internal Server Error';
        this.status = status || 500;
    }
}
exports.default = FlyError;
