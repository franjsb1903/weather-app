import type { GeolocationModel } from '../models/geolocation.model'

export function getGeolocationFullName(geolocation: GeolocationModel) {
  return `${geolocation.name}
              ${geolocation.admin1 ? `, ${geolocation.admin1}` : ''}
              ${geolocation.admin2 ? `, ${geolocation.admin2}` : ''}
              ${geolocation.admin3 ? `, ${geolocation.admin3}` : ''},{' '}
              ${geolocation.country}`
}
