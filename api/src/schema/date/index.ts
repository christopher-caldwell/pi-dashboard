import { GraphQLScalarType } from 'graphql'

export const DateScalar = new GraphQLScalarType<Date, string>({
  name: 'Date',
  description: 'Date custom scalar type',
  // value from the client
  parseValue(value) {
    if (typeof value !== 'string') throw new Error('[DateScalar]: Cannot parse non string')
    return new Date(value as string)
  },
  // value sent to the client
  serialize(parseValue) {
    if (!(parseValue instanceof Date)) throw new Error('Not a Date')
    return parseValue.toTimeString()
  }
})
