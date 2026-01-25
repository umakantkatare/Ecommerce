import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoading,
  setError,
  setResults,
  setQuery,
} from "../redux/features/searchSlice";
import SearchProduct from "../pages/SearchProduct";
import { baseUrl } from "../util/constant";
import { useApiFetch } from "../hooks/useApiFetch";
import { useSearchParams } from "react-router-dom";

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { results, loading, error } = useSelector((store) => store.search);
  const { get } = useApiFetch();

  const searchQueryURL = searchParams.get("q") || "";

  useEffect(() => {
    if (!searchQueryURL) return;

    const getSearchData = async () => {
      try {
        dispatch(setLoading(true));
        const res = await get(`${baseUrl}/products/search`, {
          q: searchQueryURL,
        });
        dispatch(setResults(res?.products || []));
        dispatch(setQuery(searchQueryURL));
      } catch (err) {
        dispatch(setError(err?.message));
      }
    };

    const timeoutId = setTimeout(getSearchData, 300);
    return () => clearTimeout(timeoutId);
  }, [searchQueryURL]); 

  if (error)
    return <p className="text-center mt-6 text-red-400">Error: {error}</p>;

  return (
    <section className="px-4 sm:px-6 lg:px-8 my-6">
      {/* UI hamesha searchQueryURL use karega */}
      {searchQueryURL && (
        <h2 className="text-lg font-bold text-white mb-5 border-l-4 border-red-500 pl-3">
          Results for: <span className="text-red-400">{searchQueryURL}</span>
        </h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {results?.map((product) => (
          <SearchProduct product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default SearchResult;
