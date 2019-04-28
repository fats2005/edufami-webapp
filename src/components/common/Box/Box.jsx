import React from "react";
import classes from "./Box.module.scss";

const Box = props => {
  const { label, children, backgroundColor, padding } = props;
  return (
    <div className={classes.Box}>
      <div className={classes.Title} style={{ backgroundColor }}>
        <div className={classes.Background2}>
          <h4>{label}</h4>
        </div>
        <div className={classes.Body} style={{ padding }}>
          {children}
        </div>
      </div>
    </div>
  );
};

Box.defaultProps = {
  backgroundColor: "#fff"
};

export default Box;
