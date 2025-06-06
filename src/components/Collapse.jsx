import React, { useState } from "react";
import "./Collapse.css";

function Collapse({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <span className="collapse-title">{title}</span>
        <span className={`collapse-arrow ${isOpen ? "open" : ""}`}>▼</span>
      </div>
      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        <div className="collapse-body">{children}</div>
      </div>
    </div>
  );
}

export default Collapse;
