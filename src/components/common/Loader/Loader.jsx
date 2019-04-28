import React from "react";
import Loader from "react-loader-spinner";

import classes from "./Loader.module.scss";

const loader = props => {
  if (props.show)
    return (
      <div className={classes.Full}>
        <Loader type="Oval" color="#ff9800" height="50" width="50" />
      </div>
    );
  return null;
};

export default loader;
