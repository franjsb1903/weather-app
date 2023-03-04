import { useStore } from '@nanostores/react'
import WeatherCardContainer from '../../containers/weather-card-container'
import { weatherOfLocation } from '../../stores/weather-store'
import { isBeforeThanNow, formatTime } from '../../utils/date-format-utils'
import SunsetIcon from '../../assets/images/icons/sunset.svg'
import SunriseIcon from '../../assets/images/icons/sunrise.svg'

function SunriseSunsetCard() {
  const $weather = useStore(weatherOfLocation)

  const sunrise = $weather?.daily.sunrise[0] ?? ''
  const sunset = $weather?.daily.sunset[0] ?? ''

  const isSunrise = $weather && isBeforeThanNow(new Date(sunset))

  return $weather?.hourly ? (
    <WeatherCardContainer
      title={isSunrise ? 'Amanecer' : 'Atardecer'}
      icon={isSunrise ? SunriseIcon : SunsetIcon}
      altIcon={isSunrise ? 'Sunrise Icon' : 'Sunset Icon'}
    >
      <p className="text-white text-4xl">
        {formatTime(isSunrise ? new Date(sunrise) : new Date(sunset))}
      </p>
    </WeatherCardContainer>
  ) : null
}

export default SunriseSunsetCard
