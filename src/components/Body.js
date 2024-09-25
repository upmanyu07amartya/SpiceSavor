import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

export const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  //useEffect takes 2 arguments - the first argument is an arrow function.
  //the second argument is a dependency array
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
    );
    const json = await data.json();
    const formattedData =
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRes(formattedData);
  };

  if(listOfRes.length === 0 ){
    return <Shimmer/>
  }

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
