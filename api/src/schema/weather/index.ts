export const WeatherSchema = `#graphql
  type Weather {
    temp: Float!
    high: Float!
    low: Float!
    city: String!
    description: String!
    iconUrl: String!
  }
`

export const WeatherQueries = `#graphql
weather: Weather!
`
