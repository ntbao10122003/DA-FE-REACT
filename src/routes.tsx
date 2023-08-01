import { Navigate, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import WebsiteLayout from "./components/layouts/WebsiteLayout";
import ProductPage from "./components/ProductPage";
export const router = createBrowserRouter([
    { 
        path: "/",
        element: <WebsiteLayout/>,
        children: [
            {index: true, element: <HomePage/>},
            { path: "product", element: <ProductPage/>}
        ]}
])