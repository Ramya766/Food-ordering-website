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
  console.log(props);
  const {resData}=props;
  return (
    <div className="resto-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        alt="resto-logo"
        src={`https://res.cloudinary.com/swiggy/image/upload/${resData.cloudinaryImageId}`}
      />
      <h2>{resData.name}</h2>
      <h3>{resData.cuisines.join((','))}</h3>
      <h3>{resData.avgRating}</h3>
      <h3>{resData.costForTwo}</h3>
    </div>
  );
};
const resObj= {
  "restaurants": [
    {
      "id": "1",
      "name": "Burger King",
      "cloudinaryImageId": "bb7ae33c5324fb37df95319c1b6ce1cb",
      "cuisines": ["Burgers", "Fast Food"],
      "avgRating": 4.1,
      "costForTwo": "₹350 for two"
    },
    {
      "id": "2",
      "name": "KFC",
      "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
      "cuisines": ["Fried Chicken", "Snacks"],
      "avgRating": 4.3,
      "costForTwo": "₹400 for two"
    },
    {
      "id": "3",
      "name": "Domino's Pizza",
      "cloudinaryImageId": "v1537386207/yb1klydqjz90wgmwq4is",
      "cuisines": ["Pizza", "Italian"],
      "avgRating": 4.0,
      "costForTwo": "₹300 for two"
    },
    {
      "id": "4",
      "name": "Subway",
      "cloudinaryImageId": "4c7793dd6b8f926ca425d932d3c2d5a2",
      "cuisines": ["Healthy Food", "Sandwich"],
      "avgRating": 4.2,
      "costForTwo": "₹250 for two"
    },
    {
      "id": "5",
      "name": "A2B - Adyar Ananda Bhavan",
      "cloudinaryImageId": "pdod4o1em9potwsd22rs",
      "cuisines": ["South Indian", "Sweets"],
      "avgRating": 4.4,
      "costForTwo": "₹300 for two"
    },
    {
      "id": "6",
      "name": "SS Hyderabad Biryani",
      "cloudinaryImageId": "27e26b1a1a31b55683cac2c673d882bd",
      "cuisines": ["Biryani", "Indian"],
      "avgRating": 4.1,
      "costForTwo": "₹450 for two"
    },
    {
      "id": "7",
      "name": "Saravana Bhavan",
      "cloudinaryImageId": "zjvchc2odmm6mwvpgswq",
      "cuisines": ["South Indian", "Veg"],
      "avgRating": 4.5,
      "costForTwo": "₹350 for two"
    },
    {
      "id": "8",
      "name": "McDonald's",
      "cloudinaryImageId": "3bb0dcc7a732ed38b6fd6c681f6d2b45",
      "cuisines": ["Burgers", "Snacks"],
      "avgRating": 4.2,
      "costForTwo": "₹300 for two"
    },
    {
      "id": "9",
      "name": "Taco Bell",
      "cloudinaryImageId": "6e44e7fdbf7eef44f37c3a1d5a8bfa05",
      "cuisines": ["Mexican", "Snacks"],
      "avgRating": 4.1,
      "costForTwo": "₹350 for two"
    },
    {
      "id": "10",
      "name": "Cream Stone",
      "cloudinaryImageId": "b29652c51c72fcf53a1df25c725601e7",
      "cuisines": ["Desserts", "Ice Cream"],
      "avgRating": 4.3,
      "costForTwo": "₹300 for two"
    },
    {
      "id": "11",
      "name": "Barbeque Nation",
      "cloudinaryImageId": "v1fjjxasdfnmxxf8q7xe",
      "cuisines": ["BBQ", "North Indian"],
      "avgRating": 4.4,
      "costForTwo": "₹1200 for two"
    },
    {
      "id": "12",
      "name": "Anjappar Chettinad",
      "cloudinaryImageId": "jryjxtx5lh1rkejofjxv",
      "cuisines": ["Chettinad", "South Indian"],
      "avgRating": 4.1,
      "costForTwo": "₹500 for two"
    },
    {
      "id": "13",
      "name": "Buhari Restaurant",
      "cloudinaryImageId": "zjtjbdv12j6rwrnp4y0e",
      "cuisines": ["Biryani", "Grill"],
      "avgRating": 4.2,
      "costForTwo": "₹550 for two"
    },
    {
      "id": "14",
      "name": "Kailash Parbat",
      "cloudinaryImageId": "f84ckj56mwr2mmgvhf4z",
      "cuisines": ["North Indian", "Chaat"],
      "avgRating": 4.0,
      "costForTwo": "₹450 for two"
    },
    {
      "id": "15",
      "name": "Coffee Day",
      "cloudinaryImageId": "v1fjjqzj6hckok6g8jpn",
      "cuisines": ["Cafe", "Beverages"],
      "avgRating": 4.0,
      "costForTwo": "₹350 for two"
    }
  ]
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="resto-container">
        <RestoCard resData={resObj.restaurants[0]} />
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
