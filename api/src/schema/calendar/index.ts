export const CalendarSchema = `#graphql
  type CalendarDay {
    dayOfMonth: String!
    dayOfWeek: String!
    events: [Event!]!
  }

  type Event {
    time: String!
    title: String!
  }
`

export const CalendarQueries = `#graphql
calendar(startDate: String, endDate: String): [CalendarDay!]!
`
