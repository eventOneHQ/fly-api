"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var error_1 = __importDefault(require("./error"));
var Fly = /** @class */ (function () {
    function Fly(apiKey, resourceType) {
        if (resourceType === void 0) { resourceType = 'apps'; }
        this.apiKey = apiKey;
        this.resourceType = resourceType;
        this.apiVersion = 'v1';
        this.apiUrl = "https://fly.io/api/" + this.apiVersion + "/" + this.resourceType;
        this.axios = axios_1.default.create({
            baseURL: this.apiUrl,
            headers: { Authorization: "Bearer " + this.apiKey }
        });
    }
    /**
     * Creates a new Error
     * @private
     * @param {Error} err Error object
     */
    Fly.prototype.createError = function (err) {
        console.log(err);
        var name;
        var status;
        var message;
        if (err.response) {
            if (err.response.status) {
                status = err.response.status;
            }
            if (err.response.name) {
                name = err.response.name;
            }
            if (err.response.data && err.response.data.errors) {
                message = err.response.data.errors[0].title;
            }
        }
        var error = new error_1.default(name, message, status);
        throw error;
    };
    /**
     * List a site's hostnames
     * @param {string} name Name of the site
     *
     * @returns {Promise} Promise object represents the API response
     */
    Fly.prototype.getHostnames = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var res, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.axios.get("/" + name + "/hostnames")];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data.data];
                    case 2:
                        err_1 = _a.sent();
                        return [2 /*return*/, this.createError(err_1)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Create a new site hostname
     * @param {string} name Name of the site
     * @param {string} hostname The new hostname
     *
     * @returns {Promise} Promise object represents the API response
     */
    Fly.prototype.postHostname = function (name, hostname) {
        return __awaiter(this, void 0, void 0, function () {
            var data, res, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        data = {
                            data: {
                                attributes: {
                                    hostname: hostname
                                }
                            }
                        };
                        return [4 /*yield*/, this.axios.post("/" + name + "/hostnames", data)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data.data];
                    case 2:
                        err_2 = _a.sent();
                        return [2 /*return*/, this.createError(err_2)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get a hostname of a site
     * @param {string} name Name of the site
     * @param {string} hostname The requested hostname
     *
     * @returns {Promise} Promise object represents the API response
     */
    Fly.prototype.getHostname = function (name, hostname) {
        return __awaiter(this, void 0, void 0, function () {
            var res, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.axios.get("/" + name + "/hostnames/" + hostname)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data.data];
                    case 2:
                        err_3 = _a.sent();
                        return [2 /*return*/, this.createError(err_3)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Delete a site hostname
     * @param {string} name Name of the site
     * @param {string} hostname Hostname to delete
     *
     * @returns {Promise} Promise object represents the API response
     */
    Fly.prototype.deleteHostname = function (name, hostname) {
        return __awaiter(this, void 0, void 0, function () {
            var res, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.axios.delete("/" + name + "/hostnames/" + hostname)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data.data];
                    case 2:
                        err_4 = _a.sent();
                        return [2 /*return*/, this.createError(err_4)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Fly.prototype.getApps = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.axios.get('/')];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data.data];
                    case 2:
                        err_5 = _a.sent();
                        return [2 /*return*/, this.createError(err_5)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Fly.prototype.getApp = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var res, err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.resourceType === 'sites') {
                            throw new Error('Getting a single site is not supported');
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.axios.get("/" + name)];
                    case 2:
                        res = _a.sent();
                        return [2 /*return*/, res.data.data];
                    case 3:
                        err_6 = _a.sent();
                        return [2 /*return*/, this.createError(err_6)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Fly;
}());
exports.default = Fly;
