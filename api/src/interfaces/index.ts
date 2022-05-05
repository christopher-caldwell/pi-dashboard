import { Key } from 'node-cache'

export type Resolver<ReturnType, Variables = Record<string, string>> = (variables: Variables) => Promise<ReturnType>
export type IdOverride<T> = T & { id: Key }

export * from './generated'
