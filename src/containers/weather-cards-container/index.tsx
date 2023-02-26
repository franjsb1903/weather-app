import type React from 'react'

interface IProps {
  children: React.ReactElement | React.ReactElement[]
}

function WeatherCardsContainer({ children }: IProps) {
  return <div className="grid grid-cols-2 gap-4 mt-10">{children}</div>
}

export default WeatherCardsContainer
