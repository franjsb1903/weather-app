import { useStore } from '@nanostores/react'
import { format } from 'date-fns'
import { weatherOfLocation } from '../stores/weatherStore'
import CardContainer from './CardContainer'
import CalendarIcon from '../assets/images/icons/calendar.svg'
import WeatherIcon from './WeatherIcon'
import { formatTemperature } from '../utils/weather'

function WeatherByDay() {
  const $weather = useStore(weatherOfLocation)

  return (
    <CardContainer
      col
      altIcon="Calendar"
      icon={CalendarIcon}
      nowrap
      show={$weather?.daily !== undefined}
      title="PREVISIÓN PRÓXIMOS 7 DÍAS"
      additionalClasses={['gap-2 p-2 pb-4']}
    >
      <>
        {$weather?.daily?.time.map((time, index) => {
          const weatherCode = $weather?.daily?.weathercode[index]
          const tempMin = $weather?.daily?.temperature_min[index]
          const tempMinUnit = $weather?.daily_units?.temperature_min
          const tempMax = $weather?.daily?.temperature_max[index]
          const tempMaxUnit = $weather?.daily_units?.temperature_max
          return (
            <div
              key={`by-day-${time}`}
              className="grid grid-cols-3 place-items-center py-2 border-b-[1px] border-gray-400 border-opacity-70"
            >
              <p className="text-white font-bold text-xl text-start">
                {format(new Date(time), 'eee')}
              </p>
              <WeatherIcon
                alt={`Weather Icon of the weather at ${format(
                  new Date(time),
                  'eee'
                )}`}
                code={weatherCode}
              />
              <p className="text-white text-end">
                {formatTemperature(tempMin, tempMinUnit)} /{' '}
                {formatTemperature(tempMax, tempMaxUnit)}
              </p>
            </div>
          )
        })}
      </>
    </CardContainer>
  )
}

export default WeatherByDay
