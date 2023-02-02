import React, { useState, useEffect } from "react";

// react-qeury
import { useQuery } from "react-query";

// store
import { useDispatch, useSelector } from "react-redux";
import { setIsActive, setFilterData, setSearchData } from "store/product";
import { setTotalPages, setSelectedPage, setShowItems } from "store/pagination";

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
  const [isIntialized, setIsInitialIzed] = useState(false);

  // product 제어
  const [rawProducts, setRawProducts] = useState([]); // API raw data
  const [products, setProducts] = useState([]); // filtered searched data
  const [currentProducts, setCurrentProducts] = useState([]); // paginated data

  // store 제어
  const dispatch = useDispatch();

  // search store
  const searchData = useSelector((state) => state.searchProduct);
  const handleSetFilterData = (value) => dispatch(setFilterData(value));
  const handleSetSearchData = (value) => dispatch(setSearchData(value));
  const handleSetIsActive = (value) => dispatch(setIsActive(value));

  // pagination store
  const paginationData = useSelector((state) => state.pagination);
  const handleSetTotalPages = (value) => dispatch(setTotalPages(value));
  const handleSetSelectedPage = (value) => dispatch(setSelectedPage(value));
  const handleSetShowItems = (value) => dispatch(setShowItems(value));

  /** API 데이터 받아오기 */
  const { isLoading, error, refetch } = useQuery("products", () =>
    getProductData()
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRawProducts(data.products);
      })
  );

  useEffect(() => {
    if (!products || !searchData.isActive) {
      return;
    }

    if (searchData.isActive) {
      refetch();
      setIsUpdated(1);
      setQueryString(
        "product",
        searchData.filter,
        searchData.search,
        paginationData.selectedPage,
        paginationData.showItems
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
    if (rawProducts.length > 0)
      calculatePagination(
        paginationData.selectedPage,
        paginationData.showItems,
        products
      );
  }, [products, paginationData.selectedPage, paginationData.showItems]);

  const calculatePagination = (currentPage, showProductsOnce, products) => {
    let lastIndex = currentPage * showProductsOnce;
    let firstIndex = lastIndex - showProductsOnce;

    let totalPages = Math.ceil(products.length / showProductsOnce);

    setCurrentProducts(products.slice(firstIndex, lastIndex));

    if (totalPages < currentPage) handleSetSelectedPage(1);
    else handleSetTotalPages(Math.ceil(products.length / showProductsOnce));
  };

  /**URL QUERY STRING */
  // 기존 URL에 존재하는 값 제어
  useEffect(() => {
    const previousQueryString = getQueryString("product");

    handleSetFilterData(previousQueryString.category);
    handleSetSearchData(previousQueryString.search);

    if (!!previousQueryString.items)
      handleSetShowItems(previousQueryString.items);

    if (!!previousQueryString.page) {
      let prevPage = parseInt(previousQueryString.page);
      handleSetSelectedPage(prevPage);
    }
  }, []);

  useEffect(() => {
    if (paginationData.selectedPage > 1 || isIntialized)
      setQueryString(
        "product",
        searchData.filter,
        searchData.search,
        paginationData.selectedPage,
        paginationData.showItems
      );

    setIsInitialIzed(true);
  }, [paginationData.selectedPage, paginationData.showItems]);

  return (
    <div className="product-list-wrap">
      <Search />
      {isLoading ? (
        <div className="set-vertical-center">
          <span className="default-text">로딩 중...</span>
        </div>
      ) : error ? (
        <div className="set-vertical-center">
          <span className="default-text">죄송합니다. 오류가 발생했습니다.</span>
        </div>
      ) : products.length > 0 ? (
        <React.Fragment>
          <List
            currentProductData={currentProducts}
            productDataLength={products.length}
          />
          <div className="list-table-footer">
            <Pagination />
          </div>
        </React.Fragment>
      ) : (
        <div className="set-vertical-center">
          <span className="default-text">
            죄송합니다. 검색 결과가 없습니다.
          </span>
        </div>
      )}
    </div>
  );
}

export default Productlist;
