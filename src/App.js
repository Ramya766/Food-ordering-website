import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";



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
const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<AppLayout />);
