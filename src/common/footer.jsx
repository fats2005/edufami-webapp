import React from "react";

const Footer = ({ show }) => {
  return (
    <>
      {show && (
        <footer>
          <img src="/images/wfp_blue.png" alt="Wfp Logo" />
        </footer>
      )}
    </>
  );
};

export default Footer;
