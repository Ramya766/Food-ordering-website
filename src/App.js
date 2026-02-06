import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import UserClass from "./components/UserClass";
import userContext from "./utils/userContext";
import { Provider } from "react-redux"; //bridge
import appStore from "./utils/appStore";
const Grocery = lazy(() => import("./components/Grocery"));

const Footerr = () => {
  return (
    <div className="footer">
      <h2>© 2025 Namaste Restaurant Limited</h2>
    </div>
  );
};

const AppLayout = () => {
  //authentication
  const [username, setusername] = useState();
  useEffect(() => {
    //make an api call to get user info
    const data = {
      name: "Hari Rajendran",
    };
    setusername(data.name);
  }, []);

  return (
    <Provider store={appStore}> {/** store is imp it is passed as props [redux store] */}
    <div className="app">
      <userContext.Provider value={{ Loggedinfo: username }}>
        <Header />
      </userContext.Provider>
      <Outlet />{" "}
      {/** This will take the children based on path and replace with this component */}
    </div>
    </Provider>
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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resid", //:resid is a dynamic part
        element: <RestaurantMenu />,
      },
      {
        path: "/about",
        element: <UserClass />,
      },
    ],
    errorElement: <Error />,
  },
]);
const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<RouterProvider router={Router} />); //imp
