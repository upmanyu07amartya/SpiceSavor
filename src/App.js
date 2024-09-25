import React from "react";
import ReactDOM from "react-dom/client";
import { Body } from "./components/Body";
import { Header } from "./components/Header";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading) - this is how to render a element
root.render(<AppLayout />); // this is how you render a component
