import AccordianBody from "./AccordianBody";
import { useState,} from "react";
const RestaurantCategory = ({ data,showItem,setshowIndex }) => {

  const handleChange = () => {
    setshowIndex();
  };
  return (
    <div>
      {/**Header*/}
      <div className=" bg-gray-200 w-6/12 mx-auto my-4 shadow-lg p-3 rounded-lg  ">
        <div className="flex justify-between">
          <span className=" font-bold text-lg cursor-pointer" onClick={handleChange}>
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        { showItem && <AccordianBody
          items={data?.itemCards}
          key={data?.itemCards?.card?.info?.id}
        />} 
      </div>
      {/**Accordian Body */}
    </div>
  );
};
export default RestaurantCategory;
