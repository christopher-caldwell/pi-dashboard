import { FC } from 'react'
import { Grid } from '@mui/material'

import Time from '@/features/time'
import Weather from '@/features/weather'
import Calendar from '@/features/calendar'

const App: FC = () => {
  return (
    <Grid container spacing={3} sx={{ padding: '1vw', justifyContent: 'space-between' }}>
      <Grid item container xs={7}>
        <Calendar />
      </Grid>
      <Grid item container xs={4}>
        <Time />
      </Grid>
      <Grid item container xs={8}>
        <h1>To Buy List</h1>
      </Grid>
      <Grid item container xs={4}>
        <Weather />
      </Grid>
    </Grid>
  )
}

export default App
