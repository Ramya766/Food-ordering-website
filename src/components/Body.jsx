import RestoCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmerui from "./Shimmer";

const Body = () => {
  //Local state Variable - super power variable
  const [listofRestaurants, setlistofRestaurants] = useState(
    []
  );

  useEffect(() => {
    FetchApi();
  }, []);
  const FetchApi = async () => {
    console.log("Useeffect called");
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0697174&lng=80.2432839&collection=83655&tags=layout_CCS_Cake&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    console.log(json.data.cards);
    const restaurants=json?.data?.cards.filter((r)=>r.card.card.info).map((r)=>r.card.card.info);
    setlistofRestaurants(restaurants);
    
  };
    if(listofRestaurants.length===0){
    return <Shimmerui/>
  }

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
