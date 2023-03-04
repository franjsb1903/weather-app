import { useStore } from '@nanostores/react'
import useIndexActualTime from '../../hooks/use-index-actual-time'
import WeatherCardContainer from '../../containers/weather-card-container'
import { weatherOfLocation } from '../../stores/weather-store'
import { formatWeatherData } from '../../utils/weather-utils'
import PressureIcon from '../../assets/images/icons/pressure.svg'

function PressureCard() {
  const $weather = useStore(weatherOfLocation)
  const indexActualTime = useIndexActualTime()

  return $weather?.hourly ? (
    <WeatherCardContainer
      between
      title="Presión"
      icon={PressureIcon}
      altIcon="Pressure Icon"
    >
      <p className="text-white text-2xl md:text-4xl">
        {formatWeatherData(
          $weather?.hourly.pressure[indexActualTime] ?? 0,
          $weather?.hourly_units.pressure ?? '',
          true
        )}
      </p>
      <p className="text-white text-xs">
        En tierra{' '}
        {formatWeatherData(
          $weather?.hourly.surface_pressure[indexActualTime] ?? 0,
          $weather?.hourly_units.surface_pressure ?? '',
          true
        )}
      </p>
    </WeatherCardContainer>
  ) : null
}

export default PressureCard
