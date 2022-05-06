import axios from 'axios'
import { Resolver, Weather } from '@/interfaces'

// import type { Resolver } from '@/interfaces'
import { OpenWeatherResponse, myLatitude, myLongitude, openWeatherApiKey, preferredUnit } from './utils'

export const weather: Resolver<Weather> = async () => {
  const { data } = await axios.get<OpenWeatherResponse>('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      lat: myLatitude,
      lon: myLongitude,
      appid: openWeatherApiKey,
      units: preferredUnit
    }
  })
  return {
    temp: data.main.temp,
    high: data.main.temp_max,
    low: data.main.temp_min,
    city: data.name,
    description: data.weather[0].description,
    iconUrl: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  }
}
