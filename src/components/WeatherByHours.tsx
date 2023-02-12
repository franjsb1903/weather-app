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
      gap={2}
      show={$weather?.current_weather !== undefined}
      maxWidth="500px"
      height="150px"
      overflowY="hidden"
      overflowX="scroll"
      additionalClasses={['search-scroll']}
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
                $weather?.hourly?.temperature_2m[index + indexActualTime],
                $weather?.hourly_units?.temperature_2m ?? ''
              )}
            </p>
          </div>
        ))}
    </CardContainer>
  )
}

export default WeatherByHours
