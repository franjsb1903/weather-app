import { useStore } from '@nanostores/react'
import { useEffect } from 'react'
import { locationSelected } from '../stores/locationStore'

export const WeatherInfo = () => {
  const $locationSelected = useStore(locationSelected)

  useEffect(() => {
    console.log($locationSelected)
  }, [$locationSelected])

  return $locationSelected ? (
    <h1 className="text-3xl white">Hay datos de {$locationSelected.name}</h1>
  ) : (
    <h1 className="text-3xl white">No hay datos</h1>
  )
}
