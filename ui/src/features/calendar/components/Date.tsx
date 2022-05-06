import type { FC } from 'react'
import { Divider, Box, Typography } from '@mui/material'

import { CalendarQuery } from '@/generated'

export const CalendarDate: FC<Props> = ({ dayOfMonth, dayOfWeek }) => {
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <Typography variant='h4'>{dayOfMonth}</Typography>
        <Typography sx={{ marginLeft: '5px' }} variant='h5'>
          {dayOfWeek}
          <Divider sx={{ borderBottomWidth: 2 }} />
        </Typography>
      </Box>
    </>
  )
}

type Props = CalendarQuery['calendar'][number]
