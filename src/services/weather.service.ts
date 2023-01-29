import type { WeatherDomain } from '../domains/weather.domain'

export class WeatherService {
  constructor(private weatherDTO: WeatherDomain) {}

  async getWeatherByCity(city: string) {
    return await this.weatherDTO.getWeatherByCity(city)
  }
}
