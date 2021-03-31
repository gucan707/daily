import React from "react";

import "./index.scss";

export default function Search() {
  // TODO 搜索功能
  return (
    <div className="search">
      <img src="/images/search.png" alt="search" />
      <input type="text" placeholder="输入习惯名称" />
    </div>
  );
}
