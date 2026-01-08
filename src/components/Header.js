import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import { useShowOnline } from "../utils/useShowOnline";
export const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlinestatus = useShowOnline();
  //I'm using tailwind for styling
  return (
    <div className="flex justify-between"> 
      <div className="logo-container">
        <img src={LOGO_URL} alt="Namaste Restaurant" className="w-40" />
      </div>
      <div className="nav-items">
        <ul className="flex p-5 m-10 justify-between">
          <li>Online Status:{onlinestatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
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
