import RestoCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";

const Body = () => {
  //Local state Variable - super power variable
  const [listofRestaurants, setlistofRestaurants] = useState(
    resList.restaurants
  );
  console.log(resList);
  useEffect(() => {
    FetchApi();
  }, []);
  const FetchApi = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9716&lng=77.5946"
    );
    const json=await data.json();
    console.log(json);
  };

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
            console.log("function Rendered");
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
