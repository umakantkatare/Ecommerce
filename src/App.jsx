import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-gray-900 min-h-screen text-amber-50">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
