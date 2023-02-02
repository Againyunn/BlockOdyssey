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
        <span className="bord-text">
          검색된 데이터: {props.productDataLength}건
        </span>
      </div>

      <table className="list-table-wrap ">
        <thead>
          <tr>
            <td className="list-table-header width-middle horizon-line">
              <span className="bord-text">상품번호</span>
            </td>
            <td className="list-table-header width-extra-large horizon-line">
              <span className="bord-text">상품명</span>
            </td>
            <td className="list-table-header width-large horizon-line">
              <span className="bord-text">브랜드</span>
            </td>
            <td className="list-table-header width-extra-large horizon-line">
              <span className="bord-text">상품내용</span>
            </td>
            <td className="list-table-header width-small horizon-line">
              <span className="bord-text">가격</span>
            </td>
            <td className="list-table-header width-small horizon-line">
              <span className="bord-text">평점</span>
            </td>
            <td className="list-table-header width-small horizon-line">
              <span className="bord-text">재고</span>
            </td>
          </tr>
        </thead>
        <tbody>
          {!!products &&
            products.map((el, idx) => {
              let thisDescription = !el.description
                ? ""
                : getTestSnippet(el.description, 40);
              let thisPrice = !el.price ? "" : getPriceData(el.price);
              let thisRating = !el.rating ? "" : setComma(el.rating, 2);
              let thisStock = !el.stock ? "" : setComma(el.stock, 3);

              return (
                <tr key={`list-table-content-${idx}`}>
                  <td className="list-table-body horizon-line">
                    <span className="default-text">{el.id}</span>
                  </td>
                  <td className="list-table-body horizon-line">
                    <span className="default-text">{el.title}</span>
                  </td>
                  <td className="list-table-body horizon-line">
                    <span className="default-text">{el.brand}</span>
                  </td>

                  <td className="list-table-body horizon-line">
                    <span className="default-text">{thisDescription}</span>
                  </td>

                  <td className="list-table-body horizon-line">
                    <span className="default-text">{thisPrice}</span>
                  </td>
                  <td className="list-table-body horizon-line">
                    <span className="default-text">{thisRating}</span>
                  </td>
                  <td className="list-table-body horizon-line">
                    <span className="default-text">{thisStock}</span>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default List;
