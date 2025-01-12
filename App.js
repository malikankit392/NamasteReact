  import React from "react";
  import ReactDOM from "react-dom/client"

  // React.createElement => Object => HTMLElement(render)

  const heading = React.createElement("h1", {id : "heading"}, "Namaste React");
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(heading);


  //  JSX is not HTML in JS.
  // JSX(transpiled )
  const jsxHeading = <h1 className="head">Namaste React using JSX</h1>
  console.log(jsxHeading);
  root.render(jsxHeading);

  // If we want to write code in multiple lines it should be under () brackets.
  /* Eg: const jsxHeading2 = (<h1 className="head">
    Namaste React Example
    </h1>) */

  // React Components
  // React Functional Components

  const Title = () => (
    <h1 className = "heading" tabIndex = "5">
        Namaste react using JSX
    </h1>
  )

  const number = 10000;
  const HeadingComponent = () => (
    <div id="container">
      <h2 id="heading">{number}</h2>
      <Title/>
      <h1 id="heading">Namaste React Functional Component</h1>
    </div> 
  )

  // using curly braces {} we can write JS code in the JSX like {number}

  root.render(<HeadingComponent/>)