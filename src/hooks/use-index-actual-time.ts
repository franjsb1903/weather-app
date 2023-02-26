import { useMemo } from 'react'
import { useStore } from '@nanostores/react'
import { weatherOfLocation } from '../stores/weather-store'
import { getActualTimeIndex } from '../utils/weather-utils'

function useIndexActualTime() {
  const $weather = useStore(weatherOfLocation)

  const indexActualTime = useMemo(() => {
    return getActualTimeIndex($weather?.hourly?.time ?? [])
  }, [$weather?.hourly?.time])

  return indexActualTime
}

export default useIndexActualTime
