interface WeatherIconProps {
  code: number
  alt: string
  large?: boolean
}

function WeatherIcon({ alt, large, code }: WeatherIconProps) {
  return (
    <img
      src={`src/assets/images/${code}.svg`}
      alt={alt}
      width={large ? '100px' : '50px'}
      height={large ? '100px' : '50px'}
    />
  )
}

export default WeatherIcon
