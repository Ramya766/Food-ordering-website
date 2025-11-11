import React from "react";
import ReactDOM from "react-dom/client";
const Header = () => {
  return (
    <div>
      <div className="logo">
        <img src="https://www.logodesign.net/logo/smoking-burger-with-lettiuce-3624ld.png"/>
        <img src="https://pngtree.com/freepng/food-logo_8239850.html"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};
const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<AppLayout />);

