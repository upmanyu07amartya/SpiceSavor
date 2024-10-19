import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
export const Header = () => {
  const data = useContext(UserContext);
  const online = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2 px-2 lg:bg-yellow-100">
      <div className="ml-2">
        <img className="w-40 rounded-lg my-4" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-6 m-4">
          <li className="px-2">{online ? "Online" : "Offline"}</li>
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2 font-bold">
            <Link to="/cart">Cart({cartItems.length})</Link>
          </li>
          <li className="my-[-6px] px-2">
            <button
              className="p-2 bg-gray-400 rounded-lg"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="px-2">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
