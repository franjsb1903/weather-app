import { useStore } from '@nanostores/react'
import WeatherIcon from './WeatherIcon'
import { translationCodeWeather } from '../data/codeWeather'
import { locationSelected } from '../stores/locationStore'
import { weatherOfLocation } from '../stores/weatherStore'
import { formatTemperature } from '../utils/weather'
import CardContainer from './CardContainer'

function CurrentWeather() {
  const $location = useStore(locationSelected)
  const $weather = useStore(weatherOfLocation)

  return (
    <CardContainer
      col
      gap={3}
      show={$weather?.current_weather !== undefined}
      minHeight="350px"
      justify="start"
      items="center"
    >
      <WeatherIcon
        alt="Weather Icon of the current weather"
        large
        code={$weather?.current_weather?.weathercode ?? 0}
      />
      <h2 className="text-3xl md:text-3xl text-white">
        {$location?.name}, {$location?.country}
      </h2>
      <h4 className="text-5xl font-sans text-white">
        {formatTemperature(
          $weather?.current_weather?.temperature ?? 0,
          $weather?.hourly_units?.temperature_2m ?? ''
        )}
      </h4>
      <p className="text-3xl text-white">
        {translationCodeWeather.get(
          $weather?.current_weather?.weathercode ?? 0
        )}
      </p>
      <div className="flex flex-row justify-evenly w-[80%]">
        <p className="text-lg text-white">
          Máx.{' '}
          {formatTemperature(
            $weather?.daily?.temperature_2m_max[0] ?? 0,
            $weather?.daily_units?.temperature_2m_max ?? ''
          )}
        </p>
        <p className="text-lg text-white">
          Mín.{' '}
          {formatTemperature(
            $weather?.daily?.temperature_2m_min[0] ?? 0,
            $weather?.daily_units?.temperature_2m_min ?? ''
          )}
        </p>
      </div>
    </CardContainer>
  )
}

export default CurrentWeather
