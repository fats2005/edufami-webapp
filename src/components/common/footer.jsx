import React from "react";

const Footer = ({ show }) => {
  return (
    <React.Fragment>
      {show && (
        <footer>
          <img src={"/images/wfp_blue.png"} alt="Wfp Logo" />
        </footer>
      )}
    </React.Fragment>
  );
};

export default Footer;
