import { useStore } from '@nanostores/react'
import CardContainer from '../../containers/card-container'
import WeatherIcon from '../../components/icon/weather-icon'
import { translationCodeWeather } from '../../config/code-weather'
import { locationSelected } from '../../stores/location-store'
import { weatherOfLocation } from '../../stores/weather-store'
import { formatWeatherData } from '../../utils/weather-utils'

function CurrentWeather() {
  const $location = useStore(locationSelected)
  const $weather = useStore(weatherOfLocation)

  return $weather?.current_weather ? (
    <CardContainer col largeHeight className="mt-10 gap-3 p-5 rounded-t-md">
      <WeatherIcon
        alt="Weather Icon of the current weather"
        large
        code={$weather?.current_weather?.weathercode ?? 0}
      />
      <h2 className="text-xl md:text-3xl text-white">
        {$location?.name}, {$location?.country}
      </h2>
      <h4 className="text-3xl md:text-5xl font-sans text-white">
        {formatWeatherData(
          $weather?.current_weather?.temperature ?? 0,
          $weather?.hourly_units?.temperature ?? ''
        )}
      </h4>
      <p className="text-xl md:text-3xl text-white">
        {translationCodeWeather.get(
          $weather?.current_weather?.weathercode ?? 0
        )}
      </p>
      <div className="flex flex-row justify-evenly w-[80%]">
        <p className="text-lg text-white">
          Máx.{' '}
          {formatWeatherData(
            $weather?.daily?.temperature_max[0] ?? 0,
            $weather?.daily_units?.temperature_max ?? ''
          )}
        </p>
        <p className="text-lg text-white">
          Mín.{' '}
          {formatWeatherData(
            $weather?.daily?.temperature_min[0] ?? 0,
            $weather?.daily_units?.temperature_min ?? ''
          )}
        </p>
      </div>
    </CardContainer>
  ) : null
}

export default CurrentWeather
