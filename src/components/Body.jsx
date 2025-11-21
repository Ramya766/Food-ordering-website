import RestoCard from "./RestaurantCard";
import resList from "../utils/mockData";
import  {useState} from "react";

const Body = () => {
  //Local state Variable - super power variable
   const[listofRestaurants,setlistofRestaurants]=useState([
     {
      id: "1",
      name: "Burger King",
      cloudinaryImageId: "bb7ae33c5324fb37df95319c1b6ce1cb",
      cuisines: ["Burgers", "Fast Food"],
      avgRating: 3.8,
      costForTwo: "₹350 for two",
    },
     {
      id: "2",
      name: "KFC",
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      cuisines: ["Fried Chicken", "Snacks"],
      avgRating: 4.1,
      costForTwo: "₹400 for two",
    },
   ]);

  
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //Filter logic here
            const filtered = listofRestaurants.filter(
              (res) => res.avgRating > 4
            );
            setlistofRestaurants(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="resto-container">
        {
          listofRestaurants.map((res) => (
            <RestoCard key={res.id} resData={res} />
          )) //wow this amazing
        }
      </div>
    </div>
  );
};

export default Body;
