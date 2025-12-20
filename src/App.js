import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter,RouterProvider} from "react-router";
import About from "./components/About"
import Error from "./components/Error";


const Footerr=()=>{
  return(
    <div className="footer">
      <h2>© 2025 Namaste Restaurant Limited</h2>
    </div>
  )
}


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footerr/>
    </div>
  );
};
const Router=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>
  },
  {
    path:"/about",
    element:<About/>,
  },
]);
const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<RouterProvider router={Router}/>);
