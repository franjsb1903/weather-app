import type { GeolocationDomain } from '../domains/geolocation.domain'
import { GeolocationFetch } from '../infraestructures/geolocation.infraestructure'

class GeolocationService {
  constructor(private geolocationDTO: GeolocationDomain) {}

  async geolocateByName(name: string) {
    return await this.geolocationDTO.geolocateByName(name)
  }
}

export const geolocationService = new GeolocationService(new GeolocationFetch())

Object.freeze(geolocationService)
