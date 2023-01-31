import React from "react";

// store
import { useDispatch } from "react-redux";
import { setIsActive, setFilterData, setSearchData } from "store/product";

// data
import { optionList } from "components/search/searchData/searchData";

function Search(props) {
  const dispatch = useDispatch();
  const handleSetFilterData = (data) => dispatch(setFilterData(data));
  const handleSetSearchData = (data) => dispatch(setSearchData(data));
  const handleSetIsActive = (data) => dispatch(setIsActive(data));

  // 필터 선택 제어
  const handleFilterSelection = (e) => {
    handleSetFilterData(e.target.value);
  };

  // 검색어 입력 제어
  const handleSearchInput = (e) => {
    handleSetSearchData(e.target.value === "" ? false : e.target.value);
  };

  return (
    <div>
      <select name="filter" id="" onChange={(e) => handleFilterSelection(e)}>
        {optionList.map((el) => {
          return (
            <option value={el.value} selected={!el.isDefault ? false : true}>
              {el.name}
            </option>
          );
        })}
      </select>
      <input type="text" onChange={(e) => handleSearchInput(e)} />
      <button onClick={() => handleSetIsActive(true)}>검색</button>
    </div>
  );
}

export default Search;
