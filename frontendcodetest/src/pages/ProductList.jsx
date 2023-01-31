import React from "react";

// components
import List from "components/list/List";
import Pagination from "components/pagination/Pagination";
import Search from "components/search/Search";

function Productlist(props) {
  return (
    <div>
      <Search />
      <List />
      <Pagination />
    </div>
  );
}

export default Productlist;
