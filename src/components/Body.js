import { useState, useEffect,useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withOpenLabel } from "./RestaurantCard";
import UserContext from "../utils/UserContext";
export const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardOpen = withOpenLabel(RestaurantCard)

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
  console.log("list",listOfRes)
  const { setUserName, loggedInUser } = useContext(UserContext);

  return listOfRes?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="Search">Search</div> */}
      <div className="flex justify-between ml-7">
        <div className="m-4 p-4 ">
          <input
            type="text"
            className="border  border-solid border-gray-700 rounded-md h-8"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-200 m-4 rounded-lg"
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
        <div className="m-4 p-4  flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRes.filter(
                (res) => res.info.avgRating > 4.1
              );
              setListOfRes(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
          <div className="m-4 p-4 flex items-center">
            <label>Username : </label>
            <input
              type="text"
              className="border  border-solid border-gray-700 rounded-md h-8 p-3"
              value={loggedInUser}
              onChange={(e) => {
                //setSearchText(e.target.value);
                setUserName(e.target.value)
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap ml-10">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/* if res is open then add Open label to it */}
            {restaurant?.info?.isOpen ? (
              <RestaurantCardOpen resData={restaurant.info} />
            ) : (
              <RestaurantCard resData={restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
