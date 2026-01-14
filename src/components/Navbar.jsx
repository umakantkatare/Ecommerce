import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { CircleUser,ShoppingCart } from "lucide-react";
import SearchProduct from "./Search";
import { Search as SearchIcon} from "lucide-react";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [open, setOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  const goToHome = () => {
    logOut();
    setShowProfile(false);
    navigate("/");
  };
  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-[#1f1f1f] text-white px-6 py-3 flex items-center justify-between shadow-md relative">
        {/* Left */}
        <div className="flex items-center gap-4">
          {/* {logo} */}
                <ShoppingCart className="w-8 h-8 text-blue-600" />
          <h1 className="text-xl font-semibold tracking-wide">Ecommerce</h1>
        </div>

        {/* Hamburger (mobile only) */}
        <div>
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Desktop Search */}
        {/* <div className="relative hidden md:flex items-center">
          <FaSearch className="absolute left-3 text-gray-300" />
          <input
            type="text"
            value={searchBar}
            onChange={(e) => setSearchBar(e.target.value)}
            placeholder="Search products..."
            className="bg-[#3a3a3a] text-sm px-10 py-2 rounded-md outline-none placeholder-gray-400 w-[35vw]"
          />
        </div> */}
        <SearchProduct />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <NavLink to="/" className="hover:text-yellow-400">
            Home
          </NavLink>
          <NavLink to="/products" className="hover:text-yellow-400">
            Products
          </NavLink>
          <NavLink to="/cart" className="hover:text-yellow-400">
            Cart
          </NavLink>

          {/* {Object.keys(user)?.length != 0 ? ( */}
          {user ? (
            <CircleUser
            className="cursor-pointer"
              onClick={() => setShowProfile((prev) => !prev)}
              size={25}
            />
          ) : (
            <button onClick={() => navigate("/login")}> Login</button>
          )}
        </div>

        {/* Profile Dropdown */}
        {showProfile && user && (
          <div className="absolute right-0 top-10 w-56 bg-white text-black shadow-lg rounded p-4 z-50">
            <p className="font-semibold">{user?.name || "User"}</p>
            <p className="text-sm text-gray-900">{user?.username || "email"}</p>

            <button
              onClick={() => goToHome()}
              className="mt-3 w-1/2 flex justify-center bg-red-500 text-white py-1 rounded"
            >
              Logout
            </button>
          </div>
        ) }
      </nav>

      {/* Mobile Search */}
      <div className="md:hidden px-4 py-2 bg-[#1f1f1f]">
        <div className="relative">
          {/* <FaSearch className="absolute left-3 top-3 text-gray-300" /> */}
          <input
            type="text"
            // value={inputSearch}
            // onChange={(e) => setInputSearch(e.target.value)}
            placeholder="Search products..."
            className="bg-[#3a3a3a] text-sm px-10 py-2 rounded-md outline-none placeholder-gray-400 w-full text-white"
          />

          <button
            className="flex  justify-center
           bg-white/10 backdrop-blur-md
            border border-white/20
         text-white px-4 py-2 rounded-r-md
         hover:bg-white/20
         active:scale-95 transition absolute top-0 right-0 cursor-pointer"
          >
            <SearchIcon size={18} />
          </button>
        </div>
      </div>

      {/* Mobile Menu (Toggle) */}
      {open && (
        <div className="md:hidden bg-[#2a2a2a] text-white px-6 py-4 flex flex-col gap-4 shadow-lg">
          <NavLink onClick={() => setOpen(false)} to="/">
            Home
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/products">
            Products
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/cart">
            Cart
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/login">
            {user ? <CircleUser /> : <button> Login</button>}
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Navbar;
