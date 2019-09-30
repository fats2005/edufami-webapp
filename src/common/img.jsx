import React from "react";

import { imagesUrl } from "../config.json";

const Img = ({ src, alt }) => {
  return <img src={imagesUrl + src} alt={alt} />;
};

export default Img;
