import { useState, useEffect, useContext } from 'react'
import { Input } from './Input'
import { LocationContext } from '../context/LocationContext'
import type { GeolocationModel } from '../models/geolocation.model'
import { geolocationService } from '../services/geolocation.service'

export const FindLocation = () => {
  const [location, setLocation] = useState('')
  const [data, setData] = useState<GeolocationModel[]>([])

  const { setLocation: setLocationSelected } = useContext(LocationContext)

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

  return <Input setValue={setLocation} value={location} />
}
