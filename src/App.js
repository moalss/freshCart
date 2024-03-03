import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Brands from "./Componenten/Brands/Brands";
import Categories from "./Componenten/Categories/Categories";
import Home from "./Componenten/Home/Home";
import Products from "./Componenten/Products/Products";
import Layout from "./Componenten/Layout/Layout";
import NotFound from "./NotFound";
import Register from "./Componenten/Register/Register";
import Login from "./Componenten/Login/Login";





export default function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout></Layout>,
      children: [
        { index: true, element: <Login></Login> },
        { path: "brands", element: <Brands></Brands> },
        { path: "products", element: <Products></Products> },
        { path: "categories", element: <Categories></Categories> },
        { path: "register", element: <Register></Register> },
        { path: "home", element: <Home></Home> },
        { path: "*", element: <NotFound></NotFound> },
      ],
    },
  ]);
  return (
   
  <RouterProvider router={routes}> </RouterProvider>
  
  );
}
