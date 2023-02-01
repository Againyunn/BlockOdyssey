import React, { useEffect, useState } from "react";

// store
import { useDispatch, useSelector } from "react-redux";
import { setIsActive, setFilterData, setSearchData } from "store/product";

// data
import { optionList } from "components/search/searchData/searchData";

// style
import "static/style/css/common.css";
import "static/style/css/search.css";

function Search(props) {
  // state
  const [isShowOptions, setShowOptions] = useState(false);
  const [currentOptionLabel, setCurrentOptionLabel] = useState(
    optionList[0].name
  );

  const searchData = useSelector((state) => state.searchProduct);
  const dispatch = useDispatch();
  const handleSetFilterData = (data) => dispatch(setFilterData(data));
  const handleSetSearchData = (data) => dispatch(setSearchData(data));
  const handleSetIsActive = (data) => dispatch(setIsActive(data));

  // 필터 선택 제어
  const handleFilterSelection = (value, name) => {
    handleSetFilterData(value);
    setCurrentOptionLabel(name);
  };

  // 검색어 입력 제어
  const handleSearchInput = (e) => {
    handleSetSearchData(e.target.value === "" ? false : e.target.value);
  };

  return (
    <div className="search-wrap">
      <div className="search-content-wrap horizon-line">
        <div className="text-container">
          <span className="title-text">상품 검색</span>
        </div>
      </div>
      <div className="search-content-wrap">
        <div className="text-container">
          <span className="title-text">검색</span>
        </div>
        <div className="search-container">
          <div
            className="select-box"
            onClick={() => setShowOptions((prev) => !prev)}
          >
            <label className="select-label">{currentOptionLabel}</label>
            <ul
              className={`select-options ${isShowOptions ? "hidden" : "show"}`}
            >
              {optionList.map((el) => {
                return (
                  <li
                    className="each-option"
                    name={el.value}
                    onClick={() => handleFilterSelection(el.value, el.name)}
                  >
                    {el.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <input
            className="search-bar"
            type="text"
            onChange={(e) => handleSearchInput(e)}
          />
          <button
            className="default-button"
            onClick={() => handleSetIsActive(true)}
          >
            검색
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
