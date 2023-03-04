import { useStore } from '@nanostores/react'
import WeatherCardContainer from '../../containers/weather-card-container'
import { weatherOfLocation } from '../../stores/weather-store'
import { formatWeatherData } from '../../utils/weather-utils'
import HumidityIcon from '../../assets/images/icons/humidity.svg'
import useIndexActualTime from '../../hooks/use-index-actual-time'

function HumidityCard() {
  const $weather = useStore(weatherOfLocation)
  const indexActualTime = useIndexActualTime()

  return (
    <WeatherCardContainer
      show={$weather?.hourly !== undefined}
      title="Humedad"
      icon={HumidityIcon}
      altIcon="Humidity Icon"
    >
      <p className="text-white text-4xl">
        {formatWeatherData(
          $weather?.hourly.relativehumidity[indexActualTime] ?? 0,
          $weather?.hourly_units.relativehumidity ?? ''
        )}
      </p>
      <p className="text-white text-xs">
        El punto de rocío es de{' '}
        {formatWeatherData(
          $weather?.hourly.dewpoint[indexActualTime] ?? 0,
          $weather?.hourly_units.dewpoint ?? ''
        )}{' '}
        en este momento
      </p>
    </WeatherCardContainer>
  )
}

export default HumidityCard
