import { graphqlHTTP } from 'express-graphql'
import express from 'express'
import cors from 'cors'

import { schema, resolvers } from '@/schema'

const app = express()
app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: resolvers
  })
)

app.listen(5001, () => {
  console.log('🚀 Skynet is active')
})
