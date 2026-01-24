import AccordianBody from "./AccordianBody";

const RestaurantCategory = ({ data }) => {
  return (
    <div>
      {/**Header*/}
      <div className=" bg-gray-300 w-6/12 mx-auto my-4 shadow-lg p-3 rounded-lg  ">
        <div className="flex justify-between">
          <span className=" font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <AccordianBody items={data?.itemCards} key={data?.itemCards?.card?.info?.id}/>
      </div>
      {/**Accordian Body */}
    </div>
  );
};
export default RestaurantCategory;
