import React from "react";
import ReactDOM from "react-dom/client";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://www.logodesign.net/logo/smoking-burger-with-lettiuce-3624ld.png"
          className="logo"
        />
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

const RestoCard = (props) => {
  return (
    <div className="resto-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        alt="resto-logo"
        src="https://b.zmtcdn.com/data/dish_photos/90e/73423a90d047cacd7f096d6c4f88d90e.jpeg?fit=around|130:130&crop=130:130;*,*"
      />
      <h2>{props.resname}</h2>
      <h3>{props.cusine}</h3>
      <h3>4.5 stars</h3>
      <h3>1 hr</h3>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="resto-container">
        <RestoCard resname="SS Briyani" cusine="Briyani,North Indian" />
        <RestoCard resname="KFC" cusine="Burger,Fried Chicken" />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<AppLayout />);
