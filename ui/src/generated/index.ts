import { useQuery, UseQueryOptions } from 'react-query';
import { runQuery } from '@/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: Date;
};

export type CalendarDay = {
  dayOfMonth: Scalars['String'];
  dayOfWeek: Scalars['String'];
  events: Array<Event>;
};


export type Event = {
  time: Scalars['String'];
  title: Scalars['String'];
};

export type Query = {
  weather: Weather;
  calendar: Array<CalendarDay>;
};


export type QueryCalendarArgs = {
  startDate?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
};

export enum SortDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Weather = {
  temp: Scalars['Float'];
  high: Scalars['Float'];
  low: Scalars['Float'];
  city: Scalars['String'];
  description: Scalars['String'];
  iconUrl: Scalars['String'];
};

export type CalendarQueryVariables = Exact<{ [key: string]: never; }>;


export type CalendarQuery = { calendar: Array<(
    Pick<CalendarDay, 'dayOfMonth' | 'dayOfWeek'>
    & { events: Array<Pick<Event, 'time' | 'title'>> }
  )> };

export type WeatherQueryVariables = Exact<{ [key: string]: never; }>;


export type WeatherQuery = { weather: Pick<Weather, 'temp' | 'high' | 'low' | 'city' | 'description' | 'iconUrl'> };


export const CalendarDocument = `
    query Calendar {
  calendar {
    dayOfMonth
    dayOfWeek
    events {
      time
      title
    }
  }
}
    `;
export const useCalendarQuery = <
      TData = CalendarQuery,
      TError = unknown
    >(
      variables?: CalendarQueryVariables, 
      options?: UseQueryOptions<CalendarQuery, TError, TData>
    ) => 
    useQuery<CalendarQuery, TError, TData>(
      ['Calendar', variables],
      runQuery<CalendarQuery, CalendarQueryVariables>(CalendarDocument, variables),
      options
    );
useCalendarQuery.getKey = (variables?: CalendarQueryVariables) => ['Calendar', variables];

export const WeatherDocument = `
    query Weather {
  weather {
    temp
    high
    low
    city
    description
    iconUrl
  }
}
    `;
export const useWeatherQuery = <
      TData = WeatherQuery,
      TError = unknown
    >(
      variables?: WeatherQueryVariables, 
      options?: UseQueryOptions<WeatherQuery, TError, TData>
    ) => 
    useQuery<WeatherQuery, TError, TData>(
      ['Weather', variables],
      runQuery<WeatherQuery, WeatherQueryVariables>(WeatherDocument, variables),
      options
    );
useWeatherQuery.getKey = (variables?: WeatherQueryVariables) => ['Weather', variables];
