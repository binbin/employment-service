import Navbar from "../components/Navbar";
import "./Training.css";

export default function Training() {
  return (
    <>
      <Navbar />
      <div className="training-container">
        <h2>就业培训需求登记</h2>
        <div className="training-content">
          <p>
            为推动人岗精准匹配，化解"有人没活干"和"有活没人干"的结构性矛盾，现面向全市企业和劳动者开展企业用工需求和个人培训就业意向摸底调查。诚邀您扫码填报，为优化就业服务提供助力！
          </p>
          <ul>
            <li>
              一、调查对象
              <br />
              企业：全市有用工需求的各类企业（含个体工商户）
              <br />
              个人：有求职、培训或创业意向的劳动者
            </li>
            <li>
              二、调查内容
              <br />
              企业端：岗位需求、招聘难点等
              <br />
              个人端：求职方向、培训需求等
            </li>
            <li>
              三、参与方式
              <br />
              下方链接
            </li>
          </ul>
          <a
            className="training-link"
            href="https://www.jynmg.cn/hrss-training-out-vue/#/registration/userselect"
            target="_blank"
            rel="noopener noreferrer"
          >
            点击进入登记
          </a>
        </div>
      </div>
    </>
  );
}
