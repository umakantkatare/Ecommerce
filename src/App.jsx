import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const [searchProducts, setSearchProducts] = useState("")
  return (
    <>
      <div className="bg-gray-900 min-h-screen text-amber-50">
        <Navbar searchProducts={searchProducts} setSearchProducts={setSearchProducts} />
        <Outlet context={{ searchProducts }}/>
        <Footer />
      </div>
    </>
  );
}

export default App;
