export const extractData = (filter, search, data) => {
  let result = [];
  let convertedSearch = changeToLowerCase(search);

  switch (filter) {
    case "name":
      data.map((item) => {
        if (changeToLowerCase(item.title.toString()).includes(convertedSearch))
          result.push(item);
      });
      return result;

    case "brand":
      data.map((item) => {
        if (changeToLowerCase(item.brand.toString()).includes(convertedSearch))
          result.push(item);
      });
      return result;

    case "description":
      data.map((item) => {
        if (
          changeToLowerCase(item.description.toString()).includes(
            convertedSearch
          )
        )
          result.push(item);
      });
      return result;

    default:
      if (!search) return data;
      else {
        data.map((item) => {
          if (getKeyByValue(item, convertedSearch)) result.push(item);
        });
      }
      return result;
  }
};

const changeToLowerCase = (data) => {
  return data.toLowerCase();
};

const getKeyByValue = (object, value) => {
  return Object.keys(object).find((key) =>
    changeToLowerCase(object[key].toString()).includes(value)
  );
};
