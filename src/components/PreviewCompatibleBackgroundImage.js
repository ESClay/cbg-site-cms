/* eslint-disable react/jsx-filename-extension */
import React from "react";
import PropTypes from "prop-types";
import BackgroundImage from "gatsby-background-image";

const PreviewCompatibleBackgroundImage = ({ imageInfo }) => {
  const imageStyle = { borderRadius: "5px" };
  const { alt = "", childImageSharp, image } = imageInfo;
console.log("In a preview image..");
  if (!!image && !!image.childImageSharp) {
    if (!!image.childImageSharp.fluid) {
      console.log("First fluid return");
      return (
        <BackgroundImage
          style={imageStyle}
          fluid={image.childImageSharp.fluid}
          alt={alt}
        />
      );
    }
    if (!!image.childImageSharp.fixed) {
      console.log("First fixed return");
      return (
        <BackgroundImage
          style={imageStyle}
          fixed={image.childImageSharp.fixed}
          alt={alt}
        />
      );
    }
  }

  // eslint-disable-next-line no-extra-boolean-cast
  if (!!childImageSharp) {
    if (!!childImageSharp.fluid) {
      console.log("Second fluid return");
      return (
        <BackgroundImage
          style={imageStyle}
          fluid={childImageSharp.fluid}
          alt={alt}
        />
      );
    }
    if (!!childImageSharp.fixed) {
      console.log("Second fixed");
      return (
        <BackgroundImage
          style={imageStyle}
          fixed={childImageSharp.fixed}
          alt={alt}
        />
      );
    }
  }

  if (!!image && typeof image === "string") {
    console.log("In a standard image!");
    return <BackgroundImage style={imageStyle} src={image} alt={alt} />;
  }

    console.log("Null return :(");
  return null;
};

PreviewCompatibleBackgroundImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object
  }).isRequired
};

export default PreviewCompatibleBackgroundImage;
