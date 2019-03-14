import React from "react";
import BoxMedals from "./boxMedals";
import BoxCertificates from "./boxCertificates";
import BoxProgress from "./boxProgress";

const BoxAchievements = ({ label }) => {
  return (
    <div className="box">
      <div className="box-title">
        <div className="box-title-background-2">
          <h4>Usuario</h4>
        </div>
      </div>
      <BoxMedals />
      <BoxCertificates />
      <BoxProgress />
    </div>
  );
};

export default BoxAchievements;
