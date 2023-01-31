// import React, { useState, useEffect } from "react";

// // react-qeury
// import { useQuery } from "react-query";

// // store
// import { useDispatch } from "react-redux";
// import { clearProductData, getProductData } from "store/product";

// function Products(props) {

//   const dispatch = useDispatch();

//   const handleGetProductData = (data) => dispatch(getProductData(data));

//   const handleClearProductData = () => dispatch(clearProductData());

//   /** API 데이터 받아오기 */

//   const { isLoading, error, data } = useQuery("repoData", () =>
//     fetch("https://dummyjson.com/products?limit=100")
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);

//         handleGetProductData(data.products);
//       })
//   );

//   return <></>;
// }

// export default Products;
