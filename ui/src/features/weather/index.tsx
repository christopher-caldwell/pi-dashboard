import { FC } from 'react'
import { convertTimeToMs } from '@caldwell619/ms'

import { useWeatherQuery } from '@/generated'
import { Alert, Grid, LinearProgress, Typography } from '@mui/material'

const Weather: FC = () => {
  const { data, isLoading, error } = useWeatherQuery(undefined, { refetchInterval: convertTimeToMs('10m') })

  if (isLoading) return <LinearProgress />
  if (error) return <Alert severity='error'>Something went wrong</Alert>
  if (data === undefined) throw new Error('Yuck')

  const { temp, high, low, city, description, iconUrl } = data.weather

  return (
    <>
      <Grid item xs={7}>
        <Typography variant='h5'>{city}</Typography>
        <Typography variant='h1'>{Math.floor(temp)}&deg;</Typography>
      </Grid>
      <Grid item xs={5}>
        <Typography variant='h5'>{splitAndCap(description)}</Typography>
        <img src={iconUrl} alt='Weather icon' />
      </Grid>
      <Grid item xs={12} container sx={{ alignContent: 'flex-start', display: 'flex' }}>
        <Grid item xs={3}>
          <Typography>High: {Math.floor(high)}&deg;</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>Low: {Math.floor(low)}&deg;</Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default Weather

const capitalize = (word: string) => {
  return word.charAt(0).toLocaleUpperCase() + word.slice(1)
}

const splitAndCap = (sentence: string) => {
  const words = sentence.split(' ')
  const reconstructedSentence = words.reduce((total, current) => `${total} ${capitalize(current)}`, '')
  return reconstructedSentence
}
