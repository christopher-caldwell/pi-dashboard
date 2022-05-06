export const CalendarSchema = `#graphql
  type CalendarDay {
    dayOfMonth: String!
    dayOfWeek: String!
    events: [Event!]!
  }

  type Event {
    # Need end time
    time: String!
    title: String!
  }
`

export const CalendarQueries = `#graphql
calendar(startDate: String, endDate: String): [CalendarDay!]!
`
