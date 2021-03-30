import React from "react";

import "./index.scss";

function Dailog(props) {
  const { iconUrl, habitName, bgc } = props;
  const now = new Date();

  // TODO 保存，不再显示，所有日志

  return (
    <div className="dialog">
      <div className="header" style={{ backgroundColor: bgc }}>
        <b>打卡日志</b>
        <div className="date">{`今天${
          now.getHours() < 10 ? "0" + now.getHours() : now.getHours()
        }:${
          now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes()
        }`}</div>
      </div>
      <div className="icon">
        <img
          src={iconUrl}
          alt="图片加载失败"
          style={{ backgroundColor: bgc }}
        />
        <b>{habitName}</b>
      </div>
      <textarea name="log" id="log" placeholder="写点什么吧..."></textarea>
      <div className="footer">
        <div>不再显示</div>
        <div className="save" style={{ backgroundColor: bgc }}>
          保存
        </div>
        <div>所有日志</div>
      </div>
    </div>
  );
}

export default Dailog;
