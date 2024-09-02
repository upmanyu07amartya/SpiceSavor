import React from "react";
import ReactDOM from "react-dom/client";

//React Element - React.createElement => object.
// When we render this obj to DOM, then it becomes a HTML element.
// JSX - Javascript syntax which is easier to create React elements.
// JSX is not a part of react.
// JSX is not HTML inside Javascript. It is like HTML like syntax.
//browsers cant understand JSX as it is not JS code.
// JSX is transpiled before going to JS engine using the package Babel

//const heading = React.createElement("h1",{id:"heading"},"Namaste React");
// const jsxHeading = (
//   <h1 id="heading" className="head">
//     Namaste React using JSX
//   </h1>
// );

const TitleComponent = () => {
  return <h2>Title</h2>;
};

// console.log("heading",heading)
// console.log("jsx",jsxHeadding)

// These 2 objs are one and the same thing

//REACT COMPONENTS
// CLASS BASED AND FUNCTION BASED

// React Functional Component - It is a normal JS function which returns some JSX

const HeadingComponent = () => {
  return (
    <div>
      <h1>Namaste React functional component</h1>
      <TitleComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading) - this is how to render a element
root.render(<HeadingComponent />); // this is how you render a component
