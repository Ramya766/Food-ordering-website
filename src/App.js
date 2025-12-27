import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";



const Footerr = () => {
  return (
    <div className="footer">
      <h2>© 2025 Namaste Restaurant Limited</h2>
    </div>
  );
};


const AppLayout = () => {

  return (
    <div className="app">

      <Header />
      <Outlet />{" "}
      {/** This will take the children based on path and replace with this component */}
      
    </div>
  );
};
const Router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      //To create children Routes
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/restaurants/:resid", //:resid is a dynamic part
        element:<RestaurantMenu/>
      }
    ],
    errorElement: <Error />,
  },
]);
const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<RouterProvider router={Router} />); //imp
