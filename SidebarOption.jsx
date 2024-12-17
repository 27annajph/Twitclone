import React from "react";
import "./SidebarOption.css";
function SidebarOption({ text, icon }) {
  return (
    <div className="sidebarOption">
      {icon}
      <h3>{text}</h3>
    </div>
  );
}

export default SidebarOption;
