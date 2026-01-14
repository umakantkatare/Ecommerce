import { useEffect } from "react";
import { fetchSearchProduct } from "../api/searchApi";
import {
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import SearchProduct from "../pages/SearchProduct";
import { baseUrl } from "../util/constant";
import { useApiFetch } from "../hooks/useApiFetch";
const SearchResult = () => {
  const dispatch = useDispatch();
  const { query, results, loading, error } = useSelector(
    (store) => store.search
  );

  const { get } = useApiFetch();

  useEffect(() => {
    if (!query) return;
    const getSearchData = async () => {
      try {
        dispatch(setLoading(true));
        let data = [];
        const res = await get(`${baseUrl}/products/search`, { query });
        data = res.products;
        dispatch(setResults(data));
      } catch (error) {
        dispatch(setError(error.message));
        throw error;
      }
    };
    const debounceSearch = setTimeout(getSearchData, 400);
    return () => clearTimeout(debounceSearch);
  }, [query, dispatch]);
  if (error) return <h1 className="text-red-400 mt-4 text-center">Error</h1>;
  if (loading)
    return (
      <div className="w-full flex justify-center items-center py-10">
        <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-300 border-t-blue-500"></div>
      </div>
    );
  return (
    <div className="my-5 mx-5">
      <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-red-500 pl-3">
        {query && `Results for : ${query}`}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:justify-center md:justify-center xl:grid-cols-4 2xl:grid-cols-5 gap-5 my-2 p-2">
        {results.map((product) => (
          <SearchProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
