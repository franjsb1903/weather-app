import type { CurrentWeather } from './current.model'
import type { DailyWeather } from './daily.model'
import type { DailyUnits } from './dailyUnits.model'
import type { HourlyWeather } from './hourly.model'
import type { HourlyUnits } from './hourlyUnits.model'

export interface OpenWeatherModel {
  current_weather: CurrentWeather
  hourly_units: HourlyUnits
  hourly: HourlyWeather
  daily_units: DailyUnits
  daily: DailyWeather
}
