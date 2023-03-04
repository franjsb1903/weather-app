import { useStore } from '@nanostores/react'
import WeatherCardContainer from '../../containers/weather-card-container'
import { weatherOfLocation } from '../../stores/weather-store'
import TemperatureIcon from '../../assets/images/icons/temperature.svg'
import { formatWeatherData } from '../../utils/weather-utils'
import useIndexActualTime from '../../hooks/use-index-actual-time'

function TemperatureCard() {
  const $weather = useStore(weatherOfLocation)
  const indexActualTime = useIndexActualTime()

  return $weather?.hourly ? (
    <WeatherCardContainer
      between
      title="Sensación"
      icon={TemperatureIcon}
      altIcon="Temperature Icon"
    >
      <p className="text-white text-4xl">
        {formatWeatherData(
          $weather?.hourly.apparent_temperature[indexActualTime] ?? 0,
          $weather?.hourly_units.apparent_temperature ?? ''
        )}
      </p>
      <section className="flex flex-row gap-5">
        <p className="text-white text-xs">
          Máx.{' '}
          {formatWeatherData(
            $weather?.daily.apparent_temperature_max[0] ?? 0,
            $weather?.daily_units.apparent_temperature_max ?? ''
          )}
        </p>
        <p className="text-white text-xs">
          Mín.{' '}
          {formatWeatherData(
            $weather?.daily.apparent_temperature_min[0] ?? 0,
            $weather?.daily_units.apparent_temperature_min ?? ''
          )}
        </p>
      </section>
    </WeatherCardContainer>
  ) : null
}

export default TemperatureCard
