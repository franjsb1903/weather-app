import { useMemo } from 'react'
import { useStore } from '@nanostores/react'
import { format } from 'date-fns'
import { weatherOfLocation } from '../stores/weatherStore'
import { formatTemperature, getActualTimeIndex } from '../utils/weather'
import WeatherIcon from './WeatherIcon'
import CardContainer from './CardContainer'

function WeatherByHours() {
  const $weather = useStore(weatherOfLocation)

  const indexActualTime = useMemo(() => {
    return getActualTimeIndex($weather?.hourly?.time ?? [])
  }, [$weather?.hourly?.time])

  return (
    <CardContainer
      nowrap
      show={$weather?.current_weather !== undefined}
      additionalClasses={[
        'search-scroll gap-2 h-[150px] overflow-x-scroll overflow-y-hidden',
      ]}
    >
      {$weather?.hourly?.time
        .slice(indexActualTime, indexActualTime + 20)
        .map((time, index) => (
          <div
            key={time}
            className="flex flex-col justify-between items-center"
          >
            <p className="text-lg text-white">
              {format(new Date(time), 'HH:mm')}
            </p>
            <WeatherIcon
              alt={`Weather Icon of the weather at ${format(
                new Date(time),
                'HH:mm'
              )}`}
              code={$weather?.hourly?.weathercode[index + indexActualTime] ?? 0}
            />
            <p className="text-lg text-white">
              {formatTemperature(
                $weather?.hourly?.temperature[index + indexActualTime],
                $weather?.hourly_units?.temperature ?? ''
              )}
            </p>
          </div>
        ))}
    </CardContainer>
  )
}

export default WeatherByHours
