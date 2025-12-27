import { useEffect, useState } from "react";
import Shimmerui from "./Shimmer";
import {useParams} from "react-router";

const RestaurantMenu = () => {
  const [ResInfo, SetResInfo] = useState(null);
const {resid}=useParams(); //destructinng it on the fly


  useEffect(() => {
    showMenu();
  }, []);
  const showMenu = async () => {
    const data = await fetch(
      "https://namastedev.com/api/v1/listRestaurantMenu/" + resid
    );
    const json = await data.json();
    console.log(json);
    SetResInfo(json);
  };
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
export default RestaurantMenu;
