import React from "react";
import ReactDOM from "react-dom/client";
import { Body } from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { Header } from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
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
        path:"/restaurants/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading) - this is how to render a element
root.render(<RouterProvider router={appRouter} />); // this is how you render a component
