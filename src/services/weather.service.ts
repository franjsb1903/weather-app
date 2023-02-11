import type { WeatherDomain } from '../domains/weather.domain'
import { WeatherFetch } from '../infraestructures/weather.infraestructure'

export class WeatherService {
  constructor(private weatherDTO: WeatherDomain) {}

  async getWeatherByCoordinates(lat: number, lon: number) {
    return await this.weatherDTO.getWeatherByCoordinates(lat, lon)
  }
}

export const weatherService = new WeatherService(new WeatherFetch())

Object.freeze(weatherService)
