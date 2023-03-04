import type React from 'react'
import CardContainer from '../card-container'

interface IProps {
  children: React.ReactElement | React.ReactElement[]
  className?: string
  altIcon?: string
  icon?: string
  title?: string
  between?: boolean
}

function WeatherCardContainer({
  children,
  className,
  altIcon,
  icon,
  title,
  between,
}: IProps) {
  return (
    <CardContainer
      col
      between={between}
      altIcon={altIcon}
      icon={icon}
      title={title}
      className={'gap-3 p-3 rounded-md '.concat(className ?? '')}
    >
      {children}
    </CardContainer>
  )
}

export default WeatherCardContainer
