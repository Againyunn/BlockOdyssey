import React, { useState } from "react";

// data
import { optionList } from "components/pagination/paginationData/paginationData";

// style
import "static/style/css/common.css";
import "static/style/css/pagination.css";

function PaginationFilter({ selectedNumber }) {
  const [isShowOptions, setShowOptions] = useState(false);
  const [currentOptionLabel, setCurrentOptionLabel] = useState(optionList[0]);

  // 필터 선택 제어
  const handleFilterSelection = (el) => {
    setCurrentOptionLabel(el);
    selectedNumber(el);
  };

  return (
    <div className="pagination-select-box-wrap">
      <span className="default-text">페이지 당 행:</span>
      <div
        className="pagination-select-box"
        onClick={() => setShowOptions((prev) => !prev)}
      >
        <label className="pagination-select-label">{currentOptionLabel}</label>
        <ul
          className={`pagination-select-options ${
            isShowOptions ? "hidden" : "show"
          }`}
        >
          {optionList.map((el) => {
            return (
              <li
                className="pagination-each-option"
                onClick={() => handleFilterSelection(el)}
              >
                {el}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default PaginationFilter;
