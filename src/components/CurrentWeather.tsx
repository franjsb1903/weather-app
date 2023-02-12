import { useStore } from '@nanostores/react'
import { locationSelected } from '../stores/locationStore'
import { weatherOfLocation } from '../stores/weatherStore'
import WeatherIcon from './WeatherIcon'

function CurrentWeather() {
  const $location = useStore(locationSelected)
  const $weather = useStore(weatherOfLocation)

  return (
    <section
      className={`
        flex 
        flex-col 
        justify-start 
        items-center 
        gap-3
        bg-blue-500 
        bg-opacity-50 
        w-full 
        h-[400px] 
        rounded-md 
        mt-10 
        p-5 
        ${
          !$weather?.current_weather
            ? 'invisible opacity-0'
            : 'visible opacity-100'
        }
        transition-all
        duration-300
        ease-in
    `}
    >
      <WeatherIcon
        alt="Weather Icon of the current weather"
        large
        code={$weather?.current_weather?.weathercode ?? 0}
      />
      <h2 className="text-3xl text-white">{$location?.name}</h2>
      <h4 className="text-4xl text-white">
        {Math.round($weather?.current_weather?.temperature ?? 0)}{' '}
        {$weather?.hourly_units?.temperature_2m}
      </h4>
      <div className="flex flex-row justify-evenly">
        <p className="text-xl text-white">
          {$weather?.daily?.temperature_2m_min[0]}{' '}
          {$weather?.daily_units?.temperature_2m_min}
        </p>
        <p className="text-xl text-white">
          {$weather?.daily?.temperature_2m_max[0]}{' '}
          {$weather?.daily_units?.temperature_2m_max}
        </p>
      </div>
    </section>
  )
}

export default CurrentWeather
