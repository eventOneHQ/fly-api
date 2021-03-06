import axios, { AxiosInstance } from 'axios'
import { FlyResponse, FlyHostname, FlyApp } from './definitions'

export class Fly {
  private apiKey: string
  private resourceType: string
  private apiVersion: string
  private apiUrl: string

  private client: AxiosInstance
  /**
   * Create a Fly API Client
   * @param apiKey Fly.io access token
   * @param [resourceType=apps] Site type (`apps` or `sites`)
   */
  constructor(apiKey: string, resourceType = 'apps') {
    this.apiKey = apiKey
    this.resourceType = resourceType

    this.apiVersion = 'v1'
    this.apiUrl = `https://fly.io/api/${this.apiVersion}/${this.resourceType}`

    this.client = axios.create({
      baseURL: this.apiUrl,
      headers: { Authorization: `Bearer ${this.apiKey}` }
    })
  }

  /**
   * List a site's hostnames
   * @param name Name of the site
   *
   * @returns Promise object represents the API response
   */
  public async getHostnames(name: string): Promise<FlyResponse<FlyHostname>[]> {
    try {
      const res = await this.client.get(`/${name}/hostnames`)
      return res.data.data
    } catch (err) {
      throw err
    }
  }

  /**
   * Create a new site hostname
   * @param name Name of the site
   * @param hostname The new hostname
   *
   * @returns Promise object represents the API response
   */
  public async createHostname(
    name: string,
    hostname: string
  ): Promise<FlyResponse<FlyHostname>> {
    try {
      const data = {
        data: {
          attributes: {
            hostname: hostname
          }
        }
      }
      const res = await this.client.post(`/${name}/hostnames`, data)
      return res.data.data
    } catch (err) {
      throw err
    }
  }

  /**
   * Get a hostname of a site
   * @param name Name of the site
   * @param hostname The requested hostname
   *
   * @returns Promise object represents the API response
   */
  public async getHostname(
    name: string,
    hostname: string
  ): Promise<FlyResponse<FlyHostname>> {
    try {
      const res = await this.client.get(`/${name}/hostnames/${hostname}`)
      return res.data.data
    } catch (err) {
      throw err
    }
  }

  /**
   * Remove a site hostname
   * @param name Name of the site
   * @param hostname Hostname to remove
   *
   * @returns Promise object represents the API response
   */
  public async removeHostname(
    name: string,
    hostname: string
  ): Promise<FlyResponse<FlyHostname>> {
    try {
      const res = await this.client.delete(`/${name}/hostnames/${hostname}`)
      return res.data.data
    } catch (err) {
      throw err
    }
  }

  public async getApps(): Promise<FlyResponse<FlyApp[]>> {
    try {
      const res = await this.client.get('/')
      return res.data.data
    } catch (err) {
      throw err
    }
  }

  public async getApp(name: string): Promise<FlyResponse<FlyApp>> {
    if (this.resourceType === 'sites') {
      throw new Error('Getting a single site is not supported')
    }
    try {
      const res = await this.client.get(`/${name}`)
      return res.data.data
    } catch (err) {
      throw err
    }
  }
}
