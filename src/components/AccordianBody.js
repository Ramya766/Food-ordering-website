import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
const AccordianBody = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
    console.log(dispatch(addItem(item)));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-4 m-2 shadow-md border-gray-400 border-b-2 text-left  justify-between flex"
        >
          <div className="w-9/12 ">
            <span className="font-semibold">{item.card.info.name}</span>
            <span> - ₹{item.card.info.price / 10}</span>
            <p className=" text-md my-5">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 p-2 ">
            <div className=" absolute rounded-2xl shadow-2xl">
              <button
                className=" bg-white text-black p-2 rounded-lg mx-2 my-2 border border-gray-700"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              className="w-30 "
              src={CDN_URL + item.card.info.imageId}
              alt="img"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default AccordianBody;
