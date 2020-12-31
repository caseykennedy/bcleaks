// Get Date and format

// ___________________________________________________________________

import * as React from 'react'

export const GetDate = () => {
  const d = new Date()
  const days = [
    'SUNDAY',
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY'
  ]
  const months = [
    'JANUARY',
    'FEBRUARY',
    'MARCH',
    'APRIL',
    'MAY',
    'JUNE',
    'JULY',
    'AUGUST',
    'SEPTEMBER',
    'OCTOBER',
    'NOVEMBER',
    'DECEMBER'
  ]
  return (
    <>
      {days[d.getDay()]}, {months[d.getMonth()]} {d.getDate()},{' '}
      {d.getFullYear()}
    </>
  )
}

export default GetDate
