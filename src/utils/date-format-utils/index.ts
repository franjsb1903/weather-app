import { format, isToday } from 'date-fns'
import { es } from 'date-fns/locale'

export function formatDate(date: Date, formatString: string) {
  return isToday(date) ? 'Hoy' : format(date, formatString, { locale: es })
}

export function formatTime(time: Date) {
  return format(new Date(time), 'HH:mm', { locale: es })
}
