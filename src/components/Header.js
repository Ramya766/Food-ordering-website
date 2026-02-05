import { useState, useEffect,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import { useShowOnline } from "../utils/useShowOnline";
import userContext from "../utils/userContext";
export const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlinestatus = useShowOnline();
  const {Loggedinfo}=useContext(userContext);
  console.log(Loggedinfo);
  //I'm using tailwind for styling
  //sm,lg media query
  return (
    <div className="flex justify-between shadow-xl bg-green-300 m-2 sm:bg-amber-300 lg:bg-orange-400" > 
      <div className="logo-container">
        <img src={LOGO_URL} alt="Namaste Restaurant" className="w-40" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-5 m-10 justify-between">
          <li>Online Status:{onlinestatus ? "✅" : "🔴"}</li>
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-3">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-3">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-3">Cart</li>
          <button
            className="px-3"
            onClick={() => {
              btnName == "Login" ? setbtnName("Log out") : setbtnName("Login"); //When the setfunction is called,it also renders the whole header component again.
            }}
          >
            {btnName}
          </button>
          <li className="font-bold">{Loggedinfo}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
