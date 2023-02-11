import { atom } from 'nanostores'
import type { WeatherModel } from '../models/weather/weather.model'

export const weatherOfLocation = atom<WeatherModel | null>(null)
