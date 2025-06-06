import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import "./Jobs.css";

function parseCSV(text) {
  const lines = text.split("\n").filter(Boolean);
  const headers = lines[0].split(",");
  const data = lines.slice(1).map((line) => line.split(","));
  return { headers, data };
}

export default function Jobs() {
  const [csv, setCsv] = useState(null);
  const [filteredJobs, setFilteredJobs] = useState(null);

  React.useEffect(() => {
    fetch("/docs/3.就业岗位任你选.csv")
      .then((res) => res.text())
      .then((text) => {
        const parsed = parseCSV(text);
        setCsv(parsed);
        setFilteredJobs(parsed);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    if (!csv) return;

    if (!searchTerm.trim()) {
      setFilteredJobs(csv);
      return;
    }

    const filtered = csv.data.filter((row) =>
      row.some(
        (cell) => cell && cell.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    setFilteredJobs({
      headers: csv.headers,
      data: filtered,
    });
  };

  return (
    <>
      <Navbar />
      <div className="jobs-container">
        <SearchBox placeholder="搜索招聘信息..." onSearch={handleSearch} />
        <h2>就业岗位任你选</h2>
        <div className="jobs-list-wrapper">
          {filteredJobs ? (
            filteredJobs.data.length > 0 ? (
              filteredJobs.data.map((row, i) => (
                <div className="jobs-card" key={i}>
                  <div className="jobs-title">
                    {row[1]} <span className="jobs-company">@{row[0]}</span>
                  </div>
                  <div className="jobs-meta">
                    <span>
                      薪资：{row[2] || "-"} ~ {row[3] || "-"}
                    </span>
                    <span>地点：{row[4]}</span>
                    <span>学历：{row[5]}</span>
                    <span>招聘人数：{row[7]}</span>
                  </div>
                  <div className="jobs-desc">{row[6]}</div>
                  <div className="jobs-contact">
                    <span>联系人：{row[8]}</span>
                    <span>电话：{row[9]}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <p>没有找到相关招聘信息，请尝试其他关键词</p>
              </div>
            )
          ) : (
            <p>加载中...</p>
          )}
        </div>
      </div>
    </>
  );
}
