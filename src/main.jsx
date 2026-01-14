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
import SearchResult from "./components/searchResult.jsx";
import CategoryProduct from './pages/CategoryProduct';
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
        path:"/products/category/:slug",
        element:<CategoryProduct />
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
  </StrictMode>
);
