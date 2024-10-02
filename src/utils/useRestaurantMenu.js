import { useEffect, useState } from "react";
import  {Menu_API_URL} from "./constants";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    //try {
    const response = await fetch(
      Menu_API_URL + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await response.json();
    setResInfo(json?.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
