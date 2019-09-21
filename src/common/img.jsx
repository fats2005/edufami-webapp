import React from "react";

import { imagesUrl } from "../config.json";

const Img = ({ src, alt, ...rest }) => {
  return <img src={imagesUrl + src} alt={alt} {...rest} />;
};

export default Img;
