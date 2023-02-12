import type { GeolocationModel } from '../models/geolocation.model'

export function getGeolocationFullName(geolocation: GeolocationModel | null) {
  if (!geolocation) return ''
  const texts = [
    geolocation.name,
    geolocation.admin1,
    geolocation.admin2,
    geolocation.admin3,
    geolocation.country,
  ].filter(text => text)
  return texts.join(', ')
}
