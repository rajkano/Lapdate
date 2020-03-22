/* eslint-disable no-unused-vars */
import React from 'react'

const Image = props => {
  const { webp, jpg, png } = props.imageSet
  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <source srcSet={jpg} type="image/jpeg" />
      <img src={png} alt="Alt Text!" />
    </picture>
  )
}

export default Image
