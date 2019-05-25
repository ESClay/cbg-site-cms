import React from 'react'
import PropTypes from 'prop-types'
import BackgroundImage from "gatsby-background-image";
import Img from 'gatsby-image'

const PreviewCompatibleBackgroundImage = ({ imageInfo }) => {
  const imageStyle = { borderRadius: '5px' }
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <BackgroundImage style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
    )
  }

  if (!!childImageSharp) {
    return <BackgroundImage style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === 'string')
    return <BackgroundImage style={imageStyle} src={image} alt={alt} />

  return null
}

PreviewCompatibleBackgroundImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleBackgroundImage
