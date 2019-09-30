import React from "react";

import { imagesUrl } from "../config.json";

const Img = ({ src, alt, className }) => {
  return <img src={imagesUrl + src} alt={alt} className={className} />;
};

export default Img;
