import axios from "axios";

export async function fetchCategoryProduct() {
    const response = await axios.get(`https://dummyjson.com/products/categories`)
    return response.data
}

