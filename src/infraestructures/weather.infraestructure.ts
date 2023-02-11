import type { WeatherDomain } from '../domains/weather.domain'
import type { WeatherModel } from '../models/weather/weather.model'
import { API_WEATHER_URL } from '../config/constants'

export class WeatherFetch implements WeatherDomain {
  async getWeatherByCoordinates(
    lat: number,
    lon: number
  ): Promise<WeatherModel> {
    const finalUrl = API_WEATHER_URL.replace(
      '{LAT}',
      lat.toString().replace(',', '.')
    ).replace('{LON}', lon.toString().replace(',', '.'))
    const response = await fetch(finalUrl)
    return await response.json()
  }
}
