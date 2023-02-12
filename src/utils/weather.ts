import type { CurrentWeather } from '../models/weather/current.model'
import type { DailyWeather } from '../models/weather/daily.model'
import type { HourlyWeather } from '../models/weather/hourly.model'

export function buildTemperatureCurrent(object: CurrentWeather) {
  const temperature = object.temperature
  return temperature
}
