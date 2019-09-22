import React from "react";

const Language = () => {
  return (
    <div className="nav-item dropdown">
      <button
        className="nav-link btn btn-link dropdown-toggle"
        id="languageDropdown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        type="button"
      >
        <img src="/images/flags/es.svg" width="20" alt="" /> ES (Español)
      </button>
      <div className="dropdown-menu dropdown-menu-lg-right" aria-labelledby="languageDropdown">
        <button className="dropdown-item" type="button">
          <img src="/images/flags/en.svg" width="20" alt="" /> EN (English)
        </button>
        <button className="dropdown-item" type="button">
          <img src="/images/flags/fr.svg" width="20" alt="" /> FR (Français)
        </button>
      </div>
    </div>
  );
};

export default Language;
