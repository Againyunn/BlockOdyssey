import {
  getPriceData,
  getTestSnippet,
  setComma,
} from "components/text/textFormatter";
import React, { useState, useEffect } from "react";

// style
import "static/style/css/common.css";
import "static/style/css/list.css";

function List(props) {
  const [products, setProducts] = useState(props.currentProductData);

  useEffect(() => {
    setProducts(props.currentProductData);
  }, [props.currentProductData]);

  return (
    <React.Fragment>
      <div className="search-data-length-text interval-height-bottom-defualt">
        <span>검색된 데이터: {props.productDataLength}건</span>
      </div>

      <table className="list-table-wrap ">
        <th className="list-table-header width-middle horizon-line">
          상품번호
        </th>
        <th className="list-table-header width-large horizon-line">상품명</th>
        <th className="list-table-header width-large horizon-line">브랜드</th>
        <th className="list-table-header width-extra-large horizon-line">
          상품내용
        </th>
        <th className="list-table-header width-small horizon-line">가격</th>
        <th className="list-table-header width-small horizon-line">평점</th>
        <th className="list-table-header width-small horizon-line">재고</th>
        {!!products &&
          products.map((el) => {
            let thisDescription = !el.description
              ? ""
              : getTestSnippet(el.description, 40);
            let thisPrice = !el.price ? "" : getPriceData(el.price);
            let thisRating = !el.rating ? "" : setComma(el.rating, 2);
            let thisStock = !el.stock ? "" : setComma(el.stock, 3);

            return (
              <tr>
                <td className="list-table-body horizon-line">{el.id}</td>
                <td className="list-table-body horizon-line">{el.title}</td>
                <td className="list-table-body horizon-line">{el.brand}</td>

                <td className="list-table-body horizon-line">
                  {thisDescription}
                </td>

                <td className="list-table-body horizon-line">{thisPrice}</td>
                <td className="list-table-body horizon-line">{thisRating}</td>
                <td className="list-table-body horizon-line">{thisStock}</td>
              </tr>
            );
          })}
      </table>
    </React.Fragment>
  );
}

export default List;
