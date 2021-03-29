import React, { useState } from "react";

import "./index.scss";

function Icon(props) {
  const { iconUrl, habitName, bgc } = props;
  const [doneAt, setDoneAt] = useState(props.doneAt);
  const [imgClass, setImgClass] = useState("img");

  function doHabit() {
    setDoneAt(~doneAt ? -1 : Date.now());
    setImgClass("img rotate");
  }

  return (
    <div className="icon" onClick={doHabit}>
      <div>
        <img
          className={imgClass}
          src={iconUrl}
          alt="图片加载失败"
          style={{ backgroundColor: ~doneAt ? bgc : "white" }}
        />
      </div>
      <div className="brief">
        <div className="habit-name">{habitName}</div>
        <div className={~doneAt ? "continue" : "continue hidden"}>连续3天</div>
      </div>
    </div>
  );
}

export default Icon;
