import Shimmerui from "./Shimmer";
import {useParams} from "react-router";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
const {resid}=useParams(); //destructinng it on the fly
const ResInfo=useRestaurantMenu(resid);
  if (ResInfo === null) return <Shimmerui />;
  const { name, cuisines, costForTwo } =
    ResInfo?.data?.cards[2]?.card?.card?.info; //don't know how this works in action //object destructing
  const itemCards =
    ResInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;
  return (
    <div className="Menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(",")}</h2>
      <h3>{costForTwo}</h3>
      <h2>Menu</h2>
      {itemCards.map((item) => (
        <li key={item?.card?.info?.id}>
          {item?.card?.info?.name} - {"Rs:"} {item?.card?.info?.price / 100}
        </li>
      ))}
    </div>
  );
};
// ** The single responsibility of this component is only displaying the menu.**
export default RestaurantMenu;
