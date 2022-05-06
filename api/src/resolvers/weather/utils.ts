import axios from 'axios'

export const openWeatherApiKey = process.env.OPEN_WEATHER_API_KEY
if (openWeatherApiKey === undefined) throw new Error('Open weather key is not present in the ENV')
export const myLatitude = process.env.MY_WEATHER_LATITUDE
if (myLatitude === undefined) throw new Error('Latitude is not present in the ENV')
export const myLongitude = process.env.MY_WEATHER_LONGITUDE
if (myLongitude === undefined) throw new Error('Longitude is not present in the ENV')

/**
 * For temperature in Fahrenheit use units=imperial
 * For temperature in Celsius use units=metric
 * Temperature in Kelvin is used by default, no need to use units parameter in API call
 * @link https://openweathermap.org/current#data
 */
export const preferredUnit: 'standard' | 'metric' | 'imperial' = 'imperial'

// If you cannot get your lat and long, you can use this. Also, the Google Maps app will tell you if you have that installed.
export const getLatAndLongFromZip = (zip: string) => {
  axios.get('https://api.promaptools.com/service/us/zip-lat-lng/get', {
    params: {
      zip,
      // This key does not seem to be sensitive. It came straight from their site
      key: '17o8dysaCDrgv1c'
    }
  })
}

export interface ZipCodeToLatLongResponse {
  status: number
  output: [
    {
      zip: string
      latitude: string
      longitude: string
    }
  ]
}

export interface OpenWeatherResponse {
  coord: {
    lon: number
    lat: number
  }
  weather: {
    id: number
    main: string
    description: string
    icon: string
  }[]
  base: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  visibility: number
  wind: {
    speed: number
    deg: number
    gust: number
  }
  clouds: {
    all: number
  }
  dt: number
  sys: {
    type: number
    id: number
    country: string
    /** EPOCH timestamp */
    sunrise: number
    /** EPOCH timestamp */
    sunset: number
  }
  timezone: number
  id: number
  name: string
  cod: number
}
