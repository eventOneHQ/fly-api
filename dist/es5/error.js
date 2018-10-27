"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class representing an Fly error
 * @extends Error
 */
var FlyError = /** @class */ (function (_super) {
    __extends(FlyError, _super);
    /**
     * Create a new FlyError
     * @param {String} name Name of the Error
     * @param {String} message Friendly Error Message
     * @param {Number} status Status Code
     */
    function FlyError(name, message, status) {
        var _this = _super.call(this) || this;
        // Error.captureStackTrace(this, this.constructor)
        _this.name = name || 'InternalError';
        _this.message = message || 'Internal Server Error';
        _this.status = status || 500;
        return _this;
    }
    return FlyError;
}(Error));
exports.default = FlyError;
