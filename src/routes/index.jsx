import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../pages/Products";
import Profile from "../pages/Profile";
import ProductCategory from "../pages/ProductCategory";
import Template from "../Template";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import CheckOut from "../pages/CheckOut";
import { auth } from "../middleware/auth";




//membuat daftar routing 
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Template/>,
        //mengisi <Outlet> di template.jsx
        children: [
            { path: "/", element: <App /> },
            { path: "/products", element: <Products />},
            { path: "/profile", element: <Profile/>},
            { path: "/categories/:categoryId", element: <ProductCategory />},
            { path: "/login", element: <Login />},
            
        ]

    },
    {
        path: "/", element: <Template />,
        loader: auth,
        children: [
            { path: "/cart", element: <Cart />},
            { path: "/checkout", element: <CheckOut/>},
        ]

    }

]);