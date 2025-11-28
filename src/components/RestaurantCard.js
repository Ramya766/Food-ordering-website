import { CDN_URL } from "../utils/constants";

const RestoCard = (props) => {
  console.log(props);
  const {resData}=props;
  const {name,cuisines,avgRating,costForTwo}=resData;
  const imageurl=CDN_URL+resData.cloudinaryImageId;

  return (

    <div className="resto-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
       src={imageurl}
        alt={name}

        
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating} Stars</h3>
      <h3>{costForTwo}</h3>
    </div>
  );
};

export default RestoCard;