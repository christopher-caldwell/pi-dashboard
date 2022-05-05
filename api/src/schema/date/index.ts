import { GraphQLScalarType } from 'graphql'

export const DateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  // value from the client
  parseValue(value) {
    console.log('parsing date')
    return new Date(value)
  },
  // value sent to the client
  serialize(value: Date) {
    console.log('serializing date')
    return value.toTimeString()
  },
  parseLiteral(node) {
    console.log('literal', node)
    return 'date'
  }
})
