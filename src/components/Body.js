import { useState } from "react";
import { restaurantsList } from "../utils/data";
import RestaurantCard from "./RestaurantCard";

export const Body = () => {
  const [listOfRes, setListOfRes] = useState(restaurantsList);

  return (
    <div className="body">
      {/* <div className="Search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRes.filter(
              (res) => res.info.avgRating > 4.1
            );
            setListOfRes(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRes.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};
