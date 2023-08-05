import { Navigate, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import WebsiteLayout from "./components/layouts/WebsiteLayout";
import ProductPage from "./components/product-page/ProductPage";
import ProductDetailPage from "./components/product-detail/ProductDetailPage";
import Cart from "./components/cart/Cart";
import Payment from "./components/payment/Payment";
import Signup from "./components/signup/Signup";
import Signin from "./components/signin/Signin";
import LayoutAdmin from "./components/layouts/AdminLayout";
import ProductList from "./components/admin/ProductList";
import ProductAdd from "./components/admin/ProductAdd";
import ProductEdit from "./components/admin/ProductEdit";
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
        element: <LayoutAdmin />,
        children: [
            { index: true, element: <Navigate to="dashboard" /> },
            {
                path: "dashboard",
                element: <h2 className="font-bold text-2xl">Thống kê</h2>,
            },
            {
                path: "product",
                element: <ProductList />,
            },
            {
                path: "product/add",
                element: <ProductAdd />,
            },
            {
              path: "product/:idProduct/edit",
              element: <ProductEdit />,
          },
            // {
            //     path: "product/:idProduct/edit",
            //     element: <AdminProductEdit />,
            // },
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
