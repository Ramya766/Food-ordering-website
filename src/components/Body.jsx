import RestoCard,{withPromoted} from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmerui from "./Shimmer";
import { Link } from "react-router";
import { useShowOnline } from "../utils/useShowOnline";
const Body = () => {
  //Local state Variable - super power variable
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [filteredRestaurant, SetfilteredRestaurant] = useState([]); //I resolved the bug here
  const [searchText, setSearchText] = useState("");
console.log(listofRestaurants);
  const RestocardPromoted=withPromoted(RestoCard); //why we're passing the restocard

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

  const onlinestatus = useShowOnline();
  console.log(onlinestatus);
  if (onlinestatus == false)
    return (
      <div className="status">
        <h4>Connection Error</h4>
        <h5>please check your connection and try again.</h5>
      </div>
    );

  return listofRestaurants.length === 0 ? ( //conditional rendering
    <Shimmerui /> //using ternary operator
  ) : (
    <div className="body">
      <div className="p-4 m-2 flex items-center">
        <div className=" flex">
          <input
            type="text"
            className=" border-2 rounded-lg mr-4 w-70"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-green-300 rounded-lg px-4 py-2 flex"
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
        <div>
          <button
            className=" flex items-center bg-gray-300 px-4 py-2 rounded-lg ml-4"
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
      </div>

      <div className="flex flex-wrap">
        {
          filteredRestaurant.map((res) => (
            <Link key={res.id} to={"/restaurants" + res.id}>
              {/** if the rest is promoted ,then add promoted label to it */}
              {res.promoted ? ( <RestocardPromoted resData={res} /> ) :  ( <RestoCard resData={res}  /> )}
            
            </Link>
          )) //wow this amazing
        }
      </div>
    </div>
  );
};

export default Body;
