import {CDN_URL} from "../utils/constants"
RestaurantCard = ({ resData }) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      {/* Inline style is a JS object */}
      <img
        className="res-logo"
        alt="image"
        src={
          CDN_URL +
          resData.cloudinaryImageId
        }
      />

      <h3>{resData.name}</h3>
      <h4>{resData.cuisines.join(", ")}</h4>
      <h4>{resData.avgRating} stars</h4>
      <h4>{resData.costForTwo}</h4>
      <h4>{resData.sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;