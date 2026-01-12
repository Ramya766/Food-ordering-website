import { CDN_URL } from "../utils/constants";

const RestoCard = (props) => {
  console.log(props);
  const {resData}=props;
  const {name,cuisines,avgRating,costForTwo}=resData;
  const imageurl=CDN_URL+resData.cloudinaryImageId;

  return (

    <div className="m-4 p-4 w-[290px] h-[450px] bg-gray-300 hover:bg-gray-500">
      <img
       src={imageurl}
        alt={name}
        className=" rounded-md w-60 h-60"
        
      />
      <h2 className=" font-bold my-4 text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating} Stars</h3>
      <h3>{costForTwo}</h3>
    </div>
  );
};

export default RestoCard;