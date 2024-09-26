import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_API_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  console.log("if ID",resId)

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        Menu_API_URL + resId + "&catalog_qa=undefined&submitAction=ENTER"
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const json = await response.json();
      setResInfo(json?.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };
  console.log("Full response data:", resInfo);

  useEffect(() => {
    fetchMenu();
  }, []);

  if (resInfo === null) return <Shimmer />;

  // Safe access to avoid errors
  const cardInfo = resInfo?.cards[2]?.card?.card?.info;
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;

  if (!cardInfo || !itemCards) {
    return <div>Error: Menu data is not available.</div>;
  }

  const { name, cuisines, costForTwoMessage } = cardInfo;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {item.card.info.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
