import React from "react";
import "./Timeline.css";

function Timeline({ steps, isCompleted = false }) {
  // 解析流程字符串，按 → 分割成步骤数组
  const parseSteps = (flowText) => {
    if (!flowText) return [];
    return flowText
      .split(/[→→]/)
      .map((step) => step.trim())
      .filter(Boolean);
  };

  const stepList = parseSteps(steps);

  return (
    <div className="timeline">
      {stepList.map((step, index) => (
        <div key={index} className="timeline-item">
          <div
            className={`timeline-dot ${
              isCompleted
                ? "completed"
                : index === stepList.length - 1
                ? "current"
                : "pending"
            }`}
          >
            {isCompleted || index < stepList.length - 1 ? "●" : "●"}
          </div>
          <div className="timeline-content">
            <div className="timeline-title">{step}</div>
          </div>
          {index < stepList.length - 1 && <div className="timeline-line"></div>}
        </div>
      ))}
    </div>
  );
}

export default Timeline;
