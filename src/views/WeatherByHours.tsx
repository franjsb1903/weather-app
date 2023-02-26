import { useMemo } from 'react'
import { useStore } from '@nanostores/react'
import { format } from 'date-fns'
import { weatherOfLocation } from '../stores/weatherStore'
import { formatTemperature, getActualTimeIndex } from '../utils/weather'
import WeatherIcon from '../components/WeatherIcon'
import CardContainer from '../containers/CardContainer'
import hoursIcon from '../assets/images/icons/hours.svg'

function WeatherByHours() {
  const $weather = useStore(weatherOfLocation)

  const indexActualTime = useMemo(() => {
    return getActualTimeIndex($weather?.hourly?.time ?? [])
  }, [$weather?.hourly?.time])

  return (
    <CardContainer
      col
      altIcon="Hours"
      icon={hoursIcon}
      nowrap
      show={$weather?.current_weather !== undefined}
      title="PRÓXIMAS 24 HORAS"
      additionalClasses={['gap-2 p-2 pb-4 overflow-y-hidden']}
    >
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
