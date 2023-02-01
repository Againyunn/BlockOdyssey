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

export const setQueryString = (type, queryStringObject) => {
  let newUrl = new URLSearchParams("?");

  if (type === "product") {
    Object.entries(queryStringObject).map(([key, value]) => {
      newUrl.append(key, value);
    });
  }

  return newUrl;
};
