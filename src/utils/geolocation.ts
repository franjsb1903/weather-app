import type { GeolocationModel } from '../models/geolocation.model'

function buildText(text: string) {
  return text ? `, ${text.trim()}` : ''
}

export function getGeolocationFullName(geolocation: GeolocationModel) {
  return `
        ${geolocation.name}
        ${buildText(geolocation.admin1)}
        ${buildText(geolocation.admin2)}
        ${buildText(geolocation.admin3)}, 
        ${geolocation.country}
    `
}
