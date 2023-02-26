export const getQueryString = (type) => {
  const url = new URL(window.location.href);

  // URLSearchParams 객체
  const urlParams = url.searchParams;

  let result = {};

  if (type === "product") {
    for (const key of urlParams.keys()) {
      let thisData = urlParams.get(key);
      result[`${key}`] = thisData.toString();
    }
  }

  return result;
};

export const setQueryString = (
  type,
  filter,
  search,
  page,
  showProductsOnce
) => {
  let newUrl = new URLSearchParams("?");
  let queryStringObject = {};

  queryStringObject.category = !filter ? "" : filter;
  queryStringObject.search = !search ? "" : search;
  queryStringObject.page = page <= showProductsOnce ? page : 1;
  queryStringObject.items = showProductsOnce;

  if (type === "product") {
    Object.entries(queryStringObject).map(([key, value]) => {
      newUrl.append(key, value);
    });
  }

  window.history.pushState(null, null, "?" + newUrl);

  return newUrl;
};
