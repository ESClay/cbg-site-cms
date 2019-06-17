/* eslint-disable react/jsx-filename-extension */
import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return <IndexPageTemplate />;
  }
  return <div>Loading...</div>;
};

IndexPagePreview.propTypes = {
  // eslint-disable-next-line react/require-default-props
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  // eslint-disable-next-line react/require-default-props
  getAsset: PropTypes.func
};

export default IndexPagePreview;
