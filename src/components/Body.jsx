import RestoCard from "./RestaurantCard";
import resList from "../utils/mockData";
import  {useState} from "react";

const Body = () => {
  //Local state Variable - super power variable
   const[listofRestaurants,setlistofRestaurants]=useState(resList.restaurants);
   console.log(resList);

  
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
