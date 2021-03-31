import React, { useState } from "react";

import "./index.scss";

function Icon(props) {
  const { iconUrl, bgc, clickable } = props;
  const [imgClass, setImgClass] = useState("img");

  function doHabit() {
    if (clickable) {
      setImgClass("img rotate");
      setTimeout(() => setImgClass("img"), 200);
    }
  }

  return (
    <div className="icon" onClick={doHabit}>
      <img
        className={imgClass}
        src={iconUrl}
        alt="图片加载失败"
        style={{ backgroundColor: bgc }}
      />
    </div>
  );
}

export default Icon;
