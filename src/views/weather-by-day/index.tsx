import { useStore } from '@nanostores/react'
import { weatherOfLocation } from '../../stores/weather-store'
import CardContainer from '../../containers/card-container'
import WeatherIcon from '../../components/icon/weather-icon'
import { formatWeatherData } from '../../utils/weather-utils'
import { formatDate } from '../../utils/date-format-utils'

function WeatherByDay() {
  const $weather = useStore(weatherOfLocation)

  return (
    <CardContainer
      col
      nowrap
      show={$weather?.daily !== undefined}
      className="gap-2 p-2 pb-4 mt-0 rounded-b-md overflow-y-hidden"
    >
      <div className="flex flex-row gap-2 md:gap-5 overflow-x-scroll py-2 card-scroll">
        {$weather?.daily?.time.map((time, index) => {
          const weatherCode = $weather?.daily?.weathercode[index]
          const tempMin = $weather?.daily?.temperature_min[index]
          const tempMinUnit = $weather?.daily_units?.temperature_min
          const tempMax = $weather?.daily?.temperature_max[index]
          const tempMaxUnit = $weather?.daily_units?.temperature_max
          const date = formatDate(new Date(time), 'eee')
          const dateCapitalized = date.charAt(0).toUpperCase() + date.slice(1)
          return (
            <div
              key={`by-day-${time}`}
              className="
                flex 
                flex-col 
                justify-between
                items-center 
                min-w-[100px] 
                min-h-[100px] 
                cursor-pointer 
                rounded-md 
                bg-gray-100 
                bg-opacity-10
                hover:bg-opacity-30 
                transition-all 
                duration-300"
            >
              <p className="text-white font-bold text-xl text-start">
                {dateCapitalized}
              </p>
              <WeatherIcon
                alt={`Weather Icon of the weather at ${dateCapitalized}`}
                code={weatherCode}
              />
              <p className="text-white text-end">
                {formatWeatherData(tempMax, tempMaxUnit)} /{' '}
                {formatWeatherData(tempMin, tempMinUnit)}
              </p>
            </div>
          )
        })}
      </div>
    </CardContainer>
  )
}

export default WeatherByDay
