import { Navigate, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import WebsiteLayout from "./components/layouts/WebsiteLayout";
import ProductPage from "./components/ProductPage";
import ProductDetailPage from "./components/ProductDetailPage";
import Cart from "./components/Cart";
import Payment from "./components/Payment";
import { Signup } from "./components/Signup";
export const router = createBrowserRouter([
    { 
        path: "/",
        element: <WebsiteLayout/>,
        children: [
            {index: true, element: <HomePage/>},
            { path: "product", element: <ProductPage/>},
            { path: "product/:id", element: <ProductDetailPage/>},
            { path: "product/cart", element: <Cart/>},
            { path: "product/payment", element: <Payment/>},
            { path: "signup", element: <Signup/>}
        ]}
])