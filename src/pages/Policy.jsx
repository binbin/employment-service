import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import Collapse from "../components/Collapse";
import "./Policy.css";
import Timeline from "../components/Timeline";
import policyData from "./Policy.json";

export default function Policy() {
  const [filteredData, setFilteredData] = useState(policyData);

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredData(policyData);
      return;
    }

    const filtered = policyData.filter(
      (policy) =>
        policy.政策名称.toLowerCase().includes(searchTerm.toLowerCase()) ||
        policy.政策内容.toLowerCase().includes(searchTerm.toLowerCase()) ||
        policy.享受对象.toLowerCase().includes(searchTerm.toLowerCase()) ||
        policy.经办单位.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <Navbar />
      <div className="policy-container">
        <SearchBox placeholder="搜索就业政策..." onSearch={handleSearch} />
        <h2>就业创业好政策</h2>
        <div className="policy-list-wrapper">
          {filteredData.length > 0 ? (
            filteredData.map((policy, i) => (
              <div className="policy-card" key={i}>
                <div className="policy-title">{policy.政策名称}</div>
                <div className="policy-meta">
                  <span>享受对象：{policy.享受对象}</span>
                </div>
                <div className="policy-details">
                  <Collapse title="政策内容" defaultOpen={false}>
                    <div className="policy-content">{policy.政策内容}</div>
                  </Collapse>
                  <Collapse title="经办流程" defaultOpen={false}>
                    <span>经办单位：{policy.经办单位}</span>
                    <Timeline steps={policy.经办流程} />
                  </Collapse>

                  {policy.经办时限 && (
                    <Collapse title="经办时限">
                      <div className="policy-time-content">
                        {policy.经办时限}
                      </div>
                    </Collapse>
                  )}

                  {policy.申请要件 && (
                    <Collapse title="申请要件">
                      <div>{policy.申请要件}</div>
                    </Collapse>
                  )}

                  {policy.政策依据 && (
                    <Collapse title="政策依据">
                      <div>{policy.政策依据}</div>
                    </Collapse>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>没有找到相关政策，请尝试其他关键词</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
