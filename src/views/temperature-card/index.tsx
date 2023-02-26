import { useStore } from '@nanostores/react'
import WeatherCardContainer from '../../containers/weather-card-container'
import useIndexActualTime from '../../hooks/use-index-actual-time'
import { weatherOfLocation } from '../../stores/weather-store'
import TemperatureIcon from '../../assets/images/icons/temperature.svg'
import { formatTemperature } from '../../utils/weather-utils'

function TemperatureCard() {
  const $weather = useStore(weatherOfLocation)

  const indexActualTime = useIndexActualTime()

  return (
    <WeatherCardContainer
      show={$weather?.hourly !== undefined}
      title="Sensación"
      icon={TemperatureIcon}
      altIcon="Temperature Icon"
    >
      <p className="text-white text-4xl">
        {formatTemperature(
          $weather?.hourly.apparent_temperature[indexActualTime] ?? 0,
          $weather?.hourly_units.apparent_temperature ?? ''
        )}
      </p>
      <section className="flex flex-row gap-5">
        <p className="text-white text-xs md:text-sm">
          Máx.{' '}
          {formatTemperature(
            $weather?.daily.apparent_temperature_max[0] ?? 0,
            $weather?.daily_units.apparent_temperature_max ?? ''
          )}
        </p>
        <p className="text-white text-xs md:text-sm">
          Mín.{' '}
          {formatTemperature(
            $weather?.daily.apparent_temperature_min[0] ?? 0,
            $weather?.daily_units.apparent_temperature_min ?? ''
          )}
        </p>
      </section>
    </WeatherCardContainer>
  )
}

export default TemperatureCard
