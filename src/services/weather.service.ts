import type { WeatherDomain } from '../domains/weather.domain'
import { OpenWeather } from '../infraestructures/weather.infraestructure'

export class WeatherService {
  constructor(private weatherDTO: WeatherDomain) {}

  async getWeatherByCoordinates(lat: number, lon: number) {
    return await this.weatherDTO.getWeatherByCoordinates(lat, lon)
  }
}

export const weatherService = new WeatherService(new OpenWeather())

Object.freeze(weatherService)
