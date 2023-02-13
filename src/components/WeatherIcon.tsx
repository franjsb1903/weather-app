interface WeatherIconProps {
  code: number
  alt: string
  large?: boolean
}

function WeatherIcon({ alt, large, code }: WeatherIconProps) {
  return (
    <img
      src={`src/assets/images/weatherIcons/${code}.svg`}
      alt={alt}
      width={large ? '80px md:100px' : '30px md:50px'}
      height={large ? '80px md:100px' : '30px md:50px'}
    />
  )
}

export default WeatherIcon
