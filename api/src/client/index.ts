import { google } from 'googleapis'
import adze from 'adze'

const email = process.env.CLIENT_EMAIL
const privateKey = process.env.CLIENT_PRIVATE_KEY

const logger = adze().label('Google auth')

if (!email || typeof email !== 'string')
  throw new Error(`CLIENT_EMAIL cannot be resolved. Expected string, got: ${email}`)
if (!privateKey || typeof privateKey !== 'string')
  throw new Error(`CLIENT_PRIVATE_KEY cannot be resolved. Expected string, got: ${privateKey}`)

export const JwtClient = new google.auth.JWT({
  email,
  key: privateKey.replace(/\\n/g, '\n'),
  scopes: ['https://www.googleapis.com/auth/calendar.readonly']
})

JwtClient.authorize(error => {
  if (error) {
    logger.error('Error authenticating with Google APIs', error)
  } else {
    logger.success('Successfully authenticated with Google')
  }
})
