import { buildSchema } from 'graphql'

import { DateScalar } from '@/schema/date'

const stitchSchema = (...schemas: string[]): string => {
  return schemas.reduce((accumulator, currentValue) => accumulator + '\n' + currentValue, '')
}

const schemas = stitchSchema(
  'scalar Date',
  `enum SortDirection {
  asc
  desc
}`
)

const queries = `#graphql
  type Query {
    ${stitchSchema()}
  }
`

export const schema = buildSchema(stitchSchema(schemas, queries))

Object.assign(schema.getTypeMap().Date, DateScalar)

export * from '../resolvers'
