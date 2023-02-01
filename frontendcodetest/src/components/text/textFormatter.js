export const getTestSnippet = (data, maxLength) => {
  let result = data;
  if (data.length > maxLength) {
    result = data.substr(0, maxLength - 2) + "...";
  }

  return result;
};

export const getPriceData = (data) => {
  let result = "$";
  result += setComma(data, 3);

  return result;
};

export const setComma = (data, commaIndex) => {
  var reg = false;
  if (commaIndex === 3) reg = /(^[+-]?\d+)(\d{3})/; // 정규식
  else if (commaIndex === 2) reg = /(^[+-]?\d+)(\d{2})/; // 정규식

  if (!reg) return data;

  data += ""; // 숫자를 문자열로 변환
  while (reg.test(data)) {
    data = data.replace(reg, "$1" + "," + "$2");
  }
  return data;
};
