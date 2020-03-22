// Dependency Imports
// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom'

function CustomLink (props) {
  return <Link to={props.url}>{props.children}</Link>
}

export default CustomLink
