import RestoCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmerui from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
  //Local state Variable - super power variable
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [filteredRestaurant, SetfilteredRestaurant] = useState([]); //I resolved the bug here
  const [searchText, setSearchText] = useState("");
  console.log("Body Rendered");
  useEffect(() => {
    FetchApi();
  }, []);
  const FetchApi = async () => {
    const data = await fetch(
     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966135&lng=77.5920581&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    const restaurants = json?.data?.cards
      .filter((r) => r.card.card.info)
      .map((r) => r.card.card.info);
    setlistofRestaurants(restaurants);
    SetfilteredRestaurant(restaurants); //When i filter i'm modifing the original list,so that once i filtered if want to
    //search new rest i couldn't get it bcz i'm searching it in filtered rest
  };

  return listofRestaurants.length === 0 ? ( //conditional rendering
    <Shimmerui /> //using ternary operator
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //Filter the restraunt cards and update the UI
              const filteredRestaurant = listofRestaurants.filter((res) => {
                return res.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              SetfilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //Filter logic here
            const filtered = listofRestaurants.filter(
              (res) => res.avgRating > 4
            );
            SetfilteredRestaurant(filtered);
            
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="resto-container">
        {
          filteredRestaurant.map((res) => (
            <Link key={res.id} to={"/restaurants"+res.id}>
            <RestoCard  resData={res} />
            </Link>
          )) //wow this amazing
        }
      </div>
    </div>
  );
};

export default Body;
