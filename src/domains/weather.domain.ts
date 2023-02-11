import type { WeatherModel } from '../models/weather/weather.model'

export interface WeatherDomain {
  getWeatherByCoordinates: (lat: number, lon: number) => Promise<WeatherModel>
}
