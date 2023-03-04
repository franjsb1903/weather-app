import { useMemo } from 'react'
import { useStore } from '@nanostores/react'
import { weatherOfLocation } from '../stores/weather-store'
import { locationSelected } from '../stores/location-store'
import { getActualTimeIndex } from '../utils/weather-utils'

function useIndexActualTime() {
  const $location = useStore(locationSelected)
  const $weather = useStore(weatherOfLocation)

  const indexActualTime: number = useMemo(() => {
    return getActualTimeIndex(
      $weather?.hourly?.time ?? [],
      $location?.timezone ?? 'Europe/Madrid'
    )
  }, [$weather?.hourly?.time])

  return indexActualTime
}

export default useIndexActualTime
