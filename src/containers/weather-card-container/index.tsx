import type React from 'react'
import CardContainer from '../card-container'

interface IProps {
  children: React.ReactElement | React.ReactElement[]
  altIcon?: string
  icon?: string
  title?: string
  show?: boolean
}

function WeatherCardContainer({
  children,
  altIcon,
  icon,
  title,
  show,
}: IProps) {
  return (
    <CardContainer
      col
      nowrap
      altIcon={altIcon}
      icon={icon}
      title={title}
      show={show}
      className="min-h-[185px] max-h-[185px] md:min-h-[225px] md:max-h-[225px] gap-3 justify-between items-center p-3 rounded-md"
    >
      {children}
    </CardContainer>
  )
}

export default WeatherCardContainer
