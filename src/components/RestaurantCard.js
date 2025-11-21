import { CDN_URL } from "../utils/constants";

const RestoCard = (props) => {
  console.log(props);
  const {resData}=props;
  const {name,cuisines,avgRating,costForTwo}=resData;
  return (
    <div className="resto-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
       src={CDN_URL}
        alt="LOGO"

        
      />
      <h2>{name}</h2>
      <h3>{cuisines.join((','))}</h3>
      <h3>{avgRating} Stars</h3>
      <h3>{costForTwo}</h3>
    </div>
  );
};

export default RestoCard;