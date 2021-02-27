import React from "react";

import Popup from "reactjs-popup";

const TechNTool = ({ icon, color, name, description }) => {
  const popupButton = (
    <div className="tech-n-tools" style={{ color: color }}>
      <i>{icon}</i> <p>{name}</p>
    </div>
  );

  return (
    <Popup
      trigger={popupButton}
      position={"bottom center"}
      on={"hover"}
      arrow={"bottom center"}
    >
      <div className="tech-popup">
        <h1>{description}</h1>
      </div>
    </Popup>
  );
};

export default TechNTool;
