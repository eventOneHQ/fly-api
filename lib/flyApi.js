const axios = require('axios')

class Fly {
  /**
   * Create a Fly API Client
   * @param {string} apiKey Fly.io access token
   * @param {string} [resourceType=apps]    Site type (`apps` or `sites`)
   */
  constructor (apiKey, resourceType = 'apps') {
    this.apiKey = apiKey
    this.resourceType = resourceType

    this.apiVersion = 'v1'
    this.apiUrl = `https://fly.io/api/${this.apiVersion}/${this.resourceType}`

    this.axios = axios.create({
      baseURL: this.apiUrl,
      headers: { Authorization: `Bearer ${this.apiKey}` }
    })
  }

  /**
   * Creates a new Error
   * @private
   * @param {Error} err Error object
   */
  createError (err) {
    const error = new Error(err)
    if (err.response) {
      if (err.response.status) {
        error.status = err.response.status
      }

      if (err.response.data && err.response.data.errors) {
        error.message = err.response.data.errors[0].title
      }
    }

    throw error
  }

  /**
   * List a site's hostnames
   * @param {string} name Name of the site
   *
   * @returns {Promise} Promise object represents the API response
   */
  async getHostnames (name) {
    try {
      const res = await this.axios.get(`/${name}/hostnames`)
      return res.data.data
    } catch (err) {
      return this.createError(err)
    }
  }

  /**
   * Create a new site hostname
   * @param {string} name Name of the site
   * @param {string} hostname The new hostname
   *
   * @returns {Promise} Promise object represents the API response
   */
  async postHostname (name, hostname) {
    try {
      const data = {
        data: {
          attributes: {
            hostname: hostname
          }
        }
      }
      const res = await this.axios.post(`/${name}/hostnames`, data)
      return res.data.data
    } catch (err) {
      return this.createError(err)
    }
  }

  /**
   * Get a hostname of a site
   * @param {string} name Name of the site
   * @param {string} hostname The requested hostname
   *
   * @returns {Promise} Promise object represents the API response
   */
  async getHostname (name, hostname) {
    try {
      const res = await this.axios.get(`/${name}/hostnames/${hostname}`)
      return res.data.data
    } catch (err) {
      return this.createError(err)
    }
  }

  /**
   * Delete a site hostname
   * @param {string} name Name of the site
   * @param {string} hostname Hostname to delete
   *
   * @returns {Promise} Promise object represents the API response
   */
  async deleteHostname (name, hostname) {
    try {
      const res = await this.axios.delete(`/${name}/hostnames/${hostname}`)
      return res.data.data
    } catch (err) {
      return this.createError(err)
    }
  }
}

module.exports = Fly
