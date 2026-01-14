import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";
import { Search as SearchIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SearchSuggestions from "./SearchSuggestion";

const Search = () => {
  const dispatch = useDispatch();
  const naviate = useNavigate();
  const [inputSearch, setInputSearch] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false)

  const searchHandle = (e) => {
    e.preventDefault();
    if (!inputSearch?.trim()) return alert("write something here...");
    naviate("/search");
    dispatch(setQuery(inputSearch));
    setInputSearch("");
  };
  return (
    <>
      {/* desktop search */}
      <div className="relative hidden md:flex flex-col w-[35vw]">
        <div>
          <form
            className="relative flex items-center"
            onSubmit={(e) => searchHandle(e)}
          >
            <input
              type="text"
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
              onFocus={() => setShowSuggestion(true)}
              onBlur={() => setShowSuggestion(false)}
              placeholder="Search products..."
              className="bg-[#3a3a3a] text-sm px-4 pr-10 py-2 
      rounded-md outline-none placeholder-gray-400 w-full text-white"
            />

            {inputSearch && showSuggestion && <SearchSuggestions value={inputSearch} />}

            <button
              className="absolute right-0 cursor-pointer flex items-center justify-center
      bg-white/10 backdrop-blur-md
      border border-white/20
      text-white p-2 rounded
      hover:bg-white/20
      active:scale-95 transition"
            >
              <SearchIcon size={18} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Search;
