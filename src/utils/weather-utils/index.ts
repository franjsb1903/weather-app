import { format } from 'date-fns'

export function formatTemperature(temperature: number, unit: string) {
  return `${Math.round(temperature)}${unit}`
}

export function getActualTimeIndex(times: string[]) {
  const now = new Date()
  now.setMinutes(0)
  const actualTime = format(now.valueOf(), "yyyy-MM-dd'T'HH:mm")
  const index = times.findIndex(time => time === actualTime)
  return index === -1 ? 0 : index
}
