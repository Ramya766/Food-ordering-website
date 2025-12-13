import RestoCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmerui from "./Shimmer";

const Body = () => {
  //Local state Variable - super power variable
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const[searchText,setSearchText]=useState("");
  console.log("Body Rendered");
  useEffect(() => {
    FetchApi();
  }, []);
  const FetchApi = async () => {
    const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0697174&lng=80.2432839&collection=83907&tags=layout_CCS_Coffee&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    )
    const json = await data.json();
    const restaurants = json?.data?.cards
      .filter((r) => r.card.card.info)
      .map((r) => r.card.card.info);
      console.log(json);
    setlistofRestaurants(restaurants);
  };

  return listofRestaurants.length === 0 ? ( //conditional rendering
    <Shimmerui /> //using ternary operator
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText}
          onChange={(e)=>{
            setSearchText(e.target.value);
          }}
          />
          <button onClick={()=>{
            //Filter the restraunt cards and update the UI
            const filteredRestaurant=listofRestaurants.filter((res)=>{
              resData.name.includes(searchText);
            });
            setlistofRestaurants(filteredRestaurant);
          }}>Search</button>
        </div>
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
