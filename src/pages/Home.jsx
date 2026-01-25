import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  Heart,
  Star,
  TrendingUp,
  Package,
  Shield,
} from "lucide-react";
import Carousel from "../components/Carousel";
import CategoryResult from "../components/CategoryResult";
import Features from "../components/Features";
import NewArrival from "../components/NewArrival";
import TopProducts from "../components/TopProducts";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <div className="min-h-[56vh] ">
      <div>
        <CategoryResult />
      </div>
      <div>
      <Carousel />
      </div>
      <div>
        <Features/>
      </div>
      <div>
<NewArrival/>
      </div>
      <div>
        <TopProducts/>
      </div>
      <div>
        <NewsLetter/>
      </div>
<<<<<<< Updated upstream
      <div>
        <SearchSuggestions/>
      </div>
=======
>>>>>>> Stashed changes
    </div>
  );
};

export default Home;
