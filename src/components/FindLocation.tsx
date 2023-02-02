import { useState, useEffect } from 'react'
import { locationSelected } from '../stores/locationStore'
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
    } else {
      setData([])
    }
  }, [location])

  return (
    <>
      <Input setValue={setLocation} value={location} />
      <div className="mt-2 flex flex-col gap-0 w-full">
        {data?.map(location => (
          <div
            key={location.id}
            className="bg-white border border-black rounded-md p-2"
            role="button"
            onClick={() => {
              locationSelected.set(location)
              setData([])
              setLocation('')
            }}
          >
            <p className="text-2xl text-black">
              {location.name}
              {location.admin1 ? `, ${location.admin1}` : ''}
              {location.admin2 ? `, ${location.admin2}` : ''}
              {location.admin3 ? `, ${location.admin3}` : ''},{' '}
              {location.country}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}
