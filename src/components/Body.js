import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
export const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  //Whenever state updates, react triggers a reconciliation algo(re-render component)

  useEffect(() => {
    fetchData();
  }, []);
  //useEffect takes 2 arguments - the first argument is an arrow function.
  //the second argument is a dependency array
  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
    );
    const json = await data.json();
    const formattedData =
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRes(formattedData);
    setFilteredRestaurant(formattedData);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Lokks like you are offline</h1>;

  return listOfRes?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="Search">Search</div> */}
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter restaurants card and update UI
              const filteredRes = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRes);
            }}
          >
            Search
          </button>
        </div>
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
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};
