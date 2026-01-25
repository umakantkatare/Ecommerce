import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./pages/Product.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Cart from "./pages/Cart.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import CartProduct from "./context/CartContext.jsx";
import SignUp from "./pages/SignUp.jsx";
import AuthContextWrapper from "./context/AuthContext.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store";
<<<<<<< HEAD
<<<<<<< Updated upstream
import SearchResult from "./components/searchResult.jsx";
=======
import SearchResult from "./components/SearchResult.jsx";
>>>>>>> 46e9a38c5a8f3ba7e7d34a1e246e91f67d2aa0b6
import CategoryProduct from './pages/CategoryProduct';
=======
import SearchResult from "./components/SearchResult.jsx";
import CategoryProduct from "./pages/CategoryProduct";
>>>>>>> Stashed changes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/productDetails/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/search",
        element: <SearchResult />,
      },
      {
        path: "/products/category/:slug",
        element: <CategoryProduct />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AuthContextWrapper>
        <CartProduct>
          <RouterProvider router={router} />
        </CartProduct>
      </AuthContextWrapper>
    </Provider>
  </StrictMode>,
);
