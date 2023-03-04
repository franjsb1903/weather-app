import { useStore } from '@nanostores/react'
import WeatherCardContainer from '../../containers/weather-card-container'
import { weatherOfLocation } from '../../stores/weather-store'
import { formatWeatherData } from '../../utils/weather-utils'
import PrecipitationIcon from '../../assets/images/icons/precipitation.svg'
import useIndexActualTime from '../../hooks/use-index-actual-time'

function PrecipitationCard() {
  const $weather = useStore(weatherOfLocation)
  const indexActualTime = useIndexActualTime()

  return (
    <WeatherCardContainer
      show={$weather?.hourly !== undefined}
      title="Precipitaciones"
      icon={PrecipitationIcon}
      altIcon="Precipitation Icon"
    >
      <p className="text-white text-xl">
        Precipitaciones de{' '}
        {formatWeatherData(
          $weather?.hourly.precipitation[indexActualTime] ?? 0,
          $weather?.hourly_units.precipitation ?? '',
          true
        )}{' '}
        en las últimas horas
      </p>
    </WeatherCardContainer>
  )
}

export default PrecipitationCard
