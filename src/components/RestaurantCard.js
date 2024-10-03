import {CDN_URL} from "../utils/constants"
RestaurantCard = ({ resData }) => {
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="image"
        src={
          CDN_URL +
          resData.cloudinaryImageId
        }
      />

      <h3 className="font-bold py-2 text-lg">{resData.name}</h3>
      <h4>{resData.cuisines.join(", ")}</h4>
      <h4>{resData.avgRating} stars</h4>
      <h4>{resData.costForTwo}</h4>
      <h4>{resData.sla.deliveryTime} mins</h4>
    </div>
  );
};

//Higher order component 
// input - Restaurant Card
// outpiut - Open Res card

export const withOpenLabel = (WrappedComponent)=>{
  return (props)=>{
    return (
      <div>
        {props.resData.isOpen && <label className="absolute bg-red-400 text-white m-3 p-1 rounded-md"  >Open</label>}
        <WrappedComponent {...props} />
      </div>
    );
  }

}

export default RestaurantCard;