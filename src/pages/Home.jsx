import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home-container">
        {/* <iframe
          src="//player.bilibili.com/player.html?isOutside=true&aid=768098270&bvid=BV1zr4y1n78t&cid=571083289&p=1"
          scrolling="no"
          border="0"
          frameBorder="no"
          framespacing="0"
          allowFullScreen={true}
          style={{
            width: "100%",
            minHeight: "56.25vw",
          }}
        /> */}
        <div className="home-links">
          <div className="links-grid">
            <Link className="home-link policy-link" to="/policy">
              <div className="link-icon">📋</div>
              <div className="link-content">
                <h3>就业创业好政策</h3>
                <p>了解最新就业创业扶持政策</p>
              </div>
            </Link>
            <Link className="home-link skill-link" to="/skill">
              <div className="link-icon">🎯</div>
              <div className="link-content">
                <h3>技能照亮前程</h3>
                <p>提升技能，点亮职业道路</p>
              </div>
            </Link>
            <Link className="home-link jobs-link" to="/jobs">
              <div className="link-icon">💼</div>
              <div className="link-content">
                <h3>就业岗位任你选</h3>
                <p>海量优质岗位等您挑选</p>
              </div>
            </Link>
            <Link className="home-link training-link" to="/training">
              <div className="link-icon">📚</div>
              <div className="link-content">
                <h3>就业培训需求登记</h3>
                <p>个性化培训计划定制</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
