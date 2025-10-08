/** Nested Elements in React
 * <div id="parent">
 * <div id="child">
 * <h1>I'm h1 tag</h1>
 * </div>
 * <div id="child2">
 *   <h1>I'm h1 tag</h1>
 * </div>
 * </div>
 */
const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"}, //the attribute should be in double quotes
        [React.createElement("h1",{},"I'm h1 tag"),
            React.createElement("h1",{},"I'm h1 tag")
        ]
    ),
     React.createElement("div",{id:"child2"}, //the attribute should be in double quotes
        [React.createElement("h1",{},"I'm h1 tag"),
            React.createElement("h1",{},"I'm h1 tag")
        ]
    )
)
console.log(parent); //object
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);