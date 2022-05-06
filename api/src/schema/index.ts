import { buildSchema } from 'graphql'

import { DateScalar } from './date'
import { WeatherSchema, WeatherQueries } from './weather'
import { CalendarSchema, CalendarQueries } from './calendar'

const stitchSchema = (...schemas: string[]): string => {
  return schemas.reduce((accumulator, currentValue) => accumulator + '\n' + currentValue, '')
}

const schemas = stitchSchema(
  'scalar Date',
  `enum SortDirection {
  asc
  desc
}`,
  WeatherSchema,
  CalendarSchema
)

const queries = `#graphql
  type Query {
    ${stitchSchema(WeatherQueries, CalendarQueries)}
  }
`

export const schema = buildSchema(stitchSchema(schemas, queries))

Object.assign(schema.getTypeMap().Date, DateScalar)

export * from '../resolvers'
