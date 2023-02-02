import { createContext, useState, ReactElement } from 'react'
import type { GeolocationModel } from '../models/geolocation.model'

type ContextT = {
  location: GeolocationModel | null
  setLocation: (location: GeolocationModel) => void
}

export const LocationContext = createContext({} as ContextT)

export const LocationProvider = ({ children }: { children: ReactElement }) => {
  const [location, setLocation] = useState<GeolocationModel | null>(null)

  return (
    <LocationContext.Provider
      value={{
        location,
        setLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  )
}
