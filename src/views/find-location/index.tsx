import { useState, useEffect } from 'react'
import Input from '../../components/input'
import { locationSelected } from '../../stores/location-store'
import { weatherOfLocation } from '../../stores/weather-store'
import { geolocationService } from '../../services/geolocation-service'
import { weatherService } from '../../services/weather-service'
import { getGeolocationFullName } from '../../utils/geolocation-utils'
import type { GeolocationModel } from '../../models/geolocation-model'

function FindLocation() {
  const [location, setLocation] = useState('')
  const [data, setData] = useState<GeolocationModel[]>([])

  useEffect(() => {
    if (location) {
      geolocationService
        .geolocateByName(location)
        .then(data => {
          setData(data)
        })
        .catch(console.error)
    } else {
      setData([])
    }
  }, [location])

  const onSelectLocation = (location: GeolocationModel) => {
    locationSelected.set(location)
    setData([])
    setLocation('')
    weatherService
      .getWeatherByCoordinates(location.latitude, location.longitude)
      .then(data => {
        weatherOfLocation.set(data ?? null)
      })
      .catch(console.error)
  }

  return (
    <>
      <Input setValue={setLocation} value={location} />
      <div className="mt-2 flex flex-col gap-0 w-full max-h-[300px] overflow-y-auto search-scroll">
        {data?.map(location => (
          <div
            key={location.id}
            className="bg-white border border-black rounded-md p-2"
            role="button"
            onClick={() => onSelectLocation(location)}
          >
            <p className="text-xl md:text-2xl text-black">
              {getGeolocationFullName(location)}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default FindLocation
