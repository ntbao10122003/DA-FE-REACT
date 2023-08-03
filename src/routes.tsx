import { Navigate, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import WebsiteLayout from "./components/layouts/WebsiteLayout";
import ProductPage from "./components/product-page/ProductPage";
import ProductDetailPage from "./components/product-detail/ProductDetailPage";
import Cart from "./components/cart/Cart";
import Payment from "./components/payment/Payment";
import ListProducts from "./components/admin/ListProducts";
import AdminLayouts from "./components/layouts/AdminLayout";
import Signup from "./components/signup/Signup";
import Signin from "./components/signin/Signin";
import Categories from "./components/admin/Catesories";
import ListUser from "./components/admin/ListUser";
import CartList from "./components/admin/CartList";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <WebsiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "product", element: <ProductPage /> },
      { path: "product/:id", element: <ProductDetailPage /> },
      { path: "cart", element: <Cart /> },
      { path: "product/payment", element: <Payment /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayouts />,
    children: [
        { index: true, element: <ListProducts /> },
        { path: "category", element: <Categories />},
        { path: "user", element: <ListUser />},
        { path: "cart", element: <CartList />}
    ],
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "signin",
    element: <Signin />,
  },
]);
