/**
 * Class representing an Fly error
 * @extends Error
 */
export default class FlyError extends Error {
  status: number
  name: string
  message: string
  /**
   * Create a new FlyError
   * @param {String} name Name of the Error
   * @param {String} message Friendly Error Message
   * @param {Number} status Status Code
   */
  constructor (name: string, message: string, status: number) {
    super()

    // Error.captureStackTrace(this, this.constructor)

    this.name = name || 'InternalError'

    this.message = message || 'Internal Server Error'

    this.status = status || 500
  }
}
