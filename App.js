
// #region Basic React from JS
// const heading = React.createElement(
//     "h1",
//     {id: "heading"},
//     "Hello! Welcome to react from App.js"
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/* <div id="parent">
    <div id= "child">
        <h1>I am in h1 tag</h1>
        <h2>I am in h1 tag</h2>
    </div>
</div> */

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement("h1",{}, "I am in h1 tag"), React.createElement("h2", {}, "I am in h2 tag")]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
