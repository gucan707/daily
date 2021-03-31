import React, { useState } from "react";

import Icon from "../commonHabitIcon";

import "./index.scss";

function TodayIcon(props) {
  const { iconUrl, habitName, bgc } = props;
  const [doneAt, setDoneAt] = useState(props.doneAt);

  // TODO 发请求改数据库

  function changeDoneAt() {
    setDoneAt(~doneAt ? -1 : Date.now());
  }

  return (
    <div className="icon-today" onClick={changeDoneAt}>
      <Icon iconUrl={iconUrl} bgc={~doneAt ? bgc : "white"} clickable={true} />
      <div className="brief">
        <div className="habit-name">{habitName}</div>
        <div className={~doneAt ? "continue" : "continue hidden"}>连续3天</div>
      </div>
    </div>
  );
}

export default TodayIcon;
