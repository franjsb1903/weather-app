import { useStore } from '@nanostores/react'
import useIndexActualTime from '../../hooks/use-index-actual-time'
import WeatherCardContainer from '../../containers/weather-card-container'
import { weatherOfLocation } from '../../stores/weather-store'
import { formatWeatherData } from '../../utils/weather-utils'
import SoilTemperatureIcon from '../../assets/images/icons/temperature.svg'

function SoilTemperatureCard() {
  const $weather = useStore(weatherOfLocation)
  const indexActualTime = useIndexActualTime()

  return $weather?.hourly ? (
    <WeatherCardContainer
      title="Temperatura suelo"
      icon={SoilTemperatureIcon}
      altIcon="Soil Temperature Icon"
    >
      <p className="text-white text-4xl">
        {formatWeatherData(
          $weather?.hourly.soil_temperature[indexActualTime] ?? 0,
          $weather?.hourly_units.soil_temperature ?? '',
          true
        )}
      </p>
    </WeatherCardContainer>
  ) : null
}

export default SoilTemperatureCard
