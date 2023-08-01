import { Navigate, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import WebsiteLayout from "./components/layouts/WebsiteLayout";
import ProductPage from "./components/ProductPage";
import ProductDetailPage from "./components/ProductDetailPage";
export const router = createBrowserRouter([
    { 
        path: "/",
        element: <WebsiteLayout/>,
        children: [
            {index: true, element: <HomePage/>},
            { path: "product", element: <ProductPage/>},
            { path: "product/:id", element: <ProductDetailPage/>}
        ]}
])