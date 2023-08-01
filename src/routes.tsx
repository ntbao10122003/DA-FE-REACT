import { Navigate, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import WebsiteLayout from "./components/layouts/WebsiteLayout";
import ProductPage from "./components/product-page/ProductPage";
import ProductDetailPage from "./components/product-detail/ProductDetailPage";
import Cart from "./components/cart/Cart";
import Payment from "./components/payment/Payment";
export const router = createBrowserRouter([
    { 
        path: "/",
        element: <WebsiteLayout/>,
        children: [
            {index: true, element: <HomePage/>},
            { path: "product", element: <ProductPage/>},
            { path: "product/:id", element: <ProductDetailPage/>},
            { path: "cart", element: <Cart/>},
            { path: "product/payment", element: <Payment/>}
        ]}
])