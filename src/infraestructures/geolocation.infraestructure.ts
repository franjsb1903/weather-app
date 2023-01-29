import type { GeolocationDomain } from '../domains/geolocation.domain'

import { API_GEOLOCATION_URL } from '../config/constants'
import type { GeolocationModel } from '../models/geolocation.model'

export class GeolocationFetch implements GeolocationDomain {
  async geolocateByName(name: string): Promise<GeolocationModel[]> {
    const response = await fetch(
      `${API_GEOLOCATION_URL}?name=${name}&language=es`
    )
    const { results } = await response.json()

    return results
  }
}
