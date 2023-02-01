import { BASE_URL } from "config";

export const getProductData = async () => {
  return fetch(`${BASE_URL}/products?limit=100`, {
    method: "GET",
  });
};
