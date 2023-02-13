import type { WeatherDomain } from '../domains/weather.domain'
import type { WeatherModel } from '../models/weather/weather.model'
import type { OpenWeatherModel } from '../models/openMeteoWeather/weather.model'
import { API_WEATHER_URL } from '../config/constants'

export class OpenWeather implements WeatherDomain {
  async getWeatherByCoordinates(
    lat: number,
    lon: number
  ): Promise<WeatherModel> {
    const finalUrl = API_WEATHER_URL.replace(
      '{LAT}',
      lat.toString().replace(',', '.')
    ).replace('{LON}', lon.toString().replace(',', '.'))
    const response = await fetch(finalUrl)
    const data = (await response.json()) as OpenWeatherModel
    return this.parse(data)
  }

  private async parse(weather: OpenWeatherModel): Promise<WeatherModel> {
    const {
      daily: {
        temperature_2m_max: temperatureMaxDaily,
        temperature_2m_min: temperatureMinDaily,
        precipitation_sum: precipitationDaily,
        rain_sum: rainDaily,
        showers_sum: showersDaily,
        snowfall_sum: snowfallDaily,
        windspeed_10m_max: windspeedMaxDaily,
        windgusts_10m_max: windgustsMaxDaily,
        winddirection_10m_dominant: winddirectionDominantDaily,
        shortwave_radiation_sum: shortwaveRadiationSumDaily,
        ...restDaily
      },
      daily_units: {
        temperature_2m_max: temperatureMaxDailyUnits,
        temperature_2m_min: temperatureMinDailyUnits,
        precipitation_sum: precipitationDailyUnits,
        rain_sum: rainDailyUnits,
        showers_sum: showersDailyUnits,
        snowfall_sum: snowfallDailyUnits,
        windspeed_10m_max: windspeedMaxDailyUnits,
        windgusts_10m_max: windgustsMaxDailyUnits,
        winddirection_10m_dominant: winddirectionDominantDailyUnits,
        shortwave_radiation_sum: shortwaveRadiationSumDailyUnits,
        ...restDailyUnits
      },
      hourly: {
        temperature_2m: temperatureHourly,
        relativehumidity_2m: relativehumidityHourly,
        dewpoint_2m: dewpointHourly,
        preassure_msl: preassureMslHourly,
        windspeed_10m: windspeedHourly,
        winddirection_10m: winddirectionHourly,
        windgusts_10m: windgustsHourly,
        soil_temperature_0cm: soilTemperatureHourly,
        ...restHourly
      },
      hourly_units: {
        temperature_2m: temperatureHourlyUnits,
        relativehumidity_2m: relativehumidityHourlyUnits,
        dewpoint_2m: dewpointHourlyUnits,
        preassure_msl: preassureMslHourlyUnits,
        windspeed_10m: windspeedHourlyUnits,
        winddirection_10m: winddirectionHourlyUnits,
        windgusts_10m: windgustsHourlyUnits,
        soil_temperature_0cm: soilTemperatureHourlyUnits,
        ...restHourlyUnits
      },
    } = weather

    return {
      current_weather: {
        ...weather.current_weather,
      },
      daily: {
        ...restDaily,
        temperature_max: temperatureMaxDaily,
        temperature_min: temperatureMinDaily,
        precipitation: precipitationDaily,
        rain: rainDaily,
        showers: showersDaily,
        snowfall: snowfallDaily,
        windspeed_max: windspeedMaxDaily,
        windgusts_max: windgustsMaxDaily,
        winddirection_dominant: winddirectionDominantDaily,
        shortwave_radiation: shortwaveRadiationSumDaily,
      },
      daily_units: {
        ...restDailyUnits,
        temperature_max: temperatureMaxDailyUnits,
        temperature_min: temperatureMinDailyUnits,
        precipitation: precipitationDailyUnits,
        rain: rainDailyUnits,
        showers: showersDailyUnits,
        snowfall: snowfallDailyUnits,
        windspeed_max: windspeedMaxDailyUnits,
        windgusts_max: windgustsMaxDailyUnits,
        winddirection_dominant: winddirectionDominantDailyUnits,
        shortwave_radiation: shortwaveRadiationSumDailyUnits,
      },
      hourly: {
        ...restHourly,
        temperature: temperatureHourly,
        relativehumidity: relativehumidityHourly,
        dewpoint: dewpointHourly,
        preassure: preassureMslHourly,
        windspeed: windspeedHourly,
        winddirection: winddirectionHourly,
        windgusts: windgustsHourly,
        soil_temperature: soilTemperatureHourly,
      },
      hourly_units: {
        ...restHourlyUnits,
        temperature: temperatureHourlyUnits,
        relativehumidity: relativehumidityHourlyUnits,
        dewpoint: dewpointHourlyUnits,
        preassure: preassureMslHourlyUnits,
        windspeed: windspeedHourlyUnits,
        winddirection: winddirectionHourlyUnits,
        windgusts: windgustsHourlyUnits,
        soil_temperature: soilTemperatureHourlyUnits,
      },
    }
  }
}
