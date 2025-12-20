import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router";

export const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Namaste Restaurant" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
            </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName == "Login" ? setbtnName("Log out") : setbtnName("Login"); //When the setfunction is called,it also renders the whole header component again.
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
