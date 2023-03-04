import { format } from 'date-fns'
import { formatByTimezone } from '../date-format-utils'

export function formatWeatherData(
  data: number,
  unit: string,
  hasSpace?: boolean
) {
  return `${Math.round(data)}${hasSpace ? ' ' : ''}${unit}`
}

export function getRotationClass(degrees: number | undefined) {
  const rotation = degrees ?? 0
  if (rotation > 0 && rotation <= 45) return 'rotate-[45deg]'
  if (rotation > 45 && rotation <= 90) return 'rotate-90'
  if (rotation > 90 && rotation <= 135) return 'rotate-[135deg]'
  if (rotation > 135 && rotation <= 180) return 'rotate-180'
  if (rotation > 180 && rotation <= 225) return 'rotate-[225deg]'
  if (rotation > 225 && rotation <= 270) return 'rotate-[270deg]'
  if (rotation > 270 && rotation <= 315) return 'rotate-[315deg]'
  if (rotation > 315 && rotation <= 360) return 'rotate-[360deg]'
  return 'rotate-0'
}

export function getActualTimeIndex(times: string[], timeZone: string) {
  const now = new Date()
  now.setMinutes(0)
  const actualTimeByZone = formatByTimezone(now, timeZone)
  const index = times.findIndex(time => {
    const dateTime = new Date(time)
    const stringDate = format(dateTime.valueOf(), 'd/M/yyyy, H:mm')
    return stringDate === actualTimeByZone
  })
  return index === -1 ? 0 : index
}
