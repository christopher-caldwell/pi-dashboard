import { FC } from 'react'
import { convertTimeToMs } from '@caldwell619/ms'
import { Box, Grid, Alert, LinearProgress } from '@mui/material'

import { useCalendarQuery } from '@/generated'
import { CalendarDate, CalendarEvent } from './components'

const Calendar: FC = () => {
  const { isLoading, error, data } = useCalendarQuery(undefined, { refetchInterval: convertTimeToMs('10m') })
  if (isLoading) return <LinearProgress />
  if (error) return <Alert severity='error'>Something went wrong</Alert>
  if (data === undefined) throw new Error('Yuck calendar')
  const calendarDays = data.calendar
  return (
    <Grid item xs={12}>
      <Box sx={{ display: 'flex' }}>
        {calendarDays.map(day => (
          <Box sx={{ marginRight: '3vw' }}>
            <CalendarDate key={day.dayOfMonth} {...day} />
            {day.events.map(event => (
              <CalendarEvent key={event.time} {...event} />
            ))}
          </Box>
        ))}
      </Box>
    </Grid>
  )
}

export default Calendar
