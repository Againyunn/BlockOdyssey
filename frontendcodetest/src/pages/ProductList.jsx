import React, { useState, useEffect } from "react";

// react-qeury
import { useQuery } from "react-query";

// store
import { useDispatch, useSelector } from "react-redux";
import { setIsActive } from "store/product";

// function
import { extractData } from "components/list/ListFunctions";

// components
import List from "components/list/List";
import Pagination from "components/pagination/Pagination";
import Search from "components/search/Search";

// API
import { getProductData } from "services/Products";

function Productlist(props) {
  /**STATE */
  //
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
  const handleIsActive = (data) => dispatch(setIsActive(data));

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
      refetch();
      setIsUpdated(1);
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
      handleIsActive(false);

      setIsUpdated(0);
    }
  }, [isUpdated]);

  useEffect(() => {
    setIsUpdated(2);
  }, [rawProducts]);

  useEffect(() => {
    calculatePagination(showProductsOnce, products);
  }, [products, currentPage]);

  const calculatePagination = (showProductsOnce, products) => {
    let lastIndex = currentPage * showProductsOnce;
    let firstIndex = lastIndex - showProductsOnce;

    setCurrentProducts(products.slice(firstIndex, lastIndex));
    setTotalPagesNumber(Math.ceil(products.length / showProductsOnce));
  };

  return (
    <div>
      <Search />
      <List
        currentProductData={currentProducts}
        productDataLength={products.length}
      />
      <Pagination pages={totalPagesNumber} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default Productlist;
