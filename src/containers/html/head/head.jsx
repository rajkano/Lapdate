/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Helmet } from 'react-helmet'
import { APP_NAME, OG_IMAGE } from '../../../lib/config'

const ogImage = OG_IMAGE

const Head = props => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{props.title || APP_NAME}</title>
      <meta property="og:title" content={props.ogTitle || APP_NAME} />
      <meta
        property="og:description"
        content={props.ogDescription || APP_NAME}
      />
      <meta property="og:image" content={props.ogImage || ogImage} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
    </Helmet>
  )
}

export default Head
