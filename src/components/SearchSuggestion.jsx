import { useEffect, useState } from "react";
import { fetchSearchProduct } from "../api/searchApi";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";
import { useNavigate } from "react-router-dom";
import { useApiFetch } from "../hooks/useApiFetch";
import { baseUrl } from "../util/constant";

const SearchSuggestions = ({ value }) => {
  const navigate = useNavigate();
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const {get} = useApiFetch()

  useEffect(() => {
    if (!value?.trim()) {
      setSuggestions([]);
      return;
    }

    const getSuggestions = async () => {
      try {
        const res = await get(`${baseUrl}/products/search`,{}, 5);
        setSuggestions(res.products)
      } catch (err) {
        console.error(err);
        throw err
      }
    };

    const debounce = setTimeout(getSuggestions, 300);
    return () => clearTimeout(debounce);
  }, [value]);

  const suggestionHandle = (item) => {
    navigate("/search");
    dispatch(setQuery(item.title));
  };

  return (
    <div className="absolute top-full left-0 w-full bg-gray-800 rounded-md shadow-lg z-50">
      {suggestions.map((item) => (
        <div
          key={item.id}
          onClick={() => suggestionHandle(item)}
          onMouseDown={() => suggestionHandle(item)}
          className="px-4 py-2 text-sm text-white cursor-pointer hover:bg-gray-700"
        >
          🔍 {item.title}
        </div>
      ))}
    </div>
  );
};

export default SearchSuggestions;
