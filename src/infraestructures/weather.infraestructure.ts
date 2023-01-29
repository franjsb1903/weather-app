import type { WeatherDomain } from '../domains/weather.domain'

export class WeatherFetch implements WeatherDomain {
  async getWeatherByCity() {
    const response = await fetch(``)
    return await response.json()
  }
}
