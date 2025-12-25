import {useEffect, useState} from "react";
import Shimmerui from "./Shimmer";
const RestaurantMenu=()=>{
    const[ResInfo,SetResInfo]=useState(null);
    useEffect(()=>{
        showMenu();
    },[]);
    const showMenu=async()=>{
        const data=await fetch("https://namastedev.com/api/v1/listRestaurantMenu/123456");
        const json=await data.json();
        console.log(json);
        SetResInfo(json);
    }
    if(ResInfo === null ) return <Shimmerui/>;
   const {name,cuisines,costForTwo}=ResInfo?.data?.cards[2]?.card?.card?.info; //don't know how this works in action //object destructing
   const{itemCards}=ResInfo.data.crards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
    return (
    
        <div className="Menu">
           
            <h1>{name}</h1>
            <h2>{cuisines.join(",")}</h2>
            <h3>{costForTwo}</h3>
          
        </div>
    )
}
export default RestaurantMenu;