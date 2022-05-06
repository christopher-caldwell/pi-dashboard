export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type EntireFieldWrapper<T> = T | (() => T | Promise<T>) | Promise<T> | Promise<import('./helpers').Unpacked<T>>[];
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
  dayOfMonth: EntireFieldWrapper<Scalars['String']>;
  dayOfWeek: EntireFieldWrapper<Scalars['String']>;
  events: EntireFieldWrapper<Array<Event>>;
};

export type Event = {
  time: EntireFieldWrapper<Scalars['String']>;
  title: EntireFieldWrapper<Scalars['String']>;
};

export type Query = {
  calendar: EntireFieldWrapper<Array<CalendarDay>>;
  weather: EntireFieldWrapper<Weather>;
};


export type QueryCalendarArgs = {
  endDate?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['String']>;
};

export enum SortDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Weather = {
  city: EntireFieldWrapper<Scalars['String']>;
  description: EntireFieldWrapper<Scalars['String']>;
  high: EntireFieldWrapper<Scalars['Float']>;
  iconUrl: EntireFieldWrapper<Scalars['String']>;
  low: EntireFieldWrapper<Scalars['Float']>;
  temp: EntireFieldWrapper<Scalars['Float']>;
};
