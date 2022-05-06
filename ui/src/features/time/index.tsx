import { FC, useEffect, useState, useCallback } from 'react'
import format from 'date-fns/format'
import { Grid, Typography } from '@mui/material'

let interval: NodeJS.Timeout | undefined

const Time: FC = () => {
  const { time, ampPm } = useGetCurrentTime()

  return (
    <Grid
      item
      container
      xs={12}
      sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', marginBottom: '20vh' }}
    >
      <Typography variant='h1'>{time}</Typography>
      <Typography sx={{ marginLeft: ({ spacing }) => spacing(1), paddingBottom: '10px' }} variant='h3'>
        {ampPm}
      </Typography>
    </Grid>
  )
}

export default Time

/** Completely over engineered way of getting the current time, and only updating every 60 seconds */
const useGetCurrentTime = () => {
  const [time, setTime] = useState<DisplayTime>(getTime())

  const initInterval = useCallback((delay: number) => {
    if (interval) {
      clearInterval(interval)
      interval = undefined
    }
    interval = setInterval(() => {
      setTime(getTime())
    }, delay * 1000)
  }, [])

  useEffect(() => {
    initInterval(0)
  }, [initInterval])

  useEffect(() => {
    initInterval(determineTimeUntilNextUpdate())
  }, [time, initInterval])

  return time
}

const determineTimeUntilNextUpdate = () => {
  const now = new Date()
  const secondsUntilNextMinute = 60 - now.getSeconds()
  return secondsUntilNextMinute
}

interface DisplayTime {
  time: string
  ampPm: string
}

const getTime = (): DisplayTime => {
  const now = new Date()
  return {
    time: format(now, 'h:mm'),
    ampPm: format(now, 'aaa')
  }
}
