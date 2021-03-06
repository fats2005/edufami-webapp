import React from "react";

// import Achievements from "../common/Achievements/Achievements";
// import Box from "../common/Box/Box";

const layout = (props) => {
  const { children } = props;
  return (
    <div className="row">
      <div className="col-12 col-lg-9">{children}</div>
      <div className="col col-lg-3">
        {/* <Box label="Logros" backgroundColor="#7793a1" padding="0">
          <Achievements />
        </Box> */}
      </div>
    </div>
  );
};

export default layout;
