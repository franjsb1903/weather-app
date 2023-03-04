import { weatherIcons } from '../../config/weather-icon'

interface WeatherIconProps {
  code: number
  alt: string
  large?: boolean
}

function WeatherIcon({ alt, large, code }: WeatherIconProps) {
  return (
    <img
      src={weatherIcons.get(code)}
      alt={alt}
      width={large ? '80px md:100px' : '30px md:50px'}
      height={large ? '80px md:100px' : '30px md:50px'}
    />
  )
}

export default WeatherIcon
