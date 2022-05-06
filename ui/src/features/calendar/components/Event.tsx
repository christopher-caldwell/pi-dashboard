import type { FC } from 'react'
import { Box, Typography } from '@mui/material'

import { CalendarQuery } from '@/generated'

export const CalendarEvent: FC<Props> = ({ time, title }) => {
  return (
    <>
      <Box sx={{ borderLeft: '3px solid red', paddingLeft: '5px', marginBottom: '10px' }}>
        <Typography variant='body1'>{time}</Typography>
        <Typography variant='caption'>{title}</Typography>
      </Box>
    </>
  )
}

type Props = CalendarQuery['calendar'][number]['events'][number]
