import React from "react";

import "./index.scss";

function HabitList(props) {
  const { habitName, iconUrl, bgc, insist } = props;

  // TODO 或许之后有click事件？

  return (
    <div className="list" style={{ backgroundColor: bgc }}>
      <img src={iconUrl} alt="图片加载失败" />
      <div className="habit-name">{habitName}</div>
      <div className="brief">
        <b>{insist}天</b>
        <span>共计坚持</span>
      </div>
    </div>
  );
}

export default HabitList;
