import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { CircleUser, ShoppingCart } from "lucide-react";
import SearchBar from "./Search";

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
      <nav className="w-full bg-[#1f1f1f] text-white px-6 py-3 gap-5 flex flex-col sm:flex-row sm:items-center sm:justify-between shadow-md relative z-999">
        {/* Left */}
        <div className=" w-full flex items-center justify-between ">
          <Link to="/" className="flex items-center gap-4">
            {/* {logo} */}
            <ShoppingCart className="w-8 h-8 text-blue-600" />
            <h1 className="text-xl font-semibold tracking-wide">Ecommerce</h1>
          </Link>

          <div>
            <button className="md:hidden" onClick={() => setOpen(!open)}>
              {open ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        <div className="sm:absolute sm:left-1/2 sm:-translate-x-1/2 ">
          <SearchBar />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-bold border-b-2 border-[yellow-400]"
                : "hover:text-yellow-400"
            }
          >
            Home
          </NavLink>
          <NavLink to="/products" className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-bold border-b-2 border-[yellow-400]"
                : "hover:text-yellow-400"
            }>
            Products
          </NavLink>
          <NavLink to="/cart" className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-bold border-b-2 border-[yellow-400]"
                : "hover:text-yellow-400"
            }>
            Cart
          </NavLink>

          {user ? (
            <CircleUser
              className="cursor-pointer"
              onClick={() => setShowProfile((prev) => !prev)}
              size={25}
            />
          ) : (
            <button onClick={() => navigate("/login")} className="cursor-pointer"> Login</button>
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
        )}
      </nav>

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
