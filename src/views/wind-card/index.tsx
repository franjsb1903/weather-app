import { useStore } from '@nanostores/react'
import { weatherOfLocation } from '../../stores/weather-store'
import WeatherCardContainer from '../../containers/weather-card-container'
import useIndexActualTime from '../../hooks/use-index-actual-time'
import { formatWindSpeed, getRotationClass } from '../../utils/weather-utils'
import WindArrow from '../../assets/images/weatherIcons/wind-arrow.svg'
import WindIcon from '../../assets/images/icons/wind.svg'

function WindCard() {
  const $weather = useStore(weatherOfLocation)

  const indexActualTime = useIndexActualTime()

  return (
    <WeatherCardContainer
      show={$weather?.hourly !== undefined}
      title="Viento"
      icon={WindIcon}
      altIcon="Wind Icon"
    >
      <img
        src={WindArrow}
        className={`w-[50px] h-[50px] md:w-[65px] md:h-[65px] ${getRotationClass(
          $weather?.hourly.winddirection[indexActualTime]
        )}`}
      />
      <p className="text-white text-lg md:text-xl">
        {formatWindSpeed(
          $weather?.hourly.windspeed[indexActualTime] ?? 0,
          $weather?.hourly_units?.windspeed ?? ''
        )}
      </p>
      <p className="text-white text-xs">
        Ráfagas de{' '}
        {formatWindSpeed(
          $weather?.hourly.windgusts[indexActualTime] ?? 0,
          $weather?.hourly_units.windgusts ?? ''
        )}
      </p>
    </WeatherCardContainer>
  )
}

export default WindCard
