import * as calendarResolvers from './calendar'
import * as weatherResolvers from './weather'

export const resolvers = {
  ...weatherResolvers,
  ...calendarResolvers
}
