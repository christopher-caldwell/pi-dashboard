import { google } from 'googleapis'
import addDays from 'date-fns/addDays'
import type { calendar_v3 } from 'googleapis/build/src/apis/calendar/v3'
import format from 'date-fns/format'
import isSameDay from 'date-fns/isSameDay'
import isToday from 'date-fns/isToday'
import { toDate } from 'date-fns-tz'

import { JwtClient } from '@/client'

const calendar = google.calendar('v3')
const numberOfCalendarDaysToShow = 3
const emailOfCalendarToAccess = process.env.EMAIL_OF_CALENDAR_TO_ACCESS || 'primary'

export const getCalendarEvents = async () => {
  const timeMax = addDays(new Date(), numberOfCalendarDaysToShow).toISOString()
  const events = await calendar.events.list({
    auth: JwtClient,
    calendarId: emailOfCalendarToAccess,
    timeMin: new Date().toISOString(),
    timeMax,
    singleEvents: true,
    orderBy: 'startTime'
  })
  return events.data.items || []
}

export interface CalendarDate {
  dateTime: string
  timeZone: string // 'America/Denver'
}

const fallbackTimeZone = 'America/Denver'
export const handleTimeZone = ({}: CalendarDate) => {}

export interface DayOfEvents {
  dayOfMonth: string
  dayOfWeek: string
  events: DisplayEvent[]
}

export interface DisplayEvent {
  time: string
  title: string
}

export const organizeEventsIntoDays = (events: calendar_v3.Schema$Event[]): DayOfEvents[] => {
  const datesToShowEvents: DayOfEvents[] = []
  for (let index = 0; index < numberOfCalendarDaysToShow; index++) {
    // Consider timezone
    const eventsForDay: DisplayEvent[] = []
    const date = addDays(new Date(), index)

    for (const event of events) {
      const startTime = event.start?.dateTime || event.start?.date
      if (!startTime) throw new Error('Event does not have a start time')
      const startTimeZone = event.start?.timeZone || fallbackTimeZone
      const dateOfEvent = toDate(startTime, { timeZone: startTimeZone })
      if (isSameDay(date, dateOfEvent)) {
        eventsForDay.push({
          time: format(dateOfEvent, 'h:mm aaa'),
          title: event.summary || ''
        })
      }
    }
    const dayOfMonth = format(date, 'd')
    const dayOfWeek = isToday(date) ? 'Today' : format(date, 'eeee')
    datesToShowEvents.push({ dayOfWeek, dayOfMonth, events: eventsForDay })
  }
  return datesToShowEvents
}
