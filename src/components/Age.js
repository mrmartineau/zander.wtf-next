import React, { Fragment, useState, useEffect, useRef } from 'react'
import {
  format,
  differenceInSeconds,
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from 'date-fns'
import formatNumber from 'format-number'

const Age = ({ dob }) => {
  const [counter, setCounter] = useState(30)
  const r = useRef(null)
  r.current = { counter, setCounter }
  let myReq

  const step = () => {
    r.current.setCounter(r.current.counter + 1)
    myReq = window.requestAnimationFrame(step)
  }

  useEffect(() => {
    step()
    return () => {
      window.requestAnimationFrame(myReq)
    }
  }, ['once'])

  var today = new Date()
  const hisDob = new Date(dob)

  const diffYears = differenceInYears(today, hisDob)
  const diffMonths = differenceInMonths(today, hisDob)
  const diffDays = differenceInDays(today, hisDob)
  const diffHours = differenceInHours(today, hisDob)
  const diffMins = differenceInMinutes(today, hisDob)
  const diffSecs = differenceInSeconds(today, hisDob)

  // Years + Months
  const years = `${diffYears} year${diffYears > 1 ? 's' : ''}`
  const monthsRemainder = diffMonths % 12
  const months = `${monthsRemainder} month${monthsRemainder > 1 ? `s` : ''}`
  const yearsMonths = `${years}${monthsRemainder > 1 ? `, ${months}` : ''}`

  // Weeks + days
  const weeksQuotient = Math.floor(diffDays / 7)
  const weeksRemainder = diffDays % 7
  const weeksAndDays = `${weeksQuotient} weeks${
    weeksRemainder > 1 ? `, ${weeksRemainder} days` : ''
  }`

  return (
    <Fragment>
      <p>Born on: {format(hisDob, 'PPPppp')}</p>
      <h3>
        <div>{yearsMonths}</div>
        <div>{formatNumber()(diffMonths)} months</div>
        <div>{weeksAndDays}</div>
        <div>{formatNumber()(diffDays)} days</div>
        <div>{formatNumber()(diffHours)} hours</div>
        <div>{formatNumber()(diffMins)} minutes</div>
        <div>{formatNumber()(diffSecs)} seconds</div>
      </h3>
    </Fragment>
  )
}

export default Age
