import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import Collapse from "../components/Collapse";
import "./Skill.css";
import Timeline from "../components/Timeline";
import skillData from "./Skill.json";

export default function Skill() {
  const [filteredData, setFilteredData] = useState(skillData);

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredData(skillData);
      return;
    }

    const filtered = skillData.filter(
      (skill) =>
        skill.政策名称.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.政策内容.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.享受对象.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.经办单位.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <Navbar />
      <div className="skill-container">
        <SearchBox placeholder="搜索技能培训..." onSearch={handleSearch} />
        <h2>技能照亮前程</h2>
        <div className="skill-list-wrapper">
          {filteredData.length > 0 ? (
            filteredData.map((skill, i) => (
              <div className="skill-card" key={i}>
                <div className="skill-title">{skill.政策名称}</div>
                <div className="skill-meta">
                  <span>享受对象：{skill.享受对象}</span>
                </div>

                <div className="skill-details">
                  <Collapse title="政策内容" defaultOpen={false}>
                    <div className="skill-content">{skill.政策内容}</div>
                  </Collapse>
                  <Collapse title="经办流程" defaultOpen={false}>
                    <span>经办单位：{skill.经办单位}</span>
                    <Timeline steps={skill.经办流程} />
                  </Collapse>

                  {skill.经办时限 && (
                    <Collapse title="经办时限">
                      <div className="skill-time-content">{skill.经办时限}</div>
                    </Collapse>
                  )}

                  {skill.申请要件 && (
                    <Collapse title="申请要件">
                      <div>{skill.申请要件}</div>
                    </Collapse>
                  )}

                  {skill.政策依据 && (
                    <Collapse title="政策依据">
                      <div>{skill.政策依据}</div>
                    </Collapse>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>没有找到相关培训信息，请尝试其他关键词</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
