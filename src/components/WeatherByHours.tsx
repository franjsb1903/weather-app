import { useMemo } from 'react'
import { useStore } from '@nanostores/react'
import { format } from 'date-fns'
import { weatherOfLocation } from '../stores/weatherStore'
import { formatTemperature, getActualTimeIndex } from '../utils/weather'
import WeatherIcon from './WeatherIcon'
import CardContainer from './CardContainer'
import hoursIcon from '../assets/images/icons/hours.svg'

function WeatherByHours() {
  const $weather = useStore(weatherOfLocation)

  const indexActualTime = useMemo(() => {
    return getActualTimeIndex($weather?.hourly?.time ?? [])
  }, [$weather?.hourly?.time])

  return (
    <CardContainer
      col
      nowrap
      show={$weather?.current_weather !== undefined}
      additionalClasses={['gap-2 p-2 pb-4 overflow-y-hidden']}
    >
      <div className="flex gap-3 items-center w-full py-3 border-b-[1px] border-gray-400 border-opacity-70">
        <img
          src={hoursIcon}
          alt="hours"
          width="30px"
          height="30px"
          className="opacity-50"
        />
        <h6 className="text-gray-400 opacity-70 text-sm">PRÓXIMAS 24 HORAS</h6>
      </div>
      <div className="flex flex-row gap-2 overflow-x-scroll py-2 card-scroll">
        {$weather?.hourly?.time
          .slice(indexActualTime, indexActualTime + 24)
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
                code={
                  $weather?.hourly?.weathercode[index + indexActualTime] ?? 0
                }
              />
              <p className="text-lg text-white">
                {formatTemperature(
                  $weather?.hourly?.temperature[index + indexActualTime],
                  $weather?.hourly_units?.temperature ?? ''
                )}
              </p>
            </div>
          ))}
      </div>
    </CardContainer>
  )
}

export default WeatherByHours
