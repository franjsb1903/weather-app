import { useStore } from '@nanostores/react'
import useIndexActualTime from '../../hooks/use-index-actual-time'
import WeatherCardContainer from '../../containers/weather-card-container'
import { weatherOfLocation } from '../../stores/weather-store'
import { formatWeatherData } from '../../utils/weather-utils'
import CloudCoverIcon from '../../assets/images/icons/cloudcover.svg'

function CloudCoverCard() {
  const $weather = useStore(weatherOfLocation)
  const indexActualTime = useIndexActualTime()

  return $weather?.hourly ? (
    <WeatherCardContainer
      title="Nubes"
      icon={CloudCoverIcon}
      altIcon="Cloud Cover Icon"
    >
      <p className="text-white text-4xl">
        {formatWeatherData(
          $weather?.hourly.cloudcover[indexActualTime] ?? 0,
          $weather?.hourly_units.cloudcover ?? '',
          true
        )}
      </p>
    </WeatherCardContainer>
  ) : null
}

export default CloudCoverCard
