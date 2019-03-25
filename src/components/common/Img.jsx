import React from "react";

import { imagesUrl } from "../../config.json";

const Img = ({ srcName, alt, ...rest }) => {
  return <img src={imagesUrl + srcName} alt={alt} {...rest} />;
};

export default Img;
