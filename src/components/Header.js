import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

export const Header = () => {
  const [btnName,setbtnName]=useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img
        src={LOGO_URL}
          alt="Namaste Restaurant"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login" onClick={()=>{
            btnName=="Login"?
            setbtnName("Log out"):setbtnName("Login") //When the setfunction is called,it also renders the whole header component again.
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header; 