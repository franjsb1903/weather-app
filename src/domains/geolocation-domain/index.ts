import type { GeolocationModel } from '../../models/geolocation-model'

export interface GeolocationDomain {
  geolocateByName: (name: string) => Promise<GeolocationModel[]>
}
