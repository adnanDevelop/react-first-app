import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorRouter = () => {
  return (
    <div>
      <h1>404 PAGE</h1>
      <p>Sorry the page you search no txist</p>
      <NavLink to='/'>Go Back</NavLink>
    </div>
  )
}

export default ErrorRouter
