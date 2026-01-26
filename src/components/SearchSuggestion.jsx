import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";
import { useNavigate } from "react-router-dom";
import { useApiFetch } from "../hooks/useApiFetch";
import { baseUrl } from "../util/constant";

const SearchSuggestions = ({
  value,
  setInputSearch,
  setShowSuggestion,
  setIsManualTyping,
}) => {
  const navigate = useNavigate();
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const { get } = useApiFetch();

  useEffect(() => {
    if (!value?.trim()) {
      setSuggestions([]);
      return;
    }

    const controller = new AbortController();

    const getSuggestions = async () => {
      try {
        const res = await get(`${baseUrl}/products/search`, { q: value }, 5, {
          signal: controller.signal,
        });
        setSuggestions(res.products || []);
      } catch (err) {
        if (err.name !== "AbortError") console.error(err);
      }
    };

    const debounce = setTimeout(getSuggestions, 300);
    return () => {
      clearTimeout(debounce);
      controller.abort(); 
    };
  }, [value]);

  const suggestionHandle = (item) => {
    const title = item.title.trim();
    setIsManualTyping(false); 
    setInputSearch(title);
    setShowSuggestion(false);
    dispatch(setQuery(title));
    navigate(`/search?q=${encodeURIComponent(title)}`);
  };

  if (suggestions.length === 0) return null;

  return (
    <div className="absolute top-full left-0 w-full bg-gray-800 rounded-md shadow-lg z-1000">
      {suggestions.map((item) => (
        <div
          key={item.id}
          onMouseDown={() => suggestionHandle(item)}
          className="px-4 py-3 hover:bg-gray-700 cursor-pointer text-white text-sm"
        >
          🔍 {item.title}
        </div>
      ))}
    </div>
  );
};

export default SearchSuggestions;
