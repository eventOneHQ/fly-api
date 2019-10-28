export interface FlyResponse<T> {
  id: string
  type: string
  attributes: T
}

export interface FlyApp {
  org?: string
  name: string
  hostname: string
  version: number
}

export interface FlyHostname {
  preview_hostname: string
  dns_configured: boolean
}
