import React from "react";
import Navbar from "../components/Navbar";
import "./Jobs.css";

function parseCSV(text) {
  const lines = text.split("\n").filter(Boolean);
  const headers = lines[0].split(",");
  const data = lines.slice(1).map((line) => line.split(","));
  return { headers, data };
}

export default function Jobs() {
  const [csv, setCsv] = React.useState(null);

  React.useEffect(() => {
    fetch("/docs/3.就业岗位任你选.csv")
      .then((res) => res.text())
      .then((text) => setCsv(parseCSV(text)));
  }, []);

  return (
    <>
      <Navbar />
      <div className="jobs-container">
        <h2>就业岗位任你选</h2>
        <div className="jobs-list-wrapper">
          {csv ? (
            csv.data.map((row, i) => (
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
            <p>加载中...</p>
          )}
        </div>
      </div>
    </>
  );
}
