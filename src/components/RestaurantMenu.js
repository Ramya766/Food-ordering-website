import Shimmerui from "./Shimmer";
import { useParams } from "react-router";
import { useState } from "react";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const [showIndex, setshowIndex] = useState(null);
  const { resid } = useParams(); //destructinng it on the fly
  const ResInfo = useRestaurantMenu(resid);
  if (ResInfo === null) return <Shimmerui />;
  const { name, cuisines, costForTwo } =
    ResInfo?.data?.cards[2]?.card?.card?.info; //don't know how this works in action //object destructing
  const itemCards =
    ResInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;
  const categories =
    ResInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );
  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl my-6">{name}</h1>
      <h2 className="font-bold text-lg ">
        {cuisines.join(",")}-{costForTwo}
      </h2>
      {/**Categories Accordian */}
      {categories.map((c, index) => (
        //My Rescategory is a controlled component bcz parent is controlling
        <RestaurantCategory
          data={c?.card?.card}
          key={c?.card?.card?.title}
          showItem={index === showIndex ? true : false}
          setshowIndex={() => setshowIndex(index)} //this is so confusing...
        />
      ))}
    </div>
  );
};
// ** The single responsibility of this component is only displaying the menu.**
export default RestaurantMenu;
