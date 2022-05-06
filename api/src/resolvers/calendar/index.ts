import { Resolver, CalendarDay, QueryCalendarArgs } from '@/interfaces'
import { getCalendarEvents, organizeEventsIntoDays } from './utils'

export const calendar: Resolver<CalendarDay[], QueryCalendarArgs> = async () => {
  const events = await getCalendarEvents()
  return organizeEventsIntoDays(events)
}
