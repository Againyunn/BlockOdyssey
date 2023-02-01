import React, { useState, useEffect } from "react";

// components
import PaginationFilter from "components/pagination/PaginationFilter";

// style
import "static/style/css/pagination.css";

// store
import { useDispatch, useSelector } from "react-redux";
import { setTotalPages, setSelectedPage, setShowItems } from "store/pagination";

function Pagination(props) {
  // state
  const [selectedButton, setSelectedButton] = useState(1); // 현재 선택된 버튼
  const [currentButtonArray, setCurrentButtonArray] = useState([]); // 현재 표시될 페이지 번호들
  const [pageNumberArray, setPageNumberArray] = useState([]);

  // store 제어
  const paginationData = useSelector((state) => state.pagination);
  const dispatch = useDispatch();
  const handleSetSelectedPage = (value) => dispatch(setSelectedPage(value));
  const handleSetShowItems = (value) => dispatch(setShowItems(value));

  useEffect(() => {
    let tmpPageNumberArray = [];
    for (let i = 1; i <= paginationData.totalPages; i++) {
      tmpPageNumberArray.push(i);
    }
    setPageNumberArray(tmpPageNumberArray);
  }, [paginationData.totalPages]);

  useEffect(() => {
    let tmpPageNumberArray = [...currentButtonArray];

    let leftDots = "...";
    let rightDots = "...";

    // 페이지 번호 배열 내 ... 의 유무 식별
    if (pageNumberArray.length < 7) {
      tmpPageNumberArray = pageNumberArray;
    } else {
      // [1 2 3 4 5 ... last]
      if (1 <= selectedButton && selectedButton <= 4) {
        tmpPageNumberArray = [1, 2, 3, 4, 5, rightDots, pageNumberArray.length];
      }
      // [1 ... 4 5 6 ... last]  ~  [1 ... last-4 last-3 last-2 ... last]
      else if (
        selectedButton > 4 &&
        selectedButton < pageNumberArray.length - 2
      ) {
        const sliced = pageNumberArray.slice(
          selectedButton - 2,
          selectedButton + 1
        );
        tmpPageNumberArray = [
          1,
          leftDots,
          ...sliced,
          rightDots,
          pageNumberArray.length,
        ];
      }
      // [1 ... last-4 last-3 last-2 last-1 last]
      else if (selectedButton > pageNumberArray.length - 3) {
        const sliced = pageNumberArray.slice(pageNumberArray.length - 5);
        tmpPageNumberArray = [1, leftDots, ...sliced];
      }

      // 각 위치의 ... 이 선택되었을 때
      else if (selectedButton === rightDots) {
        setSelectedButton(currentButtonArray[3] + 2);
      } else if (selectedButton === leftDots) {
        setSelectedButton(currentButtonArray[3] - 2);
      }
    }

    setCurrentButtonArray(tmpPageNumberArray);
    handleSetSelectedPage(selectedButton);
  }, [selectedButton, pageNumberArray]);

  useEffect(() => {
    setSelectedButton(paginationData.selectedPage);
  }, [paginationData.selectedPage]);

  return (
    <div className="pagination-wrap">
      <PaginationFilter selectedNumber={handleSetShowItems} />
      <button
        className="pagination-button"
        onClick={() => setSelectedButton(1)}
      >
        맨앞
      </button>
      <button
        className="pagination-button"
        onClick={() =>
          setSelectedButton((prev) => (prev <= 1 ? prev : prev - 1))
        }
      >
        <span className="pagination-button-text">전</span>
      </button>

      {currentButtonArray.map((el) => {
        return (
          <button
            className={`pagination-button ${
              selectedButton === el ? "is-selected" : ""
            }`}
            onClick={() => setSelectedButton(el)}
          >
            <span className="pagination-button-text">{el}</span>
          </button>
        );
      })}

      <button
        className="pagination-button"
        onClick={() =>
          setSelectedButton((prev) =>
            prev >= pageNumberArray.length ? prev : prev + 1
          )
        }
      >
        <span className="pagination-button-text">후</span>
      </button>
      <button
        className="pagination-button"
        onClick={() => setSelectedButton(pageNumberArray.length)}
      >
        맨뒤
      </button>
    </div>
  );
}
export default Pagination;
