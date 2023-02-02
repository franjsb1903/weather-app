import { atom } from 'nanostores'
import type { GeolocationModel } from '../models/geolocation.model'

export const locationSelected = atom<GeolocationModel | null>(null)
