import React, { useState, useEffect } from "react";

// react-qeury
import { useQuery } from "react-query";

// store
import { useDispatch, useSelector } from "react-redux";
import { setIsActive, setFilterData, setSearchData } from "store/product";

// function
import { extractData } from "components/list/ListFunctions";

// components
import List from "components/list/List";
import Pagination from "components/pagination/Pagination";
import Search from "components/search/Search";

// API
import { getProductData } from "services/Products";
import {
  getQueryString,
  setQueryString,
} from "components/queryString/queryString";

// style
import "static/style/css/common.css";
import "static/style/css/productList.css";

function Productlist(props) {
  /**STATE */
  const [isUpdated, setIsUpdated] = useState(0);

  // product 제어
  const [rawProducts, setRawProducts] = useState([]); // API raw data
  const [products, setProducts] = useState([]); // filtered searched data
  const [currentProducts, setCurrentProducts] = useState([]); // paginated data

  // pagination 제어
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [showProductsOnce, setShowProductOnce] = useState(10); // n개씩 보기
  const [totalPagesNumber, setTotalPagesNumber] = useState();

  // store 제어
  const searchData = useSelector((state) => state.searchProduct);
  const dispatch = useDispatch();
  const handleSetFilterData = (value) => dispatch(setFilterData(value));
  const handleSetSearchData = (value) => dispatch(setSearchData(value));
  const handleSetIsActive = (value) => dispatch(setIsActive(value));

  /**PAGE URL */
  const PAGE_URL = window.location.origin;

  /** API 데이터 받아오기 */
  const { isLoading, error, refetch, isSuccess } = useQuery("products", () =>
    getProductData()
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);

        setRawProducts(data.products);
      })
  );

  useEffect(() => {
    if (!products || !searchData.isActive) {
      return;
    }

    if (searchData.isActive) {
      console.log("* main", searchData, currentPage);
      refetch();
      setIsUpdated(1);
      upadteUrl(
        searchData.filter,
        searchData.search,
        currentPage,
        showProductsOnce
      );
    }
  }, [searchData.isActive]);

  useEffect(() => {
    if (isUpdated === 2) {
      if (!searchData.search)
        // 검색어 입력 여부 식별
        setProducts(rawProducts);
      else {
        /** 필터링 & 검색 데이터 추출 */
        let extractedData = extractData(
          searchData.filter,
          searchData.search,
          rawProducts
        );
        setProducts(extractedData);
      }
      handleSetIsActive(false);

      setIsUpdated(0);
    }
  }, [isUpdated]);

  useEffect(() => {
    setIsUpdated(2);
  }, [rawProducts]);

  useEffect(() => {
    calculatePagination(showProductsOnce, products);
  }, [products, currentPage, showProductsOnce]);

  const calculatePagination = (showProductsOnce, products) => {
    let lastIndex = currentPage * showProductsOnce;
    let firstIndex = lastIndex - showProductsOnce;

    let totalPages = Math.ceil(products.length / showProductsOnce);

    setCurrentProducts(products.slice(firstIndex, lastIndex));

    if (totalPages < currentPage) setCurrentPage(1);

    setTotalPagesNumber(Math.ceil(products.length / showProductsOnce));
  };

  /**URL QUERY STRING */
  // 기존 URL에 존재하는 값 제어
  useEffect(() => {
    const previousQueryString = getQueryString("product");

    handleSetFilterData(previousQueryString.category);
    handleSetSearchData(previousQueryString.search);

    if (!!previousQueryString.items)
      setShowProductOnce(previousQueryString.items);

    if (!!previousQueryString.page) {
      let prevPage = parseInt(previousQueryString.page);
      let lastIndex = currentPage * showProductsOnce;
      let firstIndex = lastIndex - showProductsOnce;
      let maxIndex = products.slice(firstIndex, lastIndex);
      if (prevPage <= maxIndex) setCurrentPage(prevPage);
    }
  }, []);

  // useEffect(() => {
  //   setCurrentPage(1);
  // }, [showProductsOnce]);

  useEffect(() => {
    upadteUrl(
      searchData.filter,
      searchData.search,
      currentPage,
      showProductsOnce
    );
  }, [currentPage]);

  // 현재 선택한 값에 대한 queryString 셋팅
  const upadteUrl = (filter, search, page, showProductsOnce) => {
    let queryString = {
      category: !filter ? "" : filter,
      search: !search ? "" : search,
      page: page < showProductsOnce ? 1 : page,
      items: showProductsOnce,
    };

    const newUrl = "?" + setQueryString("product", queryString);

    console.log(newUrl);
    window.history.pushState(null, null, newUrl);
  };

  return (
    <div className="product-list-wrap">
      <Search />
      <List
        currentProductData={currentProducts}
        productDataLength={products.length}
      />
      <div className="list-table-footer">
        <Pagination
          getPages={totalPagesNumber}
          setCurrentPage={setCurrentPage}
          getSelectedPageNumber={setShowProductOnce}
          getCurrentPageNumber={
            currentPage > totalPagesNumber ? 1 : currentPage
          }
        />
      </div>
    </div>
  );
}

export default Productlist;
