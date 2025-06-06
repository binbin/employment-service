import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import "./Jobs.css";

export default function Jobs() {
  const [jobs, setJobs] = useState(null);
  const [filteredJobs, setFilteredJobs] = useState(null);

  React.useEffect(() => {
    fetch("/src/pages/Jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setFilteredJobs(data);
      })
      .catch((error) => {
        console.error("加载数据失败:", error);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    if (!jobs) return;

    if (!searchTerm.trim()) {
      setFilteredJobs(jobs);
      return;
    }

    const filtered = jobs.filter((job) =>
      Object.values(job).some(
        (value) =>
          value &&
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    setFilteredJobs(filtered);
  };

  return (
    <>
      <Navbar />
      <div className="jobs-container">
        <SearchBox placeholder="搜索招聘信息..." onSearch={handleSearch} />
        <h2>就业岗位任你选</h2>
        <div className="jobs-list-wrapper">
          {filteredJobs ? (
            filteredJobs.length > 0 ? (
              filteredJobs.map((job, i) => (
                <div className="jobs-card" key={i}>
                  <div className="jobs-title">
                    {job.岗位名称}{" "}
                    <span className="jobs-company">@{job.单位名称}</span>
                  </div>
                  <div className="jobs-meta">
                    {(job.月薪下限 || job.月薪上限) && (
                      <span>
                        薪资：{job.月薪下限 || "-"} ~ {job.月薪上限 || "-"}
                      </span>
                    )}
                    <span>地点：{job.工作地点ADDRESS}</span>
                    <span>学历：{job.学历要求}</span>
                    <span>招聘人数：{job["招聘人数NEEDP_NUM"]}</span>
                  </div>
                  <div className="jobs-desc">
                    {job.岗位描述?.split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index < job.岗位描述.split("\n").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="jobs-contact">
                    <a
                      href={`tel:${job.联系电话}`}
                      style={{ color: "#007bff", textDecoration: "none" }}
                    >
                      <span>联系人：{job.联系人}</span>
                      <span>
                        电话：
                        {job.联系电话}
                      </span>
                    </a>
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
