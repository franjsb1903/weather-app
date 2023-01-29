import { useState, useEffect } from 'react'
import { Input } from './Input'
import type { GeolocationModel } from '../models/geolocation.model'
import { geolocationService } from '../services/geolocation.service'

export const FindLocation = () => {
  const [location, setLocation] = useState('')
  const [data, setData] = useState<GeolocationModel[]>([])

  useEffect(() => {
    if (location) {
      geolocationService
        .geolocateByName(location)
        .then(data => {
          console.log(data)
          setData(data)
        })
        .catch(console.error)
    }
  }, [location])

  return (
    <Input
      setValue={setLocation}
      value={location}
      locations={
        data?.map(l => ({
          id: l.id,
          name: `${l.name}${l.admin1 ? `, ${l.admin1}` : ''}${
            l.admin2 ? `, ${l.admin2}` : ''
          }${l.admin3 ? `, ${l.admin3}` : ''}, ${l.country}`,
        })) ?? []
      }
    />
  )
}
