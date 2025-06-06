import React from "react";
import "./Timeline.css";

function Timeline({ steps, isCompleted = false }) {
  // 解析流程字符串，支持两种格式：
  // 1. 箭头分割: "步骤1→步骤2→步骤3"
  // 2. 数字编号: "1.步骤1\n2.步骤2\n3.步骤3"
  const parseSteps = (flowText) => {
    if (!flowText) return [];

    // 检查是否包含箭头分隔符
    if (flowText.includes("→") || flowText.includes("→")) {
      return flowText
        .split(/[→→]/)
        .map((step) => step.trim())
        .filter(Boolean);
    }

    // 处理数字编号格式
    return flowText
      .split(/\d+\./)
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
                ? // ? "current"
                  "completed"
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
