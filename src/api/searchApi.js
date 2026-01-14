import axios  from "axios";

export async function fetchSearchProduct(query, limit = 10) {
  const response = await axios.get(`https://dummyjson.com/products/search`, {
    params: {
      q: query,
      limit,
    },
  });
  return response;
}
