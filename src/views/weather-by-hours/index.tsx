import { useStore } from '@nanostores/react'
import { format } from 'date-fns'
import { weatherOfLocation } from '../../stores/weather-store'
import { formatWeatherData } from '../../utils/weather-utils'
import WeatherIcon from '../../components/icon/weather-icon'
import CardContainer from '../../containers/card-container'
import hoursIcon from '../../assets/images/icons/hours.svg'
import { formatTime } from '../../utils/date-format-utils'
import useIndexActualTime from '../../hooks/use-index-actual-time'

function WeatherByHours() {
  const $weather = useStore(weatherOfLocation)

  const indexActualTime = useIndexActualTime()

  return $weather?.current_weather ? (
    <CardContainer
      altIcon="Hours"
      icon={hoursIcon}
      title="PRÓXIMAS 24 HORAS"
      className="mt-10 gap-2 p-2 pb-4 overflow-y-hidden rounded-md"
    >
      <div className="flex flex-row gap-4 overflow-x-scroll py-2 card-scroll">
        {$weather?.hourly?.time
          .slice(indexActualTime, indexActualTime + 24)
          .map((time, index) => (
            <div
              key={time}
              className="flex flex-col justify-between items-center"
            >
              <p className="text-lg text-white">
                {index === 0 ? 'Ahora' : formatTime(new Date(time))}
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
                {formatWeatherData(
                  $weather?.hourly?.temperature[index + indexActualTime],
                  $weather?.hourly_units?.temperature ?? ''
                )}
              </p>
            </div>
          ))}
      </div>
    </CardContainer>
  ) : null
}

export default WeatherByHours
