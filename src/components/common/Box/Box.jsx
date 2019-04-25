import React from "react";
import classes from "./Box.module.scss";

const Box = props => {
  const { label, children } = props;
  return (
    <div className={classes.Box}>
      <div className={classes.Title} style={{ backgroundColor: "#ffffff" }}>
        <div className={classes.Background2}>
          <h4>{label}</h4>
        </div>
        <div className={classes.Body}>
          <div className="row">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Box;
