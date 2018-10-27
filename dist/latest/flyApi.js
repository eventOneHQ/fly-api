"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const error_1 = __importDefault(require("./error"));
class Fly {
    constructor(apiKey, resourceType = 'apps') {
        this.apiKey = apiKey;
        this.resourceType = resourceType;
        this.apiVersion = 'v1';
        this.apiUrl = `https://fly.io/api/${this.apiVersion}/${this.resourceType}`;
        this.axios = axios_1.default.create({
            baseURL: this.apiUrl,
            headers: { Authorization: `Bearer ${this.apiKey}` }
        });
    }
    /**
     * Creates a new Error
     * @private
     * @param {Error} err Error object
     */
    createError(err) {
        console.log(err);
        let name;
        let status;
        let message;
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
        const error = new error_1.default(name, message, status);
        throw error;
    }
    /**
     * List a site's hostnames
     * @param {string} name Name of the site
     *
     * @returns {Promise} Promise object represents the API response
     */
    getHostnames(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.axios.get(`/${name}/hostnames`);
                return res.data.data;
            }
            catch (err) {
                return this.createError(err);
            }
        });
    }
    /**
     * Create a new site hostname
     * @param {string} name Name of the site
     * @param {string} hostname The new hostname
     *
     * @returns {Promise} Promise object represents the API response
     */
    postHostname(name, hostname) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = {
                    data: {
                        attributes: {
                            hostname: hostname
                        }
                    }
                };
                const res = yield this.axios.post(`/${name}/hostnames`, data);
                return res.data.data;
            }
            catch (err) {
                return this.createError(err);
            }
        });
    }
    /**
     * Get a hostname of a site
     * @param {string} name Name of the site
     * @param {string} hostname The requested hostname
     *
     * @returns {Promise} Promise object represents the API response
     */
    getHostname(name, hostname) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.axios.get(`/${name}/hostnames/${hostname}`);
                return res.data.data;
            }
            catch (err) {
                return this.createError(err);
            }
        });
    }
    /**
     * Delete a site hostname
     * @param {string} name Name of the site
     * @param {string} hostname Hostname to delete
     *
     * @returns {Promise} Promise object represents the API response
     */
    deleteHostname(name, hostname) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.axios.delete(`/${name}/hostnames/${hostname}`);
                return res.data.data;
            }
            catch (err) {
                return this.createError(err);
            }
        });
    }
    getApps() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.axios.get('/');
                return res.data.data;
            }
            catch (err) {
                return this.createError(err);
            }
        });
    }
    getApp(name) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.resourceType === 'sites') {
                throw new Error('Getting a single site is not supported');
            }
            try {
                const res = yield this.axios.get(`/${name}`);
                return res.data.data;
            }
            catch (err) {
                return this.createError(err);
            }
        });
    }
}
exports.default = Fly;
