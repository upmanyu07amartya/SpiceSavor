import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="m-auto w-6/12">
        <button
          className="p-2 m-2 bg-red-400 text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
            <h3 className="font-bold">Cart is empty. Add items to cart</h3>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
