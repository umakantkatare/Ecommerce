import React, { use, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";
import { Search as SearchIcon } from "lucide-react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import SearchSuggestions from "./SearchSuggestion";
import useDebounce from "../hooks/useDebounce";
import { useOutsideClick } from "../hooks/useOutsideClick";

const Search = () => {
  const [searchParams] = useSearchParams();
  const searchRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputSearch, setInputSearch] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [isManualTyping, setIsManualTyping] = useState(false);

  const location = useLocation();
  const debouncedSearchTerm = useDebounce(inputSearch, 400);
  const searchQuery = searchParams.get("q") || "";

  useOutsideClick(searchRef, () => setShowSuggestion(false));

  useEffect(() => {
    if (searchQuery) {
      setInputSearch(searchQuery);
      setIsManualTyping(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (isManualTyping && debouncedSearchTerm?.length > 2) {
      setShowSuggestion(true);
    } else {
      setShowSuggestion(false);
    }
  }, [debouncedSearchTerm, isManualTyping]);

  useEffect(() => {
    if (location.pathname === "/") {
      setInputSearch("");
      setIsManualTyping(false); 
      setShowSuggestion(false);
    }
  }, [location.pathname]);

  const searchHandle = (e) => {
    e.preventDefault();
    const term = inputSearch.trim();
    if (!term) return;

    setIsManualTyping(false);
    setShowSuggestion(false);
    navigate(`/search?q=${encodeURIComponent(term)}`);
    dispatch(setQuery(term));
  };

  return (
    <div ref={searchRef} className="relative flex w-full flex-col sm:w-[35vw]">
      <form className="relative flex items-center" onSubmit={searchHandle}>
        <input
          type="text"
          value={inputSearch}
          onChange={(e) => {
            setInputSearch(e.target.value);
            setIsManualTyping(true);
          }}
          onFocus={() =>
            isManualTyping && inputSearch.length > 2 && setShowSuggestion(true)
          }
          placeholder="Search products..."
          className="bg-[#3a3a3a] text-sm px-4 pr-10 py-2 rounded-md w-full text-white outline-none placeholder-gray-400"
        />
        {showSuggestion && (
          <SearchSuggestions
            value={debouncedSearchTerm}
            setInputSearch={setInputSearch}
            setShowSuggestion={setShowSuggestion}
            setIsManualTyping={setIsManualTyping}
          />
        )}
        <button type="submit" className="absolute right-0 p-2 ...">
          <SearchIcon size={18} />
        </button>
      </form>
    </div>
  );
};
export default Search;
